import type { IconName } from '@shared/icons';

export type StateViewVariant = 'default' | 'error' | 'success';

export interface StateViewProps {
  icon: IconName;
  variant?: StateViewVariant;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}
