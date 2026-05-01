'use client';

import { Menu, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { contact, whatsAppUrl } from '@/lib/contact';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bookUrl = whatsAppUrl('Hi Body Nova, I would like to book my first treatment.');

  return (
    <header className={cn('sticky top-0 z-40 border-b border-transparent bg-white/90 backdrop-blur-xl transition-shadow', scrolled && 'border-gold/20 shadow-soft')}>
      <div className="mx-auto flex h-20 max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" aria-label="Body Nova Beauty Center home" className="shrink-0">
          <Image src="/logo.png" alt="Body Nova Beauty Center logo" width={220} height={88} className="h-11 w-auto md:h-14" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-ink transition-colors hover:text-gold-dark">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" asChild>
            <Link href="#offers">Gift Card</Link>
          </Button>
          <Button variant="teal" asChild>
            <a href={bookUrl} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> BOOK NOW
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open mobile menu">
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-10 flex flex-col gap-8">
              <Image src="/logo.png" alt="Body Nova Beauty Center logo" width={210} height={84} className="h-12 w-auto" />
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link href={link.href} className="rounded-2xl px-4 py-3 font-serif text-2xl text-ink hover:bg-gold/10">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="grid gap-3">
                <SheetClose asChild>
                  <Button variant="outline" asChild><Link href="#offers">Gift Card</Link></Button>
                </SheetClose>
                <Button variant="teal" asChild>
                  <a href={bookUrl} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> BOOK NOW
                  </a>
                </Button>
              </div>
              <p className="text-sm leading-6 text-muted">Dubai appointments by WhatsApp. Call {contact.phoneDisplay} for urgent bookings.</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
