// app/utils/contactUtils.ts

import { FormData, FormErrors } from '../../../appData/Contact/contactTypes';
import { formValidation } from '../../../appData/Contact/contactData';

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateForm = (formData: FormData): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = formValidation.errors.nameRequired;
  }

  if (!formData.email.trim()) {
    errors.email = formValidation.errors.emailRequired;
  } else if (!validateEmail(formData.email)) {
    errors.email = formValidation.errors.emailInvalid;
  }

  if (!formData.subject.trim()) {
    errors.subject = formValidation.errors.subjectRequired;
  }

  if (!formData.message.trim()) {
    errors.message = formValidation.errors.messageRequired;
  } else if (formData.message.trim().length < formValidation.minMessageLength) {
    errors.message = formValidation.errors.messageMinLength;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const createMailtoLink = (formData: FormData, email: string): string => {
  return `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;
};

export const getInitialFormData = (): FormData => ({
  name: '',
  email: '',
  subject: '',
  message: '',
});