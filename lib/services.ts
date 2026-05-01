import { serviceWhatsAppUrl } from './contact';

export type Service = {
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  mostBooked?: boolean;
};

export const services: Service[] = [
  {
    name: 'Body Sculpting & Fat Removal',
    description: 'Non-invasive contouring to sculpt and define.',
    price: 'AED 450',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85',
    alt: 'Woman receiving a premium body contouring treatment in a spa room',
    mostBooked: true,
  },
  {
    name: 'Hydra Facial',
    description: 'Deep-cleansing hydration for radiant skin.',
    price: 'AED 320',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85',
    alt: 'Close-up of a relaxing hydrating facial treatment',
    mostBooked: true,
  },
  {
    name: 'Body Contouring',
    description: 'Reshape and refine your silhouette.',
    price: 'AED 390',
    image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=85',
    alt: 'Beauty massage and body care treatment in a luxury studio',
  },
  {
    name: 'Body Slimming',
    description: 'Targeted slimming treatments.',
    price: 'AED 350',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    alt: 'Spa therapist performing a calming body treatment',
  },
  {
    name: 'Skin Tightening',
    description: 'Firm, lift, and rejuvenate.',
    price: 'AED 420',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=85',
    alt: 'Skin care closeup during a rejuvenating facial session',
  },
  {
    name: 'Lymphatic Drainage',
    description: 'Detoxify and reduce puffiness.',
    price: 'AED 280',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    alt: 'Hands performing gentle lymphatic drainage massage',
  },
];

export const footerServices = services.map((service) => ({
  name: service.name,
  href: serviceWhatsAppUrl(service.name),
}));
