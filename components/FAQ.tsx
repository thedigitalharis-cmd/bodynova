import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const faqs = [
  { q: 'Do I need a consultation before booking?', a: 'A short consultation is recommended for sculpting, slimming, contouring, and tightening treatments so we can match the session to your goals and comfort level.' },
  { q: 'How long does each treatment take?', a: 'Most sessions take 45 to 90 minutes depending on the treatment area and selected service. Our concierge confirms timing when you book.' },
  { q: 'Are the treatments painful?', a: 'Treatments are designed to be comfortable. You may feel warmth, pressure, or massage-like movement, and your therapist will guide you throughout.' },
  { q: 'When will I see results?', a: 'Facials often show glow immediately. Body-focused results vary by treatment and body response, with best outcomes usually supported by a recommended plan.' },
  { q: 'What aftercare should I follow?', a: 'Hydration, gentle movement, and the tailored aftercare instructions from your therapist help support comfort and results.' },
  { q: 'How is pricing confirmed?', a: 'Starting prices are shown on the menu. Final pricing depends on the service, treatment area, and package recommendations discussed before your booking.' },
];

export function FAQ() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="max-w-4xl">
        <SectionTitle pre="Frequently Asked" accent="Questions" />
        <Reveal>
          <Accordion type="single" collapsible className="rounded-3xl border border-gold/20 bg-cream px-5 sm:px-8">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
