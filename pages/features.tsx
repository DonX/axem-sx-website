import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-white/5 gap-4">
      <span className="text-sm text-white/40 tracking-wide shrink-0">{label}</span>
      <span className="text-sm text-white/80 text-right">{value}</span>
    </div>
  );
}

function BohCommand({ cmd, desc }: { cmd: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-amber-400/10 hover:border-amber-400/25 transition-colors">
      <code className="px-3 py-1 rounded-lg bg-[#0a0a0a] border border-amber-400/30 text-amber-300 text-sm font-mono whitespace-nowrap shrink-0">{cmd}</code>
      <span className="text-sm text-white/60 leading-relaxed">{desc}</span>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <PageLayout
      title="Features"
      description="Explore Boh-IO, the AXEM-SX Sidecar console, Control Hub, Soft Depot, and the full technical architecture of the Digital Workshop."
    >
      {/* Hero */}
      <div className="w-full py-24 px-6 flex flex-col items-center text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="w-8 h-8 mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          Built Different. <span className="text-amber-400">By Design.</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/60 leading-relaxed">
          Every tool in AXEM-SX is crafted with intention — from the first boot
          to your deepest workflow.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col gap-32">

        {/* Boh-IO */}
        <section id="boh-io" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 shrink-0">
                <Image src="/axem-sx-console-ai.png" alt="Boh-IO" fill className="object-contain" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Boh-IO</h2>
                <p className="text-amber-300/70 text-sm tracking-wider uppercase">Bridge Our Humanities with Input &amp; Output</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-2xl">
              Most terminals are lonely places. Boh-IO changes that — without taking control away from you.
              It is a &ldquo;Sidecar&rdquo; console that pairs a standard Bash shell with a local, civic-minded AI apprentice.
            </p>
          </div>

          {/* Two pane diagram */}
          <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-amber-400/15 text-xs font-mono">
            <div className="bg-[#0d0d0d] p-5 flex flex-col gap-3">
              <div className="text-amber-400/60 uppercase tracking-widest text-[10px]">Terminal — Left Pane</div>
              <div className="text-green-400/80">$ ls -la</div>
              <div className="text-white/40">total 48</div>
              <div className="text-white/40">drwxr-xr-x  8 axem axem 4096 ...</div>
              <div className="text-green-400/80">$ boh explain</div>
              <div className="text-white/30 italic text-[10px]">↑ triggers Sidecar, not executed in shell</div>
            </div>
            <div className="p-5 flex flex-col gap-3" style={{ background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)', borderLeft: '1px solid rgba(201,166,95,0.2)' }}>
              <div className="text-amber-400/60 uppercase tracking-widest text-[10px]">Sidecar — AI Pane</div>
              <div className="text-amber-200/70 text-xs leading-relaxed">
                <strong className="text-amber-300">ls</strong> lists directory contents.<br />
                <strong className="text-amber-300">-l</strong> shows detailed format.<br />
                <strong className="text-amber-300">-a</strong> includes hidden files (starting with .)
              </div>
              <div className="text-white/20 text-[10px] mt-auto italic">phi3:mini · local · offline · volatile RAM</div>
            </div>
          </div>

          {/* Commands */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold text-white mb-1">Meta-Commands</h3>
            <BohCommand cmd="boh explain" desc="Breaks down the command you just ran into plain English — no guessing what it did." />
            <BohCommand cmd="boh safer" desc="Suggests a less risky version of your last command before you regret it." />
            <BohCommand cmd="boh teach" desc="Delivers a mini-lesson on the tool you are using, with real-world examples." />
            <BohCommand cmd="boh undo" desc="Writes the corrective command to the Sidecar for you to review — it never executes automatically." />
            <BohCommand cmd="boh dry-run on" desc="Turns your prompt orange. Destructive commands (like rm) are rewritten to safe equivalents (like ls) so you can test syntax without fear." />
          </div>

          {/* Privacy */}
          <div className="p-6 rounded-2xl border border-amber-400/20 flex flex-col gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(174,142,88,0.05) 0%, transparent 100%)' }}>
            <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">Privacy Guarantee</h3>
            <ul className="flex flex-col gap-2">
              {[
                'Powered by phi3:mini (3.8B parameters) via local Ollama — no cloud.',
                'Command history exists only in RAM for the duration of the open window.',
                'When you close Boh-IO, the entire conversation is wiped. No disk logs.',
                'The AI NEVER types into your shell — pane separation is absolute.',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-1 w-3 h-3 shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: '#c9a65f' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Constraints */}
          <div className="p-5 rounded-xl bg-white/3 border border-white/10">
            <p className="text-amber-400/70 text-xs font-bold uppercase tracking-widest mb-3">⚠ Technical Constraints</p>
            <p className="text-sm text-white/50 leading-relaxed">
              Boh-IO does not support full-screen TUI applications such as <code className="text-amber-300/60">vim</code>, <code className="text-amber-300/60">htop</code>, or <code className="text-amber-300/60">tmux</code>.
              These apps require cursor movements that Boh-IO intentionally blocks to keep the history linear and analyzable.
              Use the standard <strong className="text-white/70">Konsole</strong> terminal for text editing and system monitoring.
            </p>
          </div>
        </section>

        {/* App icons row */}
        <section className="flex flex-col gap-10">
          <h2 className="text-3xl font-black text-white">The Workshop Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '/axem-control-hub.png',
                title: 'Control Hub',
                desc: 'The AXEM-SX Control Hub curates and consolidates YaST alongside Cockpit — unlike other distributions that dropped YaST entirely. Workstation governance focused on storage, networking, logs, and users. Access at localhost:9090.',
              },
              {
                icon: '/axem-sx-console-ai.png',
                title: 'Console AI',
                desc: 'Boh-IO — the civic-minded AI Sidecar. Offline, private, pedagogical. Tuned to answer questions about AXEM-SX and Linux — not to generate creative fiction.',
              },
              {
                icon: '/soft-depot.png',
                title: 'Soft Depot',
                desc: 'A curated software hub built for AXEM-SX. Discover, install, and manage applications with precision — no unnecessary dependencies, no noise.',
              },
            ].map((item) => (
              <div key={item.title} className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-amber-400/10 hover:border-amber-400/30 transition-all">
                <div className="relative w-14 h-14">
                  <Image src={item.icon} alt={item.title} fill className="object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-amber-300">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs */}
        <section className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-5 h-5" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
              <h2 className="text-3xl font-black text-white">Technical Architecture</h2>
            </div>
            <p className="text-white/40 text-sm pl-8">What AXEM-SX inherits, what it changes, and why.</p>
          </div>
          <div className="rounded-2xl border border-amber-400/10 overflow-hidden">
            <div className="px-6 py-3 border-b border-amber-400/10" style={{ background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)' }}>
              <span className="text-xs text-amber-400/60 uppercase tracking-widest font-semibold">System Specification</span>
            </div>
            <div className="px-6 divide-y divide-white/5">
              <SpecRow label="Base System" value="openSUSE Leap 16.0 (Pre-Release)" />
              <SpecRow label="Architecture" value="x86-64-v2 only — approximately post-2009 CPUs" />
              <SpecRow label="Display Server" value="Wayland only — Xorg removed from installer" />
              <SpecRow label="Legacy App Support" value="XWayland (transparent compatibility)" />
              <SpecRow label="Desktop" value="KDE Plasma (Wayland session)" />
              <SpecRow label="Administration" value="AXEM-SX Control Hub — curated YaST + Cockpit (localhost:9090). YaST preserved, not removed." />
              <SpecRow label="Audio" value="PipeWire — replaces PulseAudio entirely" />
              <SpecRow label="Networking" value="NetworkManager only — wicked tool suite removed" />
              <SpecRow label="Security" value="SELinux enforcing, root SSH password login disabled" />
              <SpecRow label="AI" value="phi3:mini via local Ollama — offline, volatile RAM only" />
              <SpecRow label="/tmp" value="RAM disk (tmpfs) — cleared on every reboot" />
              <SpecRow label="32-bit Support" value="Removed — strictly 64-bit workstation OS" />
              <SpecRow label="Long-Term Support" value="Leap 16.0 lifecycle — supported until July 2034" />
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
