import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)',
        borderBottom: '1px solid rgba(201,166,95,0.2)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.9)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
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

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wider text-[#f5f0e8]/90" style={{ fontFamily: 'var(--font-allan), serif' }}>
        {[
          { label: 'Features', href: '/features' },
          { label: 'About', href: '/about' },
          { label: 'Release Notes', href: '/release-notes' },
          { label: 'Download', href: '#download' },
        ].map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-[#f5f0e8]/90 hover:text-amber-400 transition-colors duration-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="#download"
        className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-amber-400/40"
      >
        Download
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white text-2xl drop-shadow"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col items-center gap-4 py-6 md:hidden"
          style={{
            background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)',
            borderTop: '1px solid rgba(201,166,95,0.15)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.9)',
          }}
        >
          {['Features', 'Download', 'About', 'Docs', 'Community'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#f5f0e8] font-semibold tracking-wider hover:text-amber-400 transition-colors"
              style={{ fontFamily: 'var(--font-allan), serif' }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
