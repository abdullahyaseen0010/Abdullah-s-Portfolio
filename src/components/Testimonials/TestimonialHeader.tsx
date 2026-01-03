'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ANIMATION_VARIANTS } from '../../appData/Testimonials/testimonial.constants';

const TestimonialHeader = () => {
  return (
    <motion.div
      {...ANIMATION_VARIANTS.header}
      className="mb-12 text-center relative z-10 max-w-7xl mx-auto"
    >
      <motion.div
        {...ANIMATION_VARIANTS.badge}
        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border"
      >
        <Sparkles className="w-4 h-4" style={{ color: 'var(--gradient-start)' }} />
        <span className="text-sm font-medium" style={{ color: 'var(--color-primary-content)' }}>
          Client Testimonials
        </span>
      </motion.div>

      <h2 
        className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))'
        }}
      >
        What Clients Say
      </h2>
      
      <p 
        className="max-w-2xl mx-auto text-lg" 
        style={{ color: 'var(--color-tertiary-content)' }}
      >
        Trusted by clients and colleagues for delivering high-quality web solutions
      </p>
    </motion.div>
  );
};

export default TestimonialHeader;