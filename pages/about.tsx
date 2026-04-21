import PageLayout from '@/components/PageLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'about'])) },
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
        <div className="w-5 h-5 shrink-0 mt-1" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className="md:pl-9">{children}</div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useTranslation('about');
  return (
    <PageLayout title={t('metaTitle')} description={t('metaDesc')}>
      {/* Hero Band */}
      <div className="w-full py-24 px-6 text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="w-8 h-8" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            {t('heroHeading')} <span className="text-amber-400">{t('heroAccent')}</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/60 leading-relaxed">{t('heroSub')}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full px-6 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-24">

        <Section title={t('s1Title')}>
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
            <p>{t('s1p1')}</p>
            <p>{t('s1p2')}</p>
            <blockquote className="border-l-2 border-amber-400/50 pl-4 text-amber-200/60 italic">
              &ldquo;{t('s1quote')}&rdquo;
            </blockquote>
          </div>
        </Section>

        <Section title={t('s2Title')}>
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
            <p>{t('s2p1')}</p>
            <p>{t('s2p2')}</p>
            <p>{t('s2p3')}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(['1','2','3'] as const).map((n) => (
                <div key={n} className="p-4 rounded-xl bg-white/5 border border-amber-400/10 flex flex-col gap-2">
                  <span className="text-sm font-bold text-amber-300 tracking-wider uppercase">{t(`s2card${n}Label`)}</span>
                  <span className="text-xs text-white/50 leading-relaxed">{t(`s2card${n}Desc`)}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title={t('s3Title')}>
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
            <p>{t('s3intro')}</p>
            <div className="flex flex-col gap-3">
              {(['1','2','3'] as const).map((n) => (
                <div key={n} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-amber-400/10">
                  <div className="w-1 shrink-0 rounded-full bg-amber-400/60" />
                  <div>
                    <span className="text-sm font-bold text-amber-300 tracking-wider">{t(`s3pillar${n}Name`)}</span>
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{t(`s3pillar${n}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title={t('s4Title')}>
          <div className="text-white/70 leading-relaxed flex flex-col gap-4">
            <p>{t('s4intro')}</p>
            <ul className="flex flex-col gap-2">
              {(['1','2','3','4','5'] as const).map((n) => (
                <li key={n} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 w-3 h-3 shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: '#c9a65f' }} />
                  {t(`s4item${n}`)}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title={t('s5Title')}>
          <div className="text-white/70 leading-relaxed flex flex-col gap-4">
            <p>{t('s5intro')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(['1','2','3','4'] as const).map((n) => (
                <div key={n} className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-amber-400/10">
                  <span className="text-sm font-bold text-amber-300">{t(`s5lang${n}`)}</span>
                  <span className="text-xs text-white/40">{t(`s5lang${n}Note`)}</span>
                  <span className={`text-xs font-semibold mt-1 ${n === '1' ? 'text-green-400' : 'text-white/30'}`}>{t(`s5lang${n}Status`)}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 italic">{t('s5note')}</p>
          </div>
        </Section>

      </div>
      </div>
    </PageLayout>
  );
}
