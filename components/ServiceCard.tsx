import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import type { Service } from '@/lib/services';
import { serviceWhatsAppUrl } from '@/lib/contact';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden rounded-b-none rounded-t-3xl">
        <Image
          src={service.image}
          alt={service.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        {service.mostBooked ? (
          <span className="absolute left-4 top-4 rounded-pill bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink shadow-soft">
            Most Booked
          </span>
        ) : null}
      </div>
      <CardContent className="flex min-h-[260px] flex-col p-6">
        <h3 className="font-serif text-3xl leading-tight text-ink">{service.name}</h3>
        <p className="mt-3 text-muted">{service.description}</p>
        <p className="mt-4 font-semibold text-gold-dark">Starts at {service.price}</p>
        <Button className="mt-auto w-full" asChild>
          <a href={serviceWhatsAppUrl(service.name)} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Book Now
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
