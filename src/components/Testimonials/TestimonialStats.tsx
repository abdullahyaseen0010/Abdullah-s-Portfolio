'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialStats as StatsType } from '../../appData/Testimonials/testimonial.types';
import { ANIMATION_VARIANTS } from '../../appData/Testimonials/testimonial.constants';

interface TestimonialStatsProps {
  stats: StatsType[];
}

const TestimonialStats = ({ stats }: TestimonialStatsProps) => {
  return (
    <motion.div
      {...ANIMATION_VARIANTS.stats}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative z-10"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          {...ANIMATION_VARIANTS.statCard}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border text-center"
        >
          <h3 
            className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
            }}
          >
            {stat.value}
          </h3>
          <p 
            className="text-sm font-medium"
            style={{ color: 'var(--color-tertiary-content)' }}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TestimonialStats;