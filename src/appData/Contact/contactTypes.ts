// app/types/contactTypes.ts

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

export interface FormFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  placeholder: string;
  error?: string;
  isFocused: boolean;
  icon?: 'user' | 'mail' | 'message';
  rows?: number;
}

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}