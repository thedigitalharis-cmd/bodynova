import { Cake, Gift } from 'lucide-react';
import { whatsAppUrl } from '@/lib/contact';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const offers = [
  {
    icon: Gift,
    title: 'Referral Program',
    copy: 'Refer a friend, you both get 15% off.',
    cta: 'Share the Glow',
    url: whatsAppUrl('Hi Body Nova, I would like to ask about the referral program.'),
  },
  {
    icon: Cake,
    title: 'Birthday Gift',
    copy: '10% off on your birthday month.',
    cta: 'Claim Birthday Gift',
    url: whatsAppUrl('Hi Body Nova, I would like to claim my birthday month offer.'),
  },
];

export function Offers() {
  return (
    <section id="offers" className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionTitle pre="Special" accent="Offers" eyebrow="Beautiful reasons to book" />
        <div className="grid gap-6 lg:grid-cols-2">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Reveal key={offer.title} delay={index * 0.08}>
                <Card className="h-full bg-white">
                  <CardContent className="p-8 sm:p-10">
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gold/15 text-gold-dark">
                      <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-4xl text-teal-dark">{offer.title}</h3>
                    <p className="mt-3 text-lg text-muted">{offer.copy}</p>
                    <Button className="mt-8" asChild>
                      <a href={offer.url} target="_blank" rel="noreferrer">{offer.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
