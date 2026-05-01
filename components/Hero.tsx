import { MessageCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { whatsAppUrl } from '@/lib/contact';
import { Button } from './ui/button';
import { Container } from './Container';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      <div className="grid min-h-[760px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[760px]">
          <Image
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=88"
            alt="Close-up of a woman receiving a warm facial treatment"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        </div>
        <div className="relative min-h-[420px] lg:min-h-[760px]">
          <Image
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=88"
            alt="Hands receiving a premium manicure and body-care treatment"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        </div>
      </div>

      <Container className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <Reveal className="pointer-events-auto mx-auto max-w-4xl rounded-3xl bg-white/90 p-6 text-center shadow-card backdrop-blur-xl sm:p-10 lg:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-teal-dark">Body Nova Beauty Center</p>
          <h1 className="font-serif text-4xl leading-tight text-ink text-balance sm:text-6xl lg:text-7xl">
            Luxury Body & Beauty Treatments — Crafted for You
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted sm:text-lg">
            Body Sculpting · Hydra Facial · Skin Tightening · and more
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={whatsAppUrl('Hi Body Nova, I would like to book my session.')} target="_blank" rel="noreferrer">Book Your Session</a>
            </Button>
            <Button size="lg" variant="teal" asChild>
              <a href={whatsAppUrl()} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium text-ink">
            <span className="inline-flex items-center gap-1 text-gold-dark" aria-label="Five star rated">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />)}
              <span className="ml-1 text-ink">5-Star Rated</span>
            </span>
            <span className="h-1 w-1 rounded-full bg-gold-dark" aria-hidden="true" />
            <span>Certified Therapists</span>
            <span className="h-1 w-1 rounded-full bg-gold-dark" aria-hidden="true" />
            <span>Premium Equipment</span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
