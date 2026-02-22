import PageLayout from '@/components/PageLayout';

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
  return (
    <PageLayout
      title="About"
      description="AXEM-SX is a sovereignty-oriented Linux workstation OS built on openSUSE Leap 16.0 — a restrained environment for sustained, serious work."
    >
      {/* Hero Band */}
      <div className="w-full py-24 px-6 flex flex-col items-center text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="w-8 h-8 mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          About <span className="text-amber-400">AXEM-SX</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/60 leading-relaxed">
          A sovereignty-oriented workstation operating system. Built for builders,
          architects, engineers, and long-cycle thinkers who require an environment
          that respects their attention and data sovereignty.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-20">

        <Section title="A Different Kind of Linux">
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
            <p>
              Most operating systems try to disappear — becoming a frictionless void
              of abstract glass and transparency. AXEM-SX takes the opposite approach.
              We believe a workstation should feel like <em className="text-amber-300/80">a place</em>.
            </p>
            <p>
              Welcome to AXEM-SX 0.9 (Founders Preview). Built on the enterprise-grade
              foundation of openSUSE Leap 16.0, AXEM-SX is a purpose-driven workstation OS
              designed for disciplined productivity, sovereignty, and long-cycle reliability.
            </p>
            <blockquote className="border-l-2 border-amber-400/50 pl-4 text-amber-200/60 italic">
              &ldquo;Built on openSUSE Leap 16.0. A restrained Linux environment for sustained, serious work.&rdquo;
            </blockquote>
          </div>
        </Section>

        <Section title="The Material Metaphor">
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
            <p>
              In an era where software interfaces are increasingly abstract, flat, and detached,
              AXEM-SX reintroduces <strong className="text-white">material metaphors</strong>.
            </p>
            <p>
              The Wood &amp; Gold interface is not merely a theme — it is a signal of equilibrium.
              The wood textures remind the user that computing is a human activity rooted in the
              physical world. This grounded aesthetic is designed to reduce digital fatigue.
            </p>
            <p>
              Just as a carpenter respects their workbench, AXEM-SX respects your screen as
              a space for <strong className="text-white">craftsmanship, not consumption</strong>.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Reduced Animations', desc: 'Windows snap instantly. Transitions are minimized to reduce cognitive load.' },
                { label: 'High Contrast', desc: 'Text and active elements prioritized for readability during long sessions.' },
                { label: 'Keyboard-Centric', desc: 'Rapid navigation without mouse dependency — optimized for efficiency.' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-white/5 border border-amber-400/10 flex flex-col gap-2">
                  <span className="text-sm font-bold text-amber-300 tracking-wider uppercase">{item.label}</span>
                  <span className="text-xs text-white/50 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="The Sovereignty Philosophy">
          <div className="flex flex-col gap-4 text-white/70 leading-relaxed">
            <p>
              AXEM-SX is built around three uncompromisable pillars:
            </p>
            <div className="flex flex-col gap-3">
              {[
                { pillar: 'Sovereignty', desc: 'Your data never leaves your machine. The AI runs locally. No remote services are pre-enabled. No "phone home."' },
                { pillar: 'Discipline', desc: 'The interface is designed to support focus — not fragmentation. Every default is intentional.' },
                { pillar: 'Long-Cycle Reliability', desc: 'Built on Leap 16.0, supported until July 2034. Plan your long-term projects without forced obsolescence.' },
              ].map((item) => (
                <div key={item.pillar} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-amber-400/10">
                  <div className="w-1 shrink-0 rounded-full bg-amber-400/60" />
                  <div>
                    <span className="text-sm font-bold text-amber-300 tracking-wider">{item.pillar}</span>
                    <p className="text-sm text-white/50 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section title="Who It&apos;s For">
          <div className="text-white/70 leading-relaxed flex flex-col gap-4">
            <p>AXEM-SX is not for everyone — and that is by design.</p>
            <ul className="flex flex-col gap-2">
              {[
                'Builders and makers who treat their workstation as a primary tool',
                'Architects and engineers who need long-cycle stability',
                'Creators who value independence over convenience',
                'Those who reject data exfiltration as a price for productivity',
                'Linux users ready to move beyond the general-purpose distribution',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 w-3 h-3 shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: '#c9a65f' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section title="Localization Roadmap">
          <div className="text-white/70 leading-relaxed flex flex-col gap-4">
            <p>
              AXEM-SX is committed to digital inclusion. The &ldquo;Digital Workshop&rdquo; must
              be accessible in the languages of those who need it most.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { lang: 'English', status: 'Primary', note: 'Live' },
                { lang: 'Français', status: 'Planned', note: "L'atelier numérique" },
                { lang: 'Español', status: 'Planned', note: 'El taller digital' },
                { lang: 'Kreyòl Ayisyen', status: 'Planned', note: 'Digital inclusion' },
              ].map((item) => (
                <div key={item.lang} className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-amber-400/10">
                  <span className="text-sm font-bold text-amber-300">{item.lang}</span>
                  <span className="text-xs text-white/40">{item.note}</span>
                  <span className={`text-xs font-semibold mt-1 ${item.status === 'Live' ? 'text-green-400' : 'text-white/30'}`}>{item.status}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 italic">
              Note: Haitian Creole localization is a deliberate statement of digital inclusion —
              breaking away from the standard FIGS localization found in most Linux distributions.
            </p>
          </div>
        </Section>

      </div>
    </PageLayout>
  );
}
