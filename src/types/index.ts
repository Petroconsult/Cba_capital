export interface NavLink {
  href: string;
  label: string;
}

export interface LoanProduct {
  id: string;
  name: string;
  description: string;
  rate: number;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
