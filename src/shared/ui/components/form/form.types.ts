import type { ReactNode } from 'react';

import type { IconName } from '@shared/icons';

export interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading?: boolean;
  error?: string;
  submitLabel: string;
  submitIcon?: IconName;
  onBack?: () => void;
  onSkip?: () => void;
  className?: string;
}
