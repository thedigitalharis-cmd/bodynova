import { CTABanner } from '@/components/CTABanner';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Offers } from '@/components/Offers';
import { PromoBar } from '@/components/PromoBar';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Testimonials } from '@/components/Testimonials';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { WhyUs } from '@/components/WhyUs';

export default function Home() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ServicesGrid />
        <WhyUs />
        <Testimonials />
        <Offers />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
