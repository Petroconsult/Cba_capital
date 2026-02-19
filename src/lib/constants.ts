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
    image: '/images/office-meeting-room.jpg',
    imageAlt: 'Office meeting room',
  },
  {
    id: '2',
    title: 'Business Line of Credit',
    description: 'Flexible borrowing up to your limit',
    image: '/images/bridge-architecture.jpg',
    imageAlt: 'Bridge architecture',
  },
];

// Contact data used throughout the site. Some components expect additional
// fields (contactEmail, address) so they are included for consistency.
export const CONTACT_INFO: ContactInfo = {
  email: 'info@cbacapital.com',
  contactEmail: 'info@cbacapital.com',
  phone: '(123) 456-7890',
  address: '123 Example Street, London, UK',
};
