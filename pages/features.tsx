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
        <div className="max-w-6xl mx-auto flex flex-col gap-20">

          {/* Boh-IO */}
          <section id="boh-io" className="flex flex-col items-center gap-10 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-20 h-20 shrink-0">
                  <Image src="/axem-sx-console-ai.png" alt="Boh-IO" fill className="object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-white">Boh-IO</h2>
                  <p className="text-amber-300/70 text-sm tracking-wider uppercase">{t('bohioSubtitle')}</p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed max-w-2xl mx-auto">{t('bohioDesc')}</p>
            </div>

            {/* Two pane diagram */}
            <div className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-amber-400/15 text-xs font-mono">
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

            {/* AXEM Console Setup Guide */}
            <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-white">{t('axemConsoleTitle')}</h3>
                <p className="text-sm text-amber-300/60 leading-relaxed">{t('axemConsoleNote')}</p>
              </div>

              {/* Steps */}
              {([
                { headingKey: 'axemConsoleStep1Heading', cmdKey: 'axemConsoleStep1Cmd', note: null },
                { headingKey: 'axemConsoleStep2Heading', cmdKey: 'axemConsoleStep2Cmd', note: null },
                { headingKey: 'axemConsoleStep3Heading', cmdKey: 'axemConsoleStep3Cmd', note: 'axemConsoleStep3Note' },
                { headingKey: 'axemConsoleStep4Heading', cmdKey: 'axemConsoleStep4Cmd', note: null },
              ] as const).map((step) => (
                <div key={step.cmdKey} className="flex flex-col gap-1 p-4 bg-white/5 border border-amber-400/10 hover:border-amber-400/25 transition-colors">
                  <span className="text-xs text-white/40 uppercase tracking-widest">{t(step.headingKey)}</span>
                  <code className="text-amber-300 font-mono text-sm">{t(step.cmdKey)}</code>
                  {step.note && (
                    <span className="text-[11px] text-white/30 italic">{t(step.note)}</span>
                  )}
                </div>
              ))}

              {/* Notes */}
              <div className="flex flex-col gap-2 p-4 border border-white/10 bg-white/3">
                <span className="text-xs text-amber-400/60 uppercase tracking-widest font-semibold">{t('axemConsoleNotesTitle')}</span>
                {(['axemConsoleNote1', 'axemConsoleNote2', 'axemConsoleNote3'] as const).map((key) => (
                  <p key={key} className="text-xs text-white/50 leading-relaxed flex items-start gap-2">
                    <span className="text-amber-400/50 mt-0.5">·</span>
                    {t(key)}
                  </p>
                ))}
              </div>
            </div>

            {/* Privacy */}
            <div className="p-6 rounded-2xl border border-amber-400/20 flex flex-col gap-3"
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

            {/* Constraints */}
            <div className="p-5 rounded-xl bg-white/3 border border-white/10 max-w-2xl mx-auto">
              <p className="text-amber-400/70 text-xs font-bold uppercase tracking-widest mb-3">{t('constraintsTitle')}</p>
              <p className="text-sm text-white/50 leading-relaxed">{t('constraintsDesc')}</p>
            </div>
          </section>

          {/* Workshop Tools */}
          <section className="flex flex-col items-center gap-10 text-center">
            <h2 className="text-3xl font-black text-white">{t('toolsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {([
                { icon: '/axem-control-hub.png', titleKey: 'tool1Title', descKey: 'tool1Desc' },
                { icon: '/axem-sx-console-ai.png', titleKey: 'tool2Title', descKey: 'tool2Desc' },
                { icon: '/soft-depot.png', titleKey: 'tool3Title', descKey: 'tool3Desc' },
              ]).map((item) => (
                <div key={item.titleKey} className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-amber-400/10 hover:border-amber-400/30 transition-all">
                  <div className="relative w-14 h-14">
                    <Image src={item.icon} alt={t(item.titleKey)} fill className="object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-300">{t(item.titleKey)}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Specs */}
          <section className="flex flex-col items-center gap-8 text-center">
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
                <SpecRow label={t('specBaseSystem')} value="openSUSE Leap 16.0 (Pre-Release)" />
                <SpecRow label={t('specArch')} value="x86-64-v2 only — approximately post-2009 CPUs" />
                <SpecRow label={t('specDisplay')} value="Wayland only — Xorg removed from installer" />
                <SpecRow label={t('specLegacy')} value="XWayland (transparent compatibility)" />
                <SpecRow label={t('specDesktop')} value="KDE Plasma (Wayland session)" />
                <SpecRow label={t('specAdmin')} value="AXEM-SX Control Hub — curated YaST + Cockpit (localhost:9090)" />
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
