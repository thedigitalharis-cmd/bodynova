import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { contact } from '@/lib/contact';
import { services } from '@/lib/services';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'], variable: '--font-playfair', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: 'Body Nova Beauty Center | Body Sculpting, Hydra Facial & Skin Care in Dubai',
  description: 'Premium body sculpting, hydra facial, skin tightening, and lymphatic drainage at Body Nova Beauty Center. Book your treatment in Dubai today.',
  openGraph: {
    title: 'Body Nova Beauty Center | Body Sculpting, Hydra Facial & Skin Care in Dubai',
    description: 'Premium body sculpting, hydra facial, skin tightening, and lymphatic drainage at Body Nova Beauty Center. Book your treatment in Dubai today.',
    type: 'website',
    locale: 'en_AE',
    url: 'https://bodynova.ae',
    siteName: 'Body Nova Beauty Center',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Body Nova Beauty Center premium treatment room' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Nova Beauty Center | Dubai Beauty & Body Care',
    description: 'Premium body sculpting, hydra facial, skin tightening, and lymphatic drainage in Dubai.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://bodynova.ae'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Body Nova Beauty Center',
  image: 'https://bodynova.ae/og-image.jpg',
  telephone: contact.phoneDisplay,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Villa 12, Al Wasl Road, Jumeirah',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  openingHours: ['Mo-Su 10:00-21:00'],
  priceRange: 'AED 280 - AED 450',
  areaServed: 'Dubai',
  serviceType: services.map((service) => service.name),
  sameAs: [contact.instagram, contact.tiktok],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
