export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/\s/g, '');
};

export const createMailtoLink = (email: string, subject?: string): string => {
  const baseLink = `mailto:${email}`;
  return subject ? `${baseLink}?subject=${encodeURIComponent(subject)}` : baseLink;
};

export const createTelLink = (phone: string): string => {
  return `tel:${formatPhoneNumber(phone)}`;
};

export const formatLocation = (city: string, state: string, country: string): string => {
  return `${city}, ${state}, ${country}`;
};
