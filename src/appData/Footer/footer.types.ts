export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  color: string;
}

export interface ContactInfo {
  name: string;
  description: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
}