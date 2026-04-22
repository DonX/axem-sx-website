import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} — AXEM-SX`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Axem-head-ICON_64x64.png" />
      </Head>
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 flex flex-col items-center">
          <div className="w-full flex flex-col items-center">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
