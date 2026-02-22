import PageLayout from '@/components/PageLayout';

function ReleaseSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-xs font-mono text-amber-400/50 w-6 text-right shrink-0">{num}</span>
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="pl-10 flex flex-col gap-3 text-sm text-white/60 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Note({ type, children }: { type: 'known' | 'tip' | 'warn'; children: React.ReactNode }) {
  const styles = {
    known: 'border-amber-400/20 bg-amber-400/5 text-amber-200/70',
    tip: 'border-green-400/20 bg-green-400/5 text-green-200/70',
    warn: 'border-red-400/20 bg-red-400/5 text-red-200/70',
  };
  const labels = { known: 'Known Issue', tip: 'Tip', warn: 'Warning' };
  return (
    <div className={`px-4 py-3 rounded-xl border ${styles[type]} flex gap-3`}>
      <span className="font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">{labels[type]}:</span>
      <span>{children}</span>
    </div>
  );
}

export default function ReleaseNotesPage() {
  return (
    <PageLayout
      title="Release Notes"
      description="AXEM-SX 0.9 Founders Preview release notes — Wayland-only, Boh-IO AI console, Cockpit administration, and sovereignty-first defaults on openSUSE Leap 16.0."
    >
      {/* Hero */}
      <div className="w-full py-20 px-6 flex flex-col items-center text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="w-8 h-8 mb-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
          Release Notes
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {[
            ['Version', '0.9 Founders Preview'],
            ['Base', 'openSUSE Leap 16.0'],
            ['Arch', 'x86_64-v2 only'],
          ].map(([label, val]) => (
            <div key={label} className="px-3 py-1 rounded-full border border-amber-400/20 text-xs text-amber-300/70">
              <span className="text-white/30">{label}: </span>{val}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-16">

        {/* Founders Preview */}
        <ReleaseSection num="1" title="Defining the Founders Preview">
          <p>
            AXEM-SX 0.9 is a near-complete look at our vision for a sovereignty-oriented workstation.
            It is built on the developing code of openSUSE Leap 16.0.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {[
              { label: 'Purpose', desc: 'Test the Boot-to-Studio workflow and Cockpit-based management.' },
              { label: 'Stability', desc: 'Enterprise-grade core with some Beta edges from upstream.' },
              { label: 'Feedback', desc: 'Specifically seeking reports on local AI and Wayland on NVIDIA hardware.' },
            ].map(item => (
              <div key={item.label} className="p-3 rounded-xl bg-white/5 border border-amber-400/10">
                <p className="text-amber-300 font-bold text-xs uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ReleaseSection>

        {/* Wayland */}
        <ReleaseSection num="2" title="Desktop Architecture — Strict Wayland">
          <p>AXEM-SX 0.9 is a pure Wayland system. We have aligned fully with the upstream decision to remove legacy display servers.</p>
          <ul className="flex flex-col gap-2 mt-1">
            <li><strong className="text-white/80">Xorg is Gone:</strong> No fallback X11 session at the login screen.</li>
            <li><strong className="text-white/80">Legacy App Support:</strong> Older applications run transparently via XWayland.</li>
            <li><strong className="text-white/80">NVIDIA Boot-to-Studio:</strong> Open kernel driver and user-space drivers install automatically on supported GPUs.</li>
          </ul>
          <Note type="tip">
            If you experience black screens during installation, boot with the <code className="text-amber-300 font-mono">nomodeset</code> kernel option.
          </Note>
        </ReleaseSection>

        {/* Boh-IO */}
        <ReleaseSection num="3" title="The Civic-Minded Console (Boh-IO)">
          <p>AXEM-SX introduces Boh-IO — Bridge Our Humanities with Input &amp; Output. A specialized console with a Bash terminal on the left and a local AI Sidecar on the right.</p>
          <ul className="flex flex-col gap-2 mt-1">
            <li><strong className="text-white/80">Local &amp; Private:</strong> phi3:mini (3.8B) via Ollama. No data leaves your machine. History exists only in RAM.</li>
            <li><strong className="text-white/80">Meta-Commands:</strong> <code className="text-amber-300 font-mono">boh explain</code> · <code className="text-amber-300 font-mono">boh safer</code> · <code className="text-amber-300 font-mono">boh teach</code> · <code className="text-amber-300 font-mono">boh dry-run</code></li>
            <li><strong className="text-white/80">Status in 0.9:</strong> Active preview — tuned for AXEM-SX and Linux command guidance.</li>
          </ul>
        </ReleaseSection>

        {/* Cockpit */}
        <ReleaseSection num="4" title="System Administration — Cockpit">
          <p>
            Unlike most distributions that have dropped YaST entirely in favor of generic web tools,
            AXEM-SX preserves and <strong className="text-white/80">curates YaST</strong> through
            the AXEM-SX Control Hub — giving you the power of a proven administration layer
            with a refined, workstation-focused interface alongside Cockpit.
          </p>
          <ul className="flex flex-col gap-2 mt-1">
            <li><strong className="text-white/80">Access:</strong> <code className="text-amber-300 font-mono">localhost:9090</code> in your browser.</li>
            <li><strong className="text-white/80">Modules:</strong> Storage · Networking · Logs — curated for workstation tasks.</li>
          </ul>
          <Note type="known">
            A &ldquo;gray line&rdquo; visual glitch may appear in the storage menu when activating certain disks. This is cosmetic and does not affect data.
          </Note>
        </ReleaseSection>

        {/* Pre-applied fixes */}
        <ReleaseSection num="5" title="Workstation Optimizations &amp; Pre-Applied Fixes">
          <p>These are currently manual steps in base Leap 16.0 — AXEM-SX applies them for you out of the box.</p>
          <ul className="flex flex-col gap-2 mt-1">
            <li>
              <strong className="text-white/80">Container Networking Fixed:</strong> Docker and KVM (libvirt) work side-by-side immediately.
              Firewall backend forced to <code className="text-amber-300 font-mono">iptables</code> to prevent the known upstream conflict.
            </li>
            <li><strong className="text-white/80">Audio:</strong> PipeWire is the default sound server — PulseAudio fully replaced.</li>
            <li><strong className="text-white/80">Networking:</strong> NetworkManager only — the legacy wicked tool suite is removed.</li>
          </ul>
        </ReleaseSection>

        {/* Security */}
        <ReleaseSection num="6" title="Security &amp; Privacy Defaults">
          <ul className="flex flex-col gap-2">
            <li><strong className="text-white/80">Root Login Disabled:</strong> Cannot log in as root via SSH using a password. SSH key required.</li>
            <li><strong className="text-white/80">SELinux Enforcing:</strong> Strict security policy enforced — AppArmor is not the default.</li>
            <li><strong className="text-white/80">No Phone Home:</strong> All remote services are disabled by default.</li>
          </ul>
        </ReleaseSection>

        {/* Hardware */}
        <ReleaseSection num="7" title="Hardware Requirements">
          <ul className="flex flex-col gap-2">
            <li><strong className="text-white/80">CPU:</strong> x86-64-v2 required (approximately post-2009).</li>
            <li><strong className="text-white/80">32-bit:</strong> Not supported — AXEM-SX is strictly 64-bit.</li>
            <li><strong className="text-white/80">/tmp:</strong> RAM disk (tmpfs) — cleared on every reboot.</li>
          </ul>
          <Note type="warn">
            Running AXEM-SX in a Virtual Machine on an older host will cause a kernel crash.
            Set the VM CPU type to <code className="text-amber-300 font-mono">host-passthrough</code> or <code className="text-amber-300 font-mono">host-model</code>.
          </Note>
        </ReleaseSection>

        {/* Known Issues */}
        <ReleaseSection num="8" title="Known Issues in Preview">
          <Note type="known">
            <strong>Installer Network Config:</strong> Complex network setups (bonding) are limited during install. Use DHCP for installation, configure via Cockpit after.
          </Note>
          <Note type="known">
            <strong>Zypper Repository:</strong> A bad repository source may be added after install.
            If <code className="text-amber-300 font-mono">zypper</code> complains, remove it with{' '}
            <code className="text-amber-300 font-mono">zypper rr 1</code>.
          </Note>
        </ReleaseSection>

      </div>
    </PageLayout>
  );
}
