import React from 'react';
import TestimonialBackground from './TestimonialBackground';
import TestimonialHeader from './TestimonialHeader';
import TestimonialMarquee from './TestimonialMarquee';
import TestimonialStats from './TestimonialStats';
import { TestimonialService } from '../../appData/Testimonials/testimonial.service';

const Testimonials = () => {
  const testimonials = TestimonialService.getTestimonials();
  const stats = TestimonialService.getStats();

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <TestimonialBackground />
      <TestimonialHeader />
      <div className="relative z-10 mb-12">
        <TestimonialMarquee testimonials={testimonials} />
      </div>
      <TestimonialStats stats={stats} />
    </section>
  );
};

export default Testimonials;