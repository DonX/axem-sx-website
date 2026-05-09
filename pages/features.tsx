import Image from 'next/image';
import PageLayout from '@/components/PageLayout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'features'])) },
});

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
  const { t } = useTranslation('features');
  return (
    <PageLayout title={t('metaTitle')} description={t('metaDesc')}>
      {/* Hero */}
      <div className="w-full py-24 px-6 text-center border-b border-amber-400/10"
        style={{ background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="w-8 h-8" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            {t('heroHeading')} <span className="text-amber-400">{t('heroAccent')}</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/60 leading-relaxed">{t('heroSub')}</p>
        </div>
      </div>

      <div className="w-full px-6 py-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">

          {/* §1 — Control Hub */}
          <section id="control-hub" className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
              <span className="text-xs font-mono text-amber-400/60 uppercase tracking-widest">{t('hubEyebrow')}</span>
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <div className="relative w-14 h-14 shrink-0">
                  <Image src="/axem-control-hub.png" alt="Control Hub" fill className="object-contain" />
                </div>
                <span className="px-2 py-0.5 rounded-full border border-amber-400/25 text-[10px] font-mono text-amber-300/70 uppercase tracking-widest">{t('hubBadge')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">{t('hubHeadline')}</h2>
              <p className="text-amber-300/70 text-base">{t('hubSub')}</p>
              <p className="text-white/60 leading-relaxed mt-2">{t('hubLead')}</p>
            </div>

            {/* Three tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
              {(['1', '2', '3'] as const).map(n => (
                <div key={n} className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-amber-400/15 text-left">
                  <span className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">{t(`hubTier${n}Label`)}</span>
                  <h3 className="text-lg font-bold text-amber-300">{t(`hubTier${n}Name`)}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{t(`hubTier${n}Desc`)}</p>
                </div>
              ))}
            </div>

            {/* Breadth strip */}
            <div className="w-full max-w-5xl flex flex-col gap-3 p-5 rounded-xl border border-amber-400/10 bg-black/30 text-left">
              <span className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">{t('hubBreadthLabel')}</span>
              <p className="text-sm text-white/70 leading-relaxed font-mono">{t('hubBreadthList')}</p>
            </div>

            {/* Screenshot */}
            <div className="w-full max-w-4xl flex flex-col items-center gap-2">
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-amber-400/15">
                <Image src="/AXEM-ScreenSHOTS/App-axem-control-hub_shot1.png" alt="AXEM-SX Control Hub" fill className="object-cover" sizes="(min-width: 1024px) 64rem, 100vw" />
              </div>
              <p className="text-xs text-white/40 italic text-center">{t('hubScreenshotCaption')}</p>
            </div>

            {/* Footnote */}
            <p className="text-xs text-white/40 italic max-w-2xl text-center leading-relaxed">{t('hubFootnote')}</p>
          </section>

          {/* §2 — Desktop Snapshot Manager */}
          <section id="desktop-snapshots" className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
              <span className="text-xs font-mono text-amber-400/60 uppercase tracking-widest">{t('snapEyebrow')}</span>
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <div className="relative w-14 h-14 shrink-0">
                  <Image src="/desktop-snapshots.svg" alt="Desktop Snapshots" fill className="object-contain" />
                </div>
                <span className="px-2 py-0.5 rounded-full border border-amber-400/25 text-[10px] font-mono text-amber-300/70 uppercase tracking-widest">{t('snapBadge')}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">{t('snapHeadline')}</h2>
              <p className="text-amber-300/70 text-base">{t('snapSub')}</p>
              <p className="text-white/60 leading-relaxed mt-2">{t('snapLead')}</p>
            </div>

            {/* Detected flavors */}
            <div className="w-full max-w-5xl flex flex-col gap-3">
              <span className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest text-center">{t('snapDetectedTitle')}</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(['1', '2', '3'] as const).map(n => (
                  <div key={n} className="flex flex-col gap-1 p-5 rounded-xl bg-white/5 border border-amber-400/15 text-left">
                    <h3 className="text-base font-bold text-amber-300">{t(`snap${n}Label`)}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{t(`snap${n}Desc`)}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-white/50 italic max-w-2xl text-center leading-relaxed font-mono">{t('snapSessionNote')}</p>
            <p className="text-xs text-amber-300/60 italic max-w-2xl text-center leading-relaxed">{t('snapHonest')}</p>
          </section>

          {/* §3 — Soft Depot */}
          <section id="soft-depot" className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono text-amber-400/60 uppercase tracking-widest">{t('depotEyebrow')}</span>
            <div className="relative w-14 h-14 shrink-0">
              <Image src="/soft-depot.png" alt="Soft Depot" fill className="object-contain" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{t('depotHeadline')}</h2>
            <p className="text-white/60 leading-relaxed">{t('depotDesc')}</p>
          </section>

          {/* §4 — Boh-IO (compressed) */}
          <section id="boh-io" className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
              <span className="text-xs font-mono text-amber-400/60 uppercase tracking-widest">{t('bohioEyebrow')}</span>
              <div className="relative w-14 h-14 shrink-0">
                <Image src="/axem-sx-console-ai.png" alt="Boh-IO" fill className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{t('bohioHeadline')}</h2>
              <p className="text-amber-300/70 text-xs tracking-wider uppercase">{t('bohioSubtitle')}</p>
              <p className="text-white/60 leading-relaxed mt-1">{t('bohioDesc')}</p>
            </div>

            {/* Two-pane diagram (preserved) */}
            <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-amber-400/15 text-xs font-mono w-full max-w-3xl">
              <div className="bg-[#0d0d0d] p-5 flex flex-col gap-3">
                <div className="text-amber-400/60 uppercase tracking-widest text-[10px]">{t('bohioTerminalPane')}</div>
                <div className="text-green-400/80">$ ls -la</div>
                <div className="text-white/40">total 48</div>
                <div className="text-white/40">drwxr-xr-x  8 axem axem 4096 ...</div>
                <div className="text-green-400/80">$ boh explain</div>
                <div className="text-white/30 italic text-[10px]">{t('bohioTriggerNote')}</div>
              </div>
              <div className="p-5 flex flex-col gap-3" style={{ background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)', borderLeft: '1px solid rgba(201,166,95,0.2)' }}>
                <div className="text-amber-400/60 uppercase tracking-widest text-[10px]">{t('bohioSidecarPane')}</div>
                <div className="text-amber-200/70 text-xs leading-relaxed">
                  <strong className="text-amber-300">ls</strong> lists directory contents.<br />
                  <strong className="text-amber-300">-l</strong> shows detailed format.<br />
                  <strong className="text-amber-300">-a</strong> includes hidden files (starting with .)
                </div>
                <div className="text-white/20 text-[10px] mt-auto italic">{t('bohioSidecarFooter')}</div>
              </div>
            </div>

            {/* Privacy panel (preserved) */}
            <div className="w-full max-w-3xl p-6 rounded-2xl border border-amber-400/20 flex flex-col gap-3"
              style={{ background: 'linear-gradient(135deg, rgba(174,142,88,0.05) 0%, transparent 100%)' }}>
              <h3 className="text-base font-bold text-amber-300 uppercase tracking-wider">{t('privacyTitle')}</h3>
              <ul className="flex flex-col gap-2">
                {(['1', '2', '3', '4'] as const).map(n => (
                  <li key={n} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="mt-1 w-3 h-3 shrink-0" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: '#c9a65f' }} />
                    {t(`privacyItem${n}`)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Constraints + docs pointer */}
            <p className="text-xs text-white/50 italic max-w-2xl text-center leading-relaxed">{t('bohioConstraints')}</p>
            <p className="text-xs text-amber-300/60 italic max-w-2xl text-center leading-relaxed">{t('bohioMoreInDocs')}</p>
          </section>

          {/* §5 — Technical Architecture */}
          <section id="architecture" className="flex flex-col items-center gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center gap-3 mb-2">
                <div className="w-8 h-8 mb-4" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
                <h2 className="text-3xl font-black text-white">{t('archTitle')}</h2>
              </div>
              <p className="text-white/40 text-sm max-w-xl mx-auto">{t('archSub')}</p>
            </div>
            <div className="rounded-2xl border border-amber-400/10 overflow-hidden w-full max-w-4xl">
              <div className="px-6 py-3 border-b border-amber-400/10" style={{ background: 'linear-gradient(180deg, #1a1612 0%, #0f0e0c 100%)' }}>
                <span className="text-xs text-amber-400/60 uppercase tracking-widest font-semibold">{t('archTableHeader')}</span>
              </div>
              <div className="px-6 divide-y divide-white/5">
                <SpecRow label={t('specBaseSystem')} value="openSUSE Leap 16.0" />
                <SpecRow label={t('specArch')} value="x86-64-v2 only — approximately post-2009 CPUs" />
                <SpecRow label={t('specDisplay')} value="Wayland only — Xorg removed from installer" />
                <SpecRow label={t('specLegacy')} value="XWayland (transparent compatibility)" />
                <SpecRow label={t('specDesktop')} value="KDE Plasma (Wayland session)" />
                <SpecRow label={t('specDesktopFlavors')} value="KDE / LXQt / GNOME — switchable via Control Hub" />
                <SpecRow label={t('specAdmin')} value="Control Hub (Qt6) · YaST · Cockpit (localhost:9090) — all local" />
                <SpecRow label={t('specAudio')} value="PipeWire — replaces PulseAudio entirely" />
                <SpecRow label={t('specNetwork')} value="NetworkManager only — wicked tool suite removed" />
                <SpecRow label={t('specSecurity')} value="SELinux enforcing, root SSH password login disabled" />
                <SpecRow label={t('specAI')} value="axem-sx/boh-io via local Ollama — offline, volatile RAM only" />
                <SpecRow label={t('specTmp')} value="RAM disk (tmpfs) — cleared on every reboot" />
                <SpecRow label={t('spec32bit')} value="Removed — strictly 64-bit workstation OS" />
                <SpecRow label={t('specLTS')} value="Leap 16.0 lifecycle — supported until July 2034" />
              </div>
            </div>
          </section>

        </div>
      </div>
    </PageLayout>
  );
}
