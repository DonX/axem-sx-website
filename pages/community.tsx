import PageLayout from '@/components/PageLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import { useState } from 'react';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'community'])) },
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-5 h-5 shrink-0 mb-4" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
        <h2 className="text-2xl md:text-4xl font-bold text-white">{title}</h2>
      </div>
      <div className="w-full max-w-4xl mx-auto">{children}</div>
    </div>
  );
}

export default function CommunityPage() {
  const { t } = useTranslation('community');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate submission loop
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

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
      <div className="w-full px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">

          {/* Newsletter Section */}
          <Section title={t('newsletterHeading')}>
            <div className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
              <p className="text-white/60 text-base leading-relaxed text-center">
                {t('newsletterSub')}
              </p>
              
              {status === 'success' ? (
                <div className="w-full p-4 rounded-xl border border-green-500/30 bg-green-500/5 text-green-400 font-semibold text-center animate-fade-in">
                  ✓ {t('newsletterSuccess')}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="w-full flex flex-col sm:flex-row gap-3 mt-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('newsletterEmail')}
                    className="flex-1 px-4 py-3 rounded-lg border border-amber-400/25 bg-white/5 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-sm"
                    disabled={status === 'loading'}
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-amber-400/30 shrink-0 cursor-pointer disabled:opacity-50"
                  >
                    {status === 'loading' ? '...' : t('newsletterButton')}
                  </button>
                </form>
              )}
            </div>
          </Section>

          {/* Contribution Grid Section */}
          <Section title={t('contributeTitle')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-4">
              
              {/* Card 1: Coding */}
              <div className="p-6 rounded-xl bg-white/5 border border-amber-400/10 flex flex-col gap-3 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-bold text-amber-300">{t('cardCodingTitle')}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{t('cardCodingDesc')}</p>
                <a
                  href="https://github.com/DonX/axem-sx-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold mt-2 inline-flex items-center gap-1 self-start"
                >
                  GitHub Repository →
                </a>
              </div>

              {/* Card 2: Creole Translations */}
              <div className="p-6 rounded-xl bg-white/5 border border-amber-400/10 flex flex-col gap-3 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-bold text-amber-300">{t('cardCreoleTitle')}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{t('cardCreoleDesc')}</p>
                <a
                  href="https://github.com/DonX/axem-sx-website/issues/new?title=Creole+Translation+Interest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold mt-2 inline-flex items-center gap-1 self-start"
                >
                  Open Translation Issue →
                </a>
              </div>

              {/* Card 3: Package Maintenance */}
              <div className="p-6 rounded-xl bg-white/5 border border-amber-400/10 flex flex-col gap-3 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-bold text-amber-300">{t('cardPackagingTitle')}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{t('cardPackagingDesc')}</p>
                <a
                  href="https://build.opensuse.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold mt-2 inline-flex items-center gap-1 self-start"
                >
                  Explore Open Build Service →
                </a>
              </div>

              {/* Card 4: Hardware Compatibility */}
              <div className="p-6 rounded-xl bg-white/5 border border-amber-400/10 flex flex-col gap-3 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-bold text-amber-300">{t('cardHardwareTitle')}</h3>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{t('cardHardwareDesc')}</p>
                <a
                  href="https://github.com/DonX/axem-sx-website/issues/new?title=Hardware+Report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold mt-2 inline-flex items-center gap-1 self-start"
                >
                  Submit Hardware Logs →
                </a>
              </div>

            </div>
          </Section>

          {/* Infrastructure Support Section */}
          <Section title={t('sponsorsTitle')}>
            <div className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
              <p className="text-white/60 text-base leading-relaxed text-center">
                {t('sponsorsText')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
                <a
                  href="https://github.com/sponsors/DonX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-amber-400/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold text-sm tracking-wider uppercase transition-all duration-200 text-center"
                >
                  {t('sponsorsButton')}
                </a>
                <a
                  href="https://paypal.me/AXEMSX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#1a1612] border border-white/10 hover:border-amber-400/50 text-white/80 hover:text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 text-center"
                >
                  {t('sponsorsPaypal')}
                </a>
              </div>
            </div>
          </Section>

          {/* Etiquette & Support Model */}
          <Section title={t('etiquetteTitle')}>
            <div className="max-w-2xl mx-auto p-6 rounded-xl border border-amber-400/10 bg-white/[0.01]">
              <p className="text-white/60 text-sm leading-relaxed text-center italic">
                {t('etiquetteText')}
              </p>
            </div>
          </Section>

        </div>
      </div>
    </PageLayout>
  );
}
