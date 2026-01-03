'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import FormField from './FormField';
import { useContactForm } from '../../lib/hooks/Contact/useContactForm';
import { formLabels, formPlaceholders, successMessage } from '../../appData/Contact/contactData';

const ContactForm = () => {
  const {
    formData,
    errors,
    submitStatus,
    focusedField,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        {/* Name Field */}
        <FormField
          id="name"
          label={formLabels.name}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus('name')}
          onBlur={handleBlur}
          placeholder={formPlaceholders.name}
          error={errors.name}
          isFocused={focusedField === 'name'}
          icon="user"
        />

        {/* Email Field */}
        <FormField
          id="email"
          label={formLabels.email}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
          placeholder={formPlaceholders.email}
          error={errors.email}
          isFocused={focusedField === 'email'}
          icon="mail"
        />

        {/* Subject Field */}
        <FormField
          id="subject"
          label={formLabels.subject}
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => handleFocus('subject')}
          onBlur={handleBlur}
          placeholder={formPlaceholders.subject}
          error={errors.subject}
          isFocused={focusedField === 'subject'}
          icon="message"
        />

        {/* Message Field */}
        <FormField
          id="message"
          label={formLabels.message}
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
          placeholder={formPlaceholders.message}
          error={errors.message}
          isFocused={focusedField === 'message'}
          rows={8}
        />

        {/* Submit Button */}
        <motion.button
          type="button"
          onClick={handleSubmit}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-6 rounded-xl font-semibold text-black transition-all flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}
        >
          <Send className="w-5 h-5" />
          Send Message
        </motion.button>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-sm font-medium text-green-500">
              {successMessage.text}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;