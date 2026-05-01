import { BadgeCheck, HeartHandshake, RadioTower } from 'lucide-react';
import Image from 'next/image';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

const rows = [
  {
    title: 'Certified Experts',
    copy: 'Our beauty specialists pair warm service with refined technique, so every treatment feels personal, calm, and expert-led.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=85',
    alt: 'Certified beauty expert preparing a treatment room',
    icon: BadgeCheck,
  },
  {
    title: 'Medical-Grade Technology',
    copy: 'From sculpting to skin tightening, our premium equipment supports precise, comfortable care for visible confidence.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85',
    alt: 'Modern beauty technology equipment in a premium clinic',
    icon: RadioTower,
    reverse: true,
  },
  {
    title: 'Personalized Care Plans',
    copy: 'Your therapist listens first, then designs a treatment journey around your body goals, lifestyle, and aftercare needs.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=85',
    alt: 'Personalized consultation for beauty and body-care treatment',
    icon: HeartHandshake,
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="overflow-hidden bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle pre="Why Choose" accent="Body Nova" eyebrow="Care that feels tailored" />
        <div className="space-y-12 lg:space-y-16">
          {rows.map((row, index) => {
            const Icon = row.icon;
            return (
              <Reveal key={row.title}>
                <article className={`grid items-center gap-8 lg:grid-cols-2 ${row.reverse ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-[2.5rem] ${index % 2 === 0 ? 'bg-gold/20' : 'bg-teal/15'} blur-2xl`} aria-hidden="true" />
                    <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-card">
                      <Image src={row.image} alt={row.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                    </div>
                  </div>
                  <div className="max-w-xl">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                      <Icon className="h-7 w-7" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-4xl text-ink sm:text-5xl">{row.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-muted">{row.copy}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
