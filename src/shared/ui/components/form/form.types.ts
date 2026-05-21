import type { IconName } from '@shared/icons';
import type { ReactNode } from 'react';

export interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string;
  submitLabel: string;
  submitIcon?: IconName;
  onBack?: () => void;
  className?: string;
}
