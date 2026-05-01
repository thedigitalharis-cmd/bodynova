import { CalendarCheck, Sparkles, WandSparkles } from 'lucide-react';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

const steps = [
  { number: '01', title: 'Choose Your Treatment', copy: 'Explore our curated body and beauty menu and pick the treatment that matches your glow goal.', icon: WandSparkles },
  { number: '02', title: 'Book Your Time', copy: 'Message us on WhatsApp and our concierge will confirm the ideal Dubai appointment slot.', icon: CalendarCheck },
  { number: '03', title: 'Glow & Relax', copy: 'Arrive, unwind, and leave with expert aftercare tailored to your results.', icon: Sparkles },
];

export function HowItWorks() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionTitle pre="How" accent="Body Nova" post="Works" />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="relative h-full overflow-hidden rounded-3xl border border-gold/20 bg-cream p-8 shadow-soft">
                  <span className="absolute -right-3 -top-8 font-serif text-8xl italic text-gold/20" aria-hidden="true">{step.number}</span>
                  <Icon className="mb-8 h-9 w-9 text-teal" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-muted">{step.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
