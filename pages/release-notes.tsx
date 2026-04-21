import PageLayout from '@/components/PageLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'release-notes'])) },
});

function ReleaseSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-amber-400/50 w-6 text-right shrink-0">{num}</span>
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="pl-10 flex flex-col gap-3 text-sm text-white/60 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Note({ type, children }: { type: 'known' | 'tip' | 'warn'; children: React.ReactNode }) {
  const styles = {
    known: 'border-amber-400/20 bg-amber-400/5 text-amber-200/70',
    tip: 'border-green-400/20 bg-green-400/5 text-green-200/70',
    warn: 'border-red-400/20 bg-red-400/5 text-red-200/70',
  };
  const labels = { known: 'Known Issue', tip: 'Tip', warn: 'Warning' };
  return (
    <div className={`px-4 py-3 rounded-xl border ${styles[type]} flex gap-3`}>
      <span className="font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">{labels[type]}:</span>
      <span>{children}</span>
    </div>
  );
}

export default function ReleaseNotesPage() {
  const { t } = useTranslation('release-notes');
  return (
    <PageLayout title={t('metaTitle')} description={t('metaDesc')}>
      {/* Hero */}
      <div className="w-full py-20 px-6 text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="w-8 h-8" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{t('heroHeading')}</h1>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {([['badgeVersion','0.9 Founders Preview'],['badgeBase','openSUSE Leap 16.0'],['badgeArch','x86_64-v2 only']] as const).map(([key, val]) => (
              <div key={key} className="px-3 py-1 rounded-full border border-amber-400/20 text-xs text-amber-300/70">
                <span className="text-white/30">{t(key)}: </span>{val}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-20">

        <ReleaseSection num="1" title={t('s1Title')}>
          <p>{t('s1p')}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {(['1','2','3'] as const).map(n => (
              <div key={n} className="p-3 rounded-xl bg-white/5 border border-amber-400/10">
                <p className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-1">{t(`s1card${n}Label`)}</p>
                <p className="text-white/50 text-xs leading-relaxed">{t(`s1card${n}Desc`)}</p>
              </div>
            ))}
          </div>
        </ReleaseSection>

        <ReleaseSection num="2" title={t('s2Title')}>
          <p>{t('s2p')}</p>
          <ul className="flex flex-col gap-2 mt-1">
            {(['1','2','3'] as const).map(n => (
              <li key={n}><strong className="text-white/80">{t(`s2li${n}Strong`)}</strong> {t(`s2li${n}`)}</li>
            ))}
          </ul>
          <Note type="tip">{t('s2tip')}</Note>
        </ReleaseSection>

        <ReleaseSection num="3" title={t('s3Title')}>
          <p>{t('s3p')}</p>
          <ul className="flex flex-col gap-2 mt-1">
            {(['1','2','3'] as const).map(n => (
              <li key={n}><strong className="text-white/80">{t(`s3li${n}Strong`)}</strong> {t(`s3li${n}`)}</li>
            ))}
          </ul>
        </ReleaseSection>

        <ReleaseSection num="4" title={t('s4Title')}>
          <p>{t('s4p')}</p>
          <ul className="flex flex-col gap-2 mt-1">
            {(['1','2'] as const).map(n => (
              <li key={n}><strong className="text-white/80">{t(`s4li${n}Strong`)}</strong> {t(`s4li${n}`)}</li>
            ))}
          </ul>
          <Note type="known">{t('s4known')}</Note>
        </ReleaseSection>

        <ReleaseSection num="5" title={t('s5Title')}>
          <p>{t('s5p')}</p>
          <ul className="flex flex-col gap-2 mt-1">
            {(['1','2','3'] as const).map(n => (
              <li key={n}><strong className="text-white/80">{t(`s5li${n}Strong`)}</strong> {t(`s5li${n}`)}</li>
            ))}
          </ul>
        </ReleaseSection>

        <ReleaseSection num="6" title={t('s6Title')}>
          <ul className="flex flex-col gap-2">
            {(['1','2','3'] as const).map(n => (
              <li key={n}><strong className="text-white/80">{t(`s6li${n}Strong`)}</strong> {t(`s6li${n}`)}</li>
            ))}
          </ul>
        </ReleaseSection>

        <ReleaseSection num="7" title={t('s7Title')}>
          <ul className="flex flex-col gap-2">
            {(['1','2','3'] as const).map(n => (
              <li key={n}><strong className="text-white/80">{t(`s7li${n}Strong`)}</strong> {t(`s7li${n}`)}</li>
            ))}
          </ul>
          <Note type="warn">{t('s7warn')}</Note>
        </ReleaseSection>

        {/* Live credentials */}
        <div className="flex flex-col gap-4 p-6 border-2 border-amber-400/40 bg-amber-400/5">
          <h3 className="text-base font-black text-amber-400 uppercase tracking-widest">
            🔑 {t('liveCredTitle')}
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">{t('liveCredBody')}</p>
          <div className="flex flex-col sm:flex-row gap-6 mt-1">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-white/40 uppercase tracking-widest">{t('liveCredUser')}</span>
              <code className="text-2xl font-black text-amber-400 font-mono">axem</code>
            </div>
            <div className="hidden sm:block w-px bg-amber-400/20 self-stretch" />
            <div className="flex flex-col gap-1">
              <span className="text-xs text-white/40 uppercase tracking-widest">{t('liveCredPass')}</span>
              <code className="text-2xl font-black text-amber-400 font-mono">axem</code>
            </div>
          </div>
          <p className="text-xs text-amber-300/50 italic mt-1">{t('liveCredTip')}</p>
        </div>

        <ReleaseSection num="8" title={t('s8Title')}>
          <Note type="known">{t('s8known1')}</Note>
          <Note type="known">{t('s8known2')}</Note>
        </ReleaseSection>

      </div>
      </div>
    </PageLayout>
  );
}
