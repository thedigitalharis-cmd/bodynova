export const contact = {
  phoneRaw: '971500000000',
  phoneDisplay: '+971 50 000 0000',
  email: 'hello@bodynova.ae',
  address: 'Villa 12, Al Wasl Road, Jumeirah, Dubai, UAE',
  hours: 'Daily, 10:00 AM - 9:00 PM',
  instagram: 'https://instagram.com/',
  tiktok: 'https://www.tiktok.com/',
};

export function whatsAppUrl(message = 'Hi Body Nova, I would like to book a treatment.') {
  return `https://wa.me/${contact.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsAppUrl(serviceName: string) {
  return whatsAppUrl(`Hi Body Nova, I would like to book ${serviceName}.`);
}
