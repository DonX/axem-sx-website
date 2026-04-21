import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import WoodDock from '@/components/WoodDock';
import Footer from '@/components/Footer';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale ?? 'en', ['common', 'home'])) },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>AXEM-SX — The Digital Workshop</title>
        <meta name="description" content="AXEM-SX is a refined Linux distribution built for creators, makers, and thinkers. Intelligent. Powerful. Distinctly crafted. Coming May 1st." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Axem-head-ICON_64x64.png" />

        {/* Open Graph */}
        <meta property="og:title" content="AXEM-SX — The Digital Workshop" />
        <meta property="og:description" content="A refined Linux experience built for creators, makers, and thinkers." />
        <meta property="og:image" content="/AXEM-SX-full.png" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="w-full bg-[#0a0a0a] text-white">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <WoodDock />
        <Footer />
      </main>
    </>
  );
}
