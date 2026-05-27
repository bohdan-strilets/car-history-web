import type { IconName } from '@shared/icons';

export interface StateViewProps {
  icon: IconName;
  variant?: 'default' | 'error';
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}
