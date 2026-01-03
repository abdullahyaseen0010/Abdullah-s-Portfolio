'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { getContactItems } from '../../appData/Contact/contactItemsData';
import { contactInfoTitle } from '../../appData/Contact/contactData';

const ContactInfoCard = () => {
  const contactItems = getContactItems();

  return (
    <div className="p-8 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border">
      <h3 
        className="text-2xl font-bold mb-6"
        style={{ color: 'var(--color-neutral)' }}
      >
        {contactInfoTitle}
      </h3>
      <div className="space-y-5">
        {contactItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-4"
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-tertiary-content)' }}>
                {item.label}
              </p>
              {item.href ? (
                <a 
                  href={item.href}
                  className="text-sm font-medium hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--color-primary-content)' }}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium" style={{ color: 'var(--color-primary-content)' }}>
                  {item.value}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;