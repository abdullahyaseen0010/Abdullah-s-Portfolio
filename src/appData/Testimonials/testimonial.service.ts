import { testimonialsData, testimonialStats } from './testimonials.data';
import { Testimonial, TestimonialStats } from './testimonial.types';

export class TestimonialService {
  static getTestimonials(): Testimonial[] {
    return testimonialsData;
  }

  static getTestimonialById(id: number): Testimonial | undefined {
    return testimonialsData.find(testimonial => testimonial.id === id);
  }

  static getTestimonialsByRating(rating: number): Testimonial[] {
    return testimonialsData.filter(testimonial => testimonial.rating === rating);
  }

  static getTestimonialsByCompany(company: string): Testimonial[] {
    return testimonialsData.filter(
      testimonial => testimonial.company.toLowerCase().includes(company.toLowerCase())
    );
  }

  static getStats(): TestimonialStats[] {
    return testimonialStats;
  }

  static getTotalTestimonials(): number {
    return testimonialsData.length;
  }

  static getAverageRating(): number {
    const total = testimonialsData.reduce((sum, t) => sum + t.rating, 0);
    return total / testimonialsData.length;
  }
}