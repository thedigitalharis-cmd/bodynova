import { Instagram, MessageCircle, Music2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { contact, whatsAppUrl } from '@/lib/contact';
import { footerServices } from '@/lib/services';
import { Container } from './Container';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Offers', href: '#offers' },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-teal-dark text-cream">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.png" alt="Body Nova Beauty Center logo" width={220} height={88} className="h-14 w-auto rounded bg-cream/95 p-1" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-cream/75">Premium body sculpting, skin glow, and beauty-care treatments crafted for women in Dubai.</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {quickLinks.map((link) => <li key={link.href}><Link href={link.href} className="hover:text-gold-light">{link.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/75">
              {footerServices.map((service) => <li key={service.name}><a href={service.href} target="_blank" rel="noreferrer" className="hover:text-gold-light">{service.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Contact</h3>
            <address className="mt-5 space-y-3 not-italic text-sm leading-6 text-cream/75">
              <p>{contact.address}</p>
              <p><a href={`tel:+${contact.phoneRaw}`} className="hover:text-gold-light">{contact.phoneDisplay}</a></p>
              <p><a href={`mailto:${contact.email}`} className="hover:text-gold-light">{contact.email}</a></p>
              <p>{contact.hours}</p>
            </address>
            <div className="mt-5 flex gap-3">
              <a href={contact.instagram} aria-label="Instagram" className="rounded-full border border-cream/20 p-3 hover:bg-cream/10"><Instagram className="h-5 w-5" /></a>
              <a href={contact.tiktok} aria-label="TikTok" className="rounded-full border border-cream/20 p-3 hover:bg-cream/10"><Music2 className="h-5 w-5" /></a>
              <a href={whatsAppUrl()} aria-label="WhatsApp" className="rounded-full border border-cream/20 p-3 hover:bg-cream/10"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-sm text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Body Nova Beauty Center</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gold-light">Privacy</Link>
            <Link href="#" className="hover:text-gold-light">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
