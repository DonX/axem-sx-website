import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleLocale = () => {
    const next = router.locale === 'en' ? 'fr' : 'en';
    router.push(router.asPath, router.asPath, { locale: next });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-3"
      style={{
        background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)',
        borderBottom: '1px solid rgba(201,166,95,0.2)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.9)',
      }}
    >
      {/* Inner container */}
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10">
            <Image
              src="/AXEM-SX_W64.png"
              alt="AXEM-SX Logo"
              fill
              className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-xl font-bold tracking-widest text-[#f5f0e8] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'var(--font-allan), serif' }}>
            AXEM-<span className="text-amber-400">SX</span>
          </span>
        </Link>

        {/* Desktop Nav Links — centered */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-semibold tracking-wider text-[#f5f0e8]/90" style={{ fontFamily: 'var(--font-allan), serif' }}>
          {[
            { label: t('nav.features'), href: '/features' },
            { label: t('nav.about'), href: '/about' },
            { label: t('nav.releaseNotes'), href: '/release-notes' },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[#f5f0e8]/90 hover:text-amber-400 transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: Lang switcher + Download CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 border border-amber-400/30 hover:border-amber-400/70 text-amber-400/70 hover:text-amber-400 text-xs font-bold tracking-widest uppercase transition-colors duration-200"
            aria-label="Switch language"
          >
            {router.locale === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Download CTA */}
          <Link
            href="https://sourceforge.net/projects/axem-sx/files/releases/v1.0/axem-sx-pro.x86_64-1.0.0.iso/download"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-normal uppercase transition-colors duration-200 shadow-lg hover:shadow-amber-400/40"
          >
            {t('nav.download')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl drop-shadow"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="flex flex-col items-center gap-4 py-6 md:hidden"
          style={{
            background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)',
            borderTop: '1px solid rgba(201,166,95,0.15)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.9)',
          }}
        >
          {[
            { label: t('nav.features'), href: '/features' },
            { label: t('nav.about'), href: '/about' },
            { label: t('nav.releaseNotes'), href: '/release-notes' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#f5f0e8] font-semibold tracking-wider hover:text-amber-400 transition-colors"
              style={{ fontFamily: 'var(--font-allan), serif' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => { toggleLocale(); setMenuOpen(false); }}
            className="mt-2 px-4 py-2 border border-amber-400/30 text-amber-400/70 text-xs font-bold tracking-widest uppercase"
          >
            {router.locale === 'en' ? 'Français' : 'English'}
          </button>
        </div>
      )}
    </nav>
  );
}

