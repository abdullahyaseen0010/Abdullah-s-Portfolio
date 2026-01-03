import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../../appData/Testimonials/testimonial.types';
import { getInitials, generateStarArray, getTestimonialKey } from '../../lib/utils/Testimonials/testimonial.utils';
import { TESTIMONIAL_DEFAULTS } from '../../appData/Testimonials/testimonial.constants';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isDuplicate?: boolean;
}

const TestimonialCard = ({ testimonial, isDuplicate = false }: TestimonialCardProps) => {
  return (
    <div
      key={getTestimonialKey(testimonial.id, isDuplicate)}
      className="w-[350px] lg:w-[400px] shrink-0 border-border bg-secondary/50 flex flex-col rounded-xl border p-6 backdrop-blur-sm transition-all hover:bg-secondary"
    >
      <div className="mb-4 flex justify-between items-start">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
          }}
        >
          {getInitials(testimonial.name)}
        </div>
        <Quote className="w-8 h-8 opacity-20" style={{ color: 'var(--gradient-start)' }} />
      </div>

      <div className="flex gap-1 mb-4">
        {generateStarArray(testimonial.rating).map((i) => (
          <Star 
            key={i} 
            className="w-4 h-4 fill-current"
            style={{ color: TESTIMONIAL_DEFAULTS.STAR_COLOR }}
          />
        ))}
      </div>

      <p 
        className="text-sm leading-relaxed mb-4 flex-grow"
        style={{ color: 'var(--color-primary-content)' }}
      >
        &quot;{testimonial.text}&quot;
      </p>

      <div className="pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <h4 
          className="font-semibold text-sm mb-1"
          style={{ color: 'var(--color-neutral)' }}
        >
          {testimonial.name}
        </h4>
        <p 
          className="text-xs mb-2"
          style={{ color: 'var(--color-tertiary-content)' }}
        >
          {testimonial.role} at {testimonial.company}
        </p>
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
          style={{ 
            background: 'linear-gradient(135deg, var(--gradient-start)20, var(--gradient-end)20)',
            color: 'var(--color-primary-content)',
          }}
        >
          {testimonial.project}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
