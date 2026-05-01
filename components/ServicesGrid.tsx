import { services } from '@/lib/services';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { ServiceCard } from './ServiceCard';

export function ServicesGrid() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionTitle pre="Our" accent="Signature" post="Services" eyebrow="Premium treatment menu" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.name} delay={(index % 3) * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
