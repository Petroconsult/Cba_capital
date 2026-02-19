import { LoanProduct, NavLink, ContactInfo } from '../types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
];

// This export is currently unused but kept for future data-driven features.
export const loanProducts: LoanProduct[] = [
  {
    id: '1',
    title: 'Short-term Loan',
    description: 'Quick funding for immediate needs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85&auto=format&fit=crop',
    imageAlt: 'Professional business meeting in modern office',
  },
  {
    id: '2',
    title: 'Business Line of Credit',
    description: 'Flexible borrowing up to your limit',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop',
    imageAlt: 'Modern glass skyscraper architecture',
  },
];

// Contact data used throughout the site.
export const CONTACT_INFO: ContactInfo = {
  email: 'info@cbacapitalgroup.com',
  contactEmail: 'info@cbacapitalgroup.com',
  phone: '08131055455, 07043682018',
  address: 'Suite 1, Opeyemi Plaza, Egbeda-Ipaja Road, Alimosho, Lagos',
  website: 'www.cbacapitalgroup.com',
};