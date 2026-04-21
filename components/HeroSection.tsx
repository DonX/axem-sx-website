import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function HeroSection() {
  const { t } = useTranslation('home');
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Main_Wallpaper_AXEM_SX.png"
          alt="AXEM-SX Wallpaper"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle hex grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z' fill='none' stroke='%23c9a65f' stroke-width='1'/%3E%3Cpath d='M28 36 L56 52 L56 84 L28 100 L0 84 L0 52 Z' fill='none' stroke='%23c9a65f' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center px-6 pt-24 pb-16 gap-8">

        {/* Headline */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            AXEM-<span className="text-amber-400">SX</span>
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-[0.25em] text-amber-200/80 uppercase">
            {t('hero.tagline')}
          </p>
          <div className="w-24 h-px bg-amber-400/60 my-2" />
          <p className="max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            {t('hero.description')}
          </p>
          <p className="mt-2 text-xs tracking-wider text-amber-300/60 uppercase font-semibold max-w-xl text-center">
            {t('hero.builtOn')}
          </p>
        </div>

        {/* CTA Buttons + Edition Breakdown */}
        <div className="flex flex-col items-center gap-4 mt-6 w-full">

          {/* Buttons row */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Light Edition */}
            <Link
              href="https://sourceforge.net/projects/axem-sx/files/releases/v1.0/axem-sx-light.x86_64-1.0.0.iso/download"
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-7 bg-amber-500 hover:bg-amber-400 text-[#6B0F1A] font-black text-xl tracking-normal uppercase transition-colors duration-200 shadow-[0_4px_24px_rgba(201,166,95,0.3)] hover:shadow-[0_4px_36px_rgba(201,166,95,0.5)]"
            >
              {t('hero.downloadLight')}
            </Link>
            {/* Pro Edition */}
            <Link
              href="https://sourceforge.net/projects/axem-sx/files/releases/v1.0/axem-sx-pro.x86_64-1.0.0.iso/download"
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-7 bg-[#1a1612] border-2 border-amber-400/70 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-black text-xl tracking-normal uppercase transition-colors duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            >
              {t('hero.downloadPro')}
            </Link>
          </div>

          {/* Edition breakdown */}
          <div className="flex flex-col sm:flex-row gap-0 w-full max-w-2xl mt-2 border border-amber-400/15 divide-y sm:divide-y-0 sm:divide-x divide-amber-400/15">
            {/* Light */}
            <div className="flex-1 px-6 py-4 flex flex-col gap-1 text-left">
              <span className="text-amber-400/80 text-xs font-bold tracking-widest uppercase">{t('hero.editionLightLabel')}</span>
              <p className="text-white/50 text-xs leading-relaxed">{t('hero.editionLightDesc')}</p>
            </div>
            {/* Pro */}
            <div className="flex-1 px-6 py-4 flex flex-col gap-1 text-left">
              <span className="text-amber-400/80 text-xs font-bold tracking-widest uppercase">{t('hero.editionProLabel')}</span>
              <p className="text-white/50 text-xs leading-relaxed">{t('hero.editionProDesc')}</p>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs tracking-widest text-amber-200 uppercase">{t('hero.scroll')}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="#f6d860" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
