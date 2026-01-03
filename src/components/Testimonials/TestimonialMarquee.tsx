'use client'

import React from 'react';
import TestimonialCard from './TestimonialCard';
import { TestimonialMarqueeProps } from '../../appData/Testimonials/testimonial.types';
import { useMarquee } from '../../lib/hooks/Testimonials/useMarquee';
import { TESTIMONIAL_DEFAULTS } from '../../appData/Testimonials/testimonial.constants';

const TestimonialMarquee = ({ 
  testimonials, 
  speed = TESTIMONIAL_DEFAULTS.MARQUEE_SPEED, 
  pauseOnHover = TESTIMONIAL_DEFAULTS.PAUSE_ON_HOVER 
}: TestimonialMarqueeProps) => {
  const { contentRef, handlers } = useMarquee({ speed, pauseOnHover });

  return (
    <div className="relative overflow-hidden cursor-pointer" {...handlers}>
      <div ref={contentRef} className="flex w-max gap-4 lg:gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={`duplicate-${testimonial.id}`} 
            testimonial={testimonial}
            isDuplicate 
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;