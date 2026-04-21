import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function WoodDock() {
  const { t } = useTranslation('home');

  const dockItems = [
    { src: '/Axem-head-ICON_64x64.png', label: 'AXEM-SX' },
    { src: '/axem-control-hub.png',      label: t('features.controlHub.title') },
    { src: '/axem-sx-console-ai.png',    label: t('features.consoleAI.title') },
    { src: '/soft-depot.png',            label: t('features.softDepot.title') },
    { src: '/AI-SX-CHATGPT_64px.png',   label: 'AI-SX ChatGPT' },
  ];

  return (
    <section id="download" className="relative py-32 px-6 bg-[#0a0a0a] flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-12">

        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-8 h-8 mb-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            {t('dock.heading')} <span className="text-amber-400">{t('dock.headingAccent')}</span> {t('dock.headingEnd')}
          </h2>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            {t('dock.subheading')}
          </p>
        </div>

        {/* Wood Dock */}
        <div className="relative w-full max-w-2xl">
          <div
            className="relative flex items-end justify-center gap-4 px-8 pt-6 pb-4 rounded-2xl"
            style={{
              background: 'linear-gradient(180deg, #5c3618 0%, #432810 50%, #2e1a0c 100%)',
              border: '1px solid rgba(201,166,95,0.3)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.8), inset 0 1px 0 rgba(201,166,95,0.25), inset 0 -2px 0 rgba(0,0,0,0.4)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-white/10 to-black/20 pointer-events-none" />
            {dockItems.map((item) => (
              <div key={item.label} className="group relative flex flex-col items-center gap-2 cursor-pointer">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-xs text-amber-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {item.label}
                </span>
                <div className="relative w-12 h-12 transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-2 drop-shadow-xl">
                  <Image src={item.src} alt={item.label} fill className="object-contain rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-amber-400/70 text-sm tracking-widest uppercase font-semibold">
            {t('dock.available')}
          </p>
          <button
            type="button"
            disabled
            className="px-16 py-7 bg-amber-500/20 border-2 border-amber-400/30 text-amber-300/50 font-bold text-xl tracking-normal uppercase cursor-not-allowed"
          >
            {t('dock.comingSoon')}
          </button>
          <p className="text-white/30 text-xs tracking-wide text-center">
            {t('dock.builtOn')}
          </p>
        </div>

      </div>
    </section>
  );
}
