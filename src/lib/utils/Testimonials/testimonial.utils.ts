import { Testimonial } from '../../../appData/Testimonials/testimonial.types';

export const getInitials = (name: string): string => {
  return name.charAt(0).toUpperCase();
};

export const generateStarArray = (rating: number): number[] => {
  return Array.from({ length: rating }, (_, i) => i);
};

export const formatTestimonialText = (text: string, maxLength?: number): string => {
  if (!maxLength || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getTestimonialKey = (id: number, isDuplicate: boolean = false): string => {
  return isDuplicate ? `testimonial-duplicate-${id}` : `testimonial-${id}`;
};