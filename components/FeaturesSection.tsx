import Image from 'next/image';
import { useTranslation } from 'next-i18next';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-white/5 border border-amber-400/10 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-400/5 blur-xl" />
      <div className="relative w-20 h-20 drop-shadow-xl group-hover:scale-110 transition-transform duration-300">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h3 className="text-lg font-bold tracking-wider text-amber-300 uppercase">{title}</h3>
      <p className="text-sm text-white/60 leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  const { t } = useTranslation('home');

  const features = [
    { icon: '/axem-control-hub.png',   titleKey: 'features.controlHub.title', descKey: 'features.controlHub.description' },
    { icon: '/axem-sx-console-ai.png', titleKey: 'features.consoleAI.title',   descKey: 'features.consoleAI.description' },
    { icon: '/soft-depot.png',         titleKey: 'features.softDepot.title',   descKey: 'features.softDepot.description' },
  ];

  return (
    <section id="features" className="relative py-28 px-6 bg-[#0c0c0c] flex flex-col items-center">
      {/* Hex pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z' fill='none' stroke='%23c9a65f' stroke-width='1'/%3E%3Cpath d='M28 36 L56 52 L56 84 L28 100 L0 84 L0 52 Z' fill='none' stroke='%23c9a65f' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-8 h-8 mb-2" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, #c9a65f, #ae8e58)' }} />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            {t('features.heading')} <span className="text-amber-400">{t('features.headingAccent')}</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
            {t('features.subheading')}
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full place-items-center md:place-items-stretch">
          {features.map((f) => (
            <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descKey)} />
          ))}
        </div>
      </div>
    </section>
  );
}
