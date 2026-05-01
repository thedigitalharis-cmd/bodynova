import { MessageCircle } from 'lucide-react';
import { whatsAppUrl } from '@/lib/contact';

export function PromoBar() {
  return (
    <a
      href={whatsAppUrl('Hi Body Nova, I would like to claim the 20% first treatment offer.')}
      className="block bg-gold px-4 py-2 text-center text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
      aria-label="Claim 20 percent off your first treatment on WhatsApp"
    >
      <span className="inline-flex items-center justify-center gap-2">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        20% OFF Your First Treatment — Book on WhatsApp →
      </span>
    </a>
  );
}
