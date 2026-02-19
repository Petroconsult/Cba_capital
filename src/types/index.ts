export interface NavLink {
  label: string;
  href: string;
}

export interface LoanProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// used by various components that display contact information
export interface ContactInfo {
  email: string;
  contactEmail: string;
  phone: string;
  address: string;
  website?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  loanType?: string;
  amount?: string;
  message: string;
}