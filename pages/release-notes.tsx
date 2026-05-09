import PageLayout from '@/components/PageLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'release-notes'])) },
});

const SCREENSHOTS = [
  { key: 'glance1Caption', src: '/AXEM-ScreenSHOTS/axem-sx-pro-desktop.png' },
  { key: 'glance2Caption', src: '/AXEM-ScreenSHOTS/pro-desktop-with-AXEM-SX-TopMenu.png' },
  { key: 'glance3Caption', src: '/AXEM-ScreenSHOTS/App-axem-control-hub_shot1.png' },
  { key: 'glance4Caption', src: '/AXEM-ScreenSHOTS/App-axem-control-hub-logs.png' },
  { key: 'glance5Caption', src: '/AXEM-ScreenSHOTS/App-soft-depot_shot.png' },
  { key: 'glance6Caption', src: '/AXEM-ScreenSHOTS/App-Ai-SX-ChatGPT-shot.png' },
] as const;

function ReleaseSection({ num, title, children, wide = false }: { num: string; title: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-amber-400/50 uppercase tracking-widest">{num}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
      <div className={`flex flex-col items-center gap-3 text-sm text-white/60 leading-relaxed mx-auto w-full ${wide ? 'max-w-5xl' : 'max-w-2xl'}`}>
        {children}
      </div>
    </div>
  );
}

function Note({ type, children }: { type: 'known' | 'irritant' | 'tip' | 'warn'; children: React.ReactNode }) {
  const { t } = useTranslation('release-notes');
  const styles = {
    known: 'border-amber-400/20 bg-amber-400/5 text-amber-200/70',
    irritant: 'border-stone-400/15 bg-stone-400/5 text-stone-200/60',
    tip: 'border-green-400/20 bg-green-400/5 text-green-200/70',
    warn: 'border-red-400/20 bg-red-400/5 text-red-200/70',
  };
  const labelKeys = { known: 'labelKnown', irritant: 'labelIrritant', tip: 'labelTip', warn: 'labelWarn' };
  return (
    <div className={`px-4 py-3 rounded-xl border ${styles[type]} flex gap-3`}>
      <span className="font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">{t(labelKeys[type])}:</span>
      <span>{children}</span>
    </div>
  );
}

