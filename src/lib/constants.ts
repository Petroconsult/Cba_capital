import { LoanProduct, NavLink } from '../types';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
];

export const loanProducts: LoanProduct[] = [
  {
    id: '1',
    name: 'Short-term Loan',
    description: 'Quick funding for immediate needs',
    rate: 5.5,
  },
  {
    id: '2',
    name: 'Business Line of Credit',
    description: 'Flexible borrowing up to your limit',
    rate: 7.2,
  },
];

export const contactInfo = {
  email: 'info@cbacapital.com',
  phone: '(123) 456-7890',
};
