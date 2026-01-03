// app/hooks/useContactForm.ts

import { useState } from 'react';
import { FormData, FormErrors, SubmitStatus } from '../../../appData/Contact/contactTypes';
import { validateForm, createMailtoLink, getInitialFormData } from '../../utils/Contact/contactUtils';
import { contactConfig, successMessage } from '../../../appData/Contact/contactData';

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(getInitialFormData());
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const mailtoLink = createMailtoLink(formData, contactConfig.email);
    window.location.href = mailtoLink;

    setSubmitStatus('success');
    setFormData(getInitialFormData());
    
    setTimeout(() => setSubmitStatus('idle'), successMessage.duration);
  };

  return {
    formData,
    errors,
    submitStatus,
    focusedField,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  };
};