export default function ReleaseNotesPage() {
  const { t } = useTranslation('release-notes');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIdx(null);
      if (e.key === 'ArrowRight') setOpenIdx(i => (i === null ? null : (i + 1) % SCREENSHOTS.length));
      if (e.key === 'ArrowLeft') setOpenIdx(i => (i === null ? null : (i - 1 + SCREENSHOTS.length) % SCREENSHOTS.length));
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIdx]);

  return (
    <PageLayout title={t('metaTitle')} description={t('metaDesc')}>
      {/* Hero */}
      <div className="w-full py-20 px-6 text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="w-8 h-8" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">{t('heroHeading')}</h1>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {([['badgeVersion', '1.0.1 Stable Release'], ['badgeBase', 'openSUSE Leap 16.0'], ['badgeArch', 'x86_64-v2 only']] as const).map(([key, val]) => (
              <div key={key} className="px-3 py-1 rounded-full border border-amber-400/20 text-xs text-amber-300/70">
                <span className="text-white/30">{t(key)}: </span>{val}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">

          <div className="mx-auto w-full max-w-4xl rounded-2xl border border-amber-400/30 bg-amber-400/5 p-6 md:p-8 flex flex-col gap-5 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-amber-400/70 uppercase tracking-widest">{t('resumeEyebrow')}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('resumeHeadline')}</h2>
              <p className="text-sm text-white/60 leading-relaxed">{t('resumeIntro')}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(['1', '2', '3', '4'] as const).map(n => (
                <li key={n} className="flex gap-3 p-3 rounded-xl bg-black/30 border border-amber-400/10">
                  <span className="text-amber-400 shrink-0 mt-0.5">◆</span>
                  <span className="text-sm text-white/70 leading-relaxed">
                    <strong className="text-amber-200 font-semibold">{t(`resumeH${n}Strong`)}</strong>{' '}
                    {t(`resumeH${n}`)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/40 italic">{t('resumeReadMore')}</p>
          </div>

          <ReleaseSection num="1" title={t('s1Title')}>
            <p>{t('s1p')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              {(['1', '2', '3'] as const).map(n => (
                <div key={n} className="p-3 rounded-xl bg-white/5 border border-amber-400/10">
                  <p className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-1">{t(`s1card${n}Label`)}</p>
                  <p className="text-white/50 text-xs leading-relaxed">{t(`s1card${n}Desc`)}</p>
                </div>
              ))}
            </div>
          </ReleaseSection>

          <ReleaseSection num="2" title={t('firstCmdTitle')} wide>
            <p>{t('firstCmdIntro')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 w-full">
              {([
                { key: 'Pro', pkg: 'axem-sx-pro-full', muted: false },
                { key: 'Light', pkg: 'axem-sx-light-full', muted: false },
                { key: 'Gold', pkg: 'axem-sx-gold-full', muted: true },
              ] as const).map(c => (
                <div key={c.key} className={`flex flex-col gap-2 p-5 rounded-xl bg-black/40 border text-left ${c.muted ? 'border-amber-400/5 opacity-60' : 'border-amber-400/20'}`}>
                  <p className="text-amber-300 font-bold text-sm tracking-wider">{t(`firstCmd${c.key}Label`)}</p>
                  <pre className="text-xs font-mono text-amber-100/90 bg-black/60 rounded-md p-3 overflow-x-auto leading-relaxed border border-amber-400/10"><code>sudo zypper refresh
sudo zypper install {c.pkg}</code></pre>
                  {c.muted && (
                    <p className="text-xs font-mono text-amber-400/50 uppercase tracking-widest">{t('firstCmdGoldStatus')}</p>
                  )}
                </div>
              ))}
            </div>
            <Note type="tip">{t('firstCmdGoFurther')}</Note>
          </ReleaseSection>

          <ReleaseSection num="3" title={t('profilesTitle')} wide>
            <p>{t('profilesIntro')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 w-full">
              {(['Light', 'Pro', 'Gold'] as const).map(p => (
                <div key={p} className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-amber-400/10 text-left">
                  <p className="text-amber-300 font-bold text-sm tracking-wider">{t(`profiles${p}Label`)}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{t(`profiles${p}Desc`)}</p>
                  <p className="text-xs font-mono text-amber-400/60 uppercase tracking-widest mt-1">{t(`profiles${p}Status`)}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <p className="text-xs uppercase tracking-widest text-amber-400/60 font-mono">{t('profilesWhyTitle')}</p>
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-white/70">
                <li>· {t('profilesWhy1')}</li>
                <li>· {t('profilesWhy2')}</li>
                <li>· {t('profilesWhy3')}</li>
              </ul>
            </div>
            <Note type="tip">{t('profilesNote')}</Note>
          </ReleaseSection>

          <ReleaseSection num="4" title={t('glanceTitle')} wide>
            <p>{t('glanceIntro')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 w-full">
              {SCREENSHOTS.map((s, i) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  aria-label={t(s.key)}
                  className="group relative aspect-[16/10] rounded-lg overflow-hidden border border-amber-400/15 bg-black hover:border-amber-400/50 focus:outline-none focus:ring-2 focus:ring-amber-400/60 transition"
                >
                  <Image src={s.src} alt={t(s.key)} fill sizes="(min-width: 640px) 33vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                  <span className="absolute inset-x-0 bottom-0 px-2 py-1.5 text-[10px] leading-tight text-white/90 text-left bg-gradient-to-t from-black/85 via-black/40 to-transparent line-clamp-2">{t(s.key)}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-amber-300/50 italic mt-1">{t('glanceHint')}</p>
          </ReleaseSection>

          <ReleaseSection num="5" title={t('s2Title')}>
            <p>{t('s2p')}</p>
            <ul className="flex flex-col gap-2 mt-1">
              {(['1', '2', '3'] as const).map(n => (
                <li key={n}><strong className="text-white/80">{t(`s2li${n}Strong`)}</strong> {t(`s2li${n}`)}</li>
              ))}
            </ul>
            <Note type="tip">{t('s2tip')}</Note>
          </ReleaseSection>

          <ReleaseSection num="6" title={t('s3Title')}>
            <p>{t('s3p')}</p>
            <ul className="flex flex-col gap-2 mt-1">
              {(['1', '2', '3'] as const).map(n => (
                <li key={n}><strong className="text-white/80">{t(`s3li${n}Strong`)}</strong> {t(`s3li${n}`)}</li>
              ))}
            </ul>
          </ReleaseSection>

          <ReleaseSection num="7" title={t('s4Title')}>
            <p>{t('s4p')}</p>
            <ul className="flex flex-col gap-2 mt-1">
              {(['1', '2'] as const).map(n => (
                <li key={n}><strong className="text-white/80">{t(`s4li${n}Strong`)}</strong> {t(`s4li${n}`)}</li>
              ))}
            </ul>
            <Note type="irritant">{t('s4known')}</Note>
          </ReleaseSection>

          <ReleaseSection num="8" title={t('s5Title')}>
            <p>{t('s5p')}</p>
            <ul className="flex flex-col gap-2 mt-1">
              {(['1', '2', '3'] as const).map(n => (
                <li key={n}><strong className="text-white/80">{t(`s5li${n}Strong`)}</strong> {t(`s5li${n}`)}</li>
              ))}
            </ul>
          </ReleaseSection>

          <ReleaseSection num="9" title={t('s6Title')}>
            <ul className="flex flex-col gap-2">
              {(['1', '2', '3'] as const).map(n => (
                <li key={n}><strong className="text-white/80">{t(`s6li${n}Strong`)}</strong> {t(`s6li${n}`)}</li>
              ))}
            </ul>
          </ReleaseSection>

          <ReleaseSection num="10" title={t('s7Title')}>
            <ul className="flex flex-col gap-2">
              {(['1', '2', '3'] as const).map(n => (
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

          <ReleaseSection num="11" title={t('s8Title')}>
            <Note type="known">{t('s8known1')}</Note>
            <Note type="known">{t('s8known2')}</Note>
            <Note type="irritant">{t('s8known3')}</Note>
          </ReleaseSection>

        </div>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t(SCREENSHOTS[openIdx].key)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx(null); }}
            aria-label={t('glanceClose')}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl leading-none focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >×</button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx((openIdx - 1 + SCREENSHOTS.length) % SCREENSHOTS.length); }}
            aria-label={t('glancePrev')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >‹</button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpenIdx((openIdx + 1) % SCREENSHOTS.length); }}
            aria-label={t('glanceNext')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >›</button>
          <div
            className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1 min-h-0">
              <Image
                src={SCREENSHOTS[openIdx].src}
                alt={t(SCREENSHOTS[openIdx].key)}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="text-sm text-white/80 text-center px-12">
              {t(SCREENSHOTS[openIdx].key)}
              <span className="ml-3 text-white/40 font-mono text-xs">{openIdx + 1} / {SCREENSHOTS.length}</span>
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
