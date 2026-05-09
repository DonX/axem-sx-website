import PageLayout from '@/components/PageLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'support'])) },
});

function Section({ num, title, children, wide = false }: { num: string; title: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="text-amber-400 font-mono text-xs tracking-widest">§{num}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className={`text-white/70 leading-relaxed text-base flex flex-col gap-3 ${wide ? 'w-full' : 'max-w-3xl'}`}>{children}</div>
    </div>
  );
}

const FAQ_KEYS = ['1', '2', '3', '4', '5', '6'] as const;
const QUICK_CARDS = [
  { key: 'Pro', pkg: 'axem-sx-pro-full', muted: false },
  { key: 'Light', pkg: 'axem-sx-light-full', muted: false },
  { key: 'Gold', pkg: 'axem-sx-gold-full', muted: true },
] as const;

export default function SupportPage() {
  const { t } = useTranslation('support');
  return (
    <PageLayout title={t('metaTitle')} description={t('metaDesc')}>
      {/* Hero */}
      <div className="w-full py-20 px-6 text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="w-8 h-8" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {t('heroHeading')} <span className="text-amber-400">{t('heroAccent')}</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/60 leading-relaxed">{t('heroSub')}</p>
        </div>
      </div>

      {/* Body */}
      <div className="w-full px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">

          {/* Quick start — one command */}
          <Section num="1" title={t('quickTitle')} wide>
            <p>{t('quickIntro')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 w-full">
              {QUICK_CARDS.map(c => (
                <div key={c.key} className={`flex flex-col gap-2 p-5 rounded-xl bg-black/40 border text-left ${c.muted ? 'border-amber-400/5 opacity-60' : 'border-amber-400/20'}`}>
                  <p className="text-amber-300 font-bold text-sm tracking-wider">{t(`quick${c.key}Label`)}</p>
                  <pre className="text-xs font-mono text-amber-100/90 bg-black/60 rounded-md p-3 overflow-x-auto leading-relaxed border border-amber-400/10"><code>sudo zypper refresh
sudo zypper install {c.pkg}</code></pre>
                  {c.muted && (
                    <p className="text-xs font-mono text-amber-400/50 uppercase tracking-widest">{t('quickGoldStatus')}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-sm text-white/50 italic mt-2">{t('quickFooter')}</p>
          </Section>

          {/* Troubleshooting FAQ */}
          <Section num="2" title={t('faqTitle')} wide>
            <p>{t('faqIntro')}</p>
            <div className="flex flex-col gap-3 mt-2">
              {FAQ_KEYS.map(n => (
                <details key={n} className="group rounded-xl bg-white/5 border border-amber-400/10 open:border-amber-400/30 transition-colors">
                  <summary className="cursor-pointer list-none p-4 flex items-start gap-3 text-white/85 font-semibold">
                    <span className="text-amber-400/70 font-mono text-xs mt-1 shrink-0">{n.padStart(2, '0')}</span>
                    <span className="flex-1">{t(`faq${n}Q`)}</span>
                    <span className="text-amber-400/60 text-lg leading-none mt-0.5 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="px-4 pb-4 pl-12 text-sm text-white/65 leading-relaxed">
                    {t(`faq${n}A`)}
                  </div>
                </details>
              ))}
            </div>
          </Section>

          {/* Live ISO credentials */}
          <div className="flex flex-col gap-4 p-6 border-2 border-amber-400/40 bg-amber-400/5 rounded-xl">
            <h3 className="text-base font-black text-amber-400 uppercase tracking-widest">
              🔑 {t('liveTitle')}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{t('liveBody')}</p>
            <div className="flex flex-col sm:flex-row gap-6 mt-1">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/40 uppercase tracking-widest">{t('liveUser')}</span>
                <code className="text-2xl font-black text-amber-400 font-mono">{t('liveValue')}</code>
              </div>
              <div className="hidden sm:block w-px bg-amber-400/20 self-stretch" />
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/40 uppercase tracking-widest">{t('livePass')}</span>
                <code className="text-2xl font-black text-amber-400 font-mono">{t('liveValue')}</code>
              </div>
            </div>
            <p className="text-xs text-amber-300/50 italic mt-1">{t('liveTip')}</p>
          </div>

          {/* Reach the team */}
          <Section num="3" title={t('reachTitle')} wide>
            <p>{t('reachBody')}</p>
            <div className="flex flex-col items-start gap-3 mt-2">
              <a
                href="https://github.com/DonX/axem-sx-website/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-amber-400/50 bg-amber-400/10 text-amber-200 text-base font-bold tracking-wide hover:border-amber-400 hover:bg-amber-400/20 hover:text-amber-100 transition-all duration-200"
              >
                {t('reachCta')}
              </a>
              <p className="text-xs text-white/40 italic max-w-2xl mt-1">{t('reachNote')}</p>
            </div>
          </Section>

        </div>
      </div>
    </PageLayout>
  );
}
