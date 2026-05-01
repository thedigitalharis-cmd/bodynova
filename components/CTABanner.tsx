import { MessageCircle, Phone } from 'lucide-react';
import { contact, whatsAppUrl } from '@/lib/contact';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { Button } from './ui/button';

export function CTABanner() {
  return (
    <section className="bg-teal py-16 text-cream sm:py-20">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold-light">Book in Dubai</p>
            <h2 className="font-serif text-5xl leading-tight text-balance sm:text-6xl">Ready to Glow?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={whatsAppUrl('Hi Body Nova, I am ready to glow and would like to book.')} target="_blank" rel="noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp Us
              </a>
            </Button>
            <Button variant="outline" className="border-cream/70 text-cream hover:bg-cream/10" asChild>
              <a href={`tel:+${contact.phoneRaw}`}><Phone className="h-5 w-5" aria-hidden="true" /> {contact.phoneDisplay}</a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
