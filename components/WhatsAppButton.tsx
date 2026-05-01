import { MessageCircle } from 'lucide-react';
import { whatsAppUrl } from '@/lib/contact';

export function WhatsAppButton() {
  return (
    <a
      href={whatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-card transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-safe:animate-pulse"
      aria-label="Chat with Body Nova on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
