import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
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
      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-16 gap-8">

        {/* Headline */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            AXEM-<span className="text-amber-400">SX</span>
          </h1>
          <p className="text-lg md:text-2xl font-light tracking-[0.25em] text-amber-200/80 uppercase">
            The Digital Workshop
          </p>
          <div className="w-24 h-px bg-amber-400/60 my-2" />
          <p className="max-w-xl text-base md:text-lg text-white/70 leading-relaxed">
            A refined Linux experience built for creators, makers, and thinkers.
            Intelligent. Powerful. Distinctly crafted.
          </p>
          <p className="mt-2 text-sm tracking-widest text-amber-300/60 uppercase font-semibold">
            Built on openSUSE Leap 16.0 &mdash; A restrained Linux environment for sustained, serious work.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="#download"
            className="px-8 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-widest uppercase transition-all duration-200 shadow-lg hover:shadow-amber-400/50 hover:scale-105"
          >
            Download Now
          </Link>
          <Link
            href="#features"
            className="px-8 py-3 rounded-full border border-amber-400/60 text-amber-200 hover:bg-amber-400/10 font-semibold text-sm tracking-widest uppercase transition-all duration-200 hover:scale-105"
          >
            Explore Features
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs tracking-widest text-amber-200 uppercase">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="#f6d860" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
