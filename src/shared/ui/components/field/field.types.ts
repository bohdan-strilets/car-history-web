import type { ReactNode } from 'react';

export interface FieldProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}
