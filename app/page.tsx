import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <Hero />
      <Features />
      <Download />
      <Footer />
    </main>
  );
}
