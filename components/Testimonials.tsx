import { Star } from 'lucide-react';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { Card, CardContent } from './ui/card';

const testimonials = [
  { name: 'Mariam A.', treatment: 'Hydra Facial', quote: 'My skin looked fresh immediately. The whole experience felt calm, elegant, and very professional.' },
  { name: 'Noura K.', treatment: 'Body Sculpting', quote: 'The therapist explained everything beautifully and I felt cared for from booking to aftercare.' },
  { name: 'Sara M.', treatment: 'Skin Tightening', quote: 'Body Nova feels premium without being intimidating. I loved the attention to detail.' },
  { name: 'Layla H.', treatment: 'Lymphatic Drainage', quote: 'So relaxing and effective. I left feeling lighter, refreshed, and already booked my next visit.' },
  { name: 'Aisha R.', treatment: 'Body Contouring', quote: 'The consultation was honest and tailored. Exactly the kind of beauty center Dubai needed.' },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionTitle pre="Client" accent="Love" post="Notes" eyebrow="5-star experiences" />
        <Reveal>
          <div className="flex snap-x gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((item) => (
              <Card key={`${item.name}-${item.treatment}`} className="min-w-[300px] snap-start bg-white sm:min-w-[380px]">
                <CardContent>
                  <div className="mb-5 flex text-gold-dark" aria-label="Five stars">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />)}
                  </div>
                  <blockquote className="font-serif text-2xl italic leading-snug text-ink">“{item.quote}”</blockquote>
                  <p className="mt-6 font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-muted">{item.treatment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
