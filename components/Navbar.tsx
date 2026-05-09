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
      {/* Inner container — full viewport width; 1fr / auto / 1fr keeps the nav
          links geometrically centered while pushing the logo and CTA cluster
          all the way to the viewport edges (with comfortable gutter padding). */}
      <div className="w-full px-8 grid grid-cols-[1fr_auto_1fr] items-center gap-6">

        {/* Col 1 — Logo */}
        <Link href="/" className="flex items-center gap-3 group justify-self-start">
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

        {/* Col 2 — Nav links, perfectly centred; whitespace-nowrap prevents wrapping */}
        <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold tracking-wider text-[#f5f0e8]/90 whitespace-nowrap" style={{ fontFamily: 'var(--font-allan), serif' }}>
          {[
            { label: t('nav.features'), href: '/features' },
            { label: t('nav.about'), href: '/about' },
            { label: t('nav.releaseNotes'), href: '/release-notes' },
          ].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-amber-400 transition-colors duration-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Col 3 — Lang switcher + Download */}
        <div className="flex items-center gap-4 justify-end justify-self-end">
          {/* Lang switcher — desktop only */}
          <button
            onClick={toggleLocale}
            className="hidden md:inline-flex items-center px-4 py-2.5 border border-amber-400/30 hover:border-amber-400/70 text-amber-400/70 hover:text-amber-400 text-xs font-bold tracking-widest uppercase transition-colors duration-200"
            aria-label="Switch language"
          >
            {router.locale === 'en' ? 'FR' : 'EN'}
          </button>

          {/* Download CTA — desktop only */}
          <Link
            href="https://sourceforge.net/projects/axem-sx/files/releases/v1.0.1/axem-sx-pro.x86_64-1.0.1.iso/download"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-10 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-widest uppercase transition-colors duration-200 shadow-lg hover:shadow-amber-400/40"
          >
            {t('nav.download')}
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white text-2xl drop-shadow"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

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
            type="button"
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

