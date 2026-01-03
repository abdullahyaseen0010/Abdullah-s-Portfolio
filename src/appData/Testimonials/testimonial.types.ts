export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  project: string;
}

export interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  speed?: number;
  pauseOnHover?: boolean;
}

export interface TestimonialStats {
  label: string;
  value: string;
}