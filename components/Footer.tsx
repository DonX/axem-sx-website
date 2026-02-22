import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{
        background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)',
        borderTop: '1px solid rgba(201,166,95,0.25)',
        boxShadow: '0 -4px 32px rgba(0,0,0,0.9)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main footer body */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

        {/* Column 1 — Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 shrink-0">
              <Image src="/Axem-head-ICON_64x64.png" alt="AXEM-SX" fill className="object-contain" />
            </div>
            <span className="font-bold tracking-widest text-white text-base drop-shadow">
              AXEM-<span className="text-amber-400">SX</span>
            </span>
          </div>
          <p className="text-xs text-white/40 leading-relaxed max-w-[200px]">
            The Digital Workshop — a sovereignty-oriented Linux workstation built for sustained, serious work.
          </p>
          <div className="w-8 h-px bg-amber-400/30 mt-1" />
          <p className="text-[10px] text-amber-400/40 tracking-widest uppercase font-mono">
            Built on openSUSE Leap 16.0
          </p>
        </div>

        {/* Column 2 — Navigation */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[10px] tracking-widest uppercase text-amber-400/50 font-semibold">Navigate</span>
          <ul className="flex flex-col gap-3 text-sm text-white/55 tracking-wide">
            {[
              { label: 'Features', href: '/features' },
              { label: 'About', href: '/about' },
              { label: 'Release Notes', href: '/release-notes' },
              { label: 'Download', href: '#download' },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-amber-400 transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Community & Legal */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[10px] tracking-widest uppercase text-amber-400/50 font-semibold">Project</span>
          <ul className="flex flex-col gap-3 text-sm text-white/55 tracking-wide">
            {[
              { label: 'Community', href: '#community' },
              { label: 'Documentation', href: '#docs' },
              { label: 'Privacy Policy', href: '#privacy' },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-amber-400 transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-1">
            <span className="text-[10px] text-white/25 tracking-wide">Inspired by Mageia Linux</span>
            <span className="text-[10px] text-white/25 tracking-wide">Crafted with intention · 2026</span>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="relative z-10 w-full border-t px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
        style={{ borderColor: 'rgba(201,166,95,0.12)' }}
      >
        <p className="text-xs text-white/30 tracking-wider text-center sm:text-left">
          © 2026 AXEM-SX · The Digital Workshop · All rights reserved.
        </p>
        <p className="text-[10px] text-white/20 tracking-wider font-mono">
          axem-sx.org
        </p>
      </div>
    </footer>
  );
}
