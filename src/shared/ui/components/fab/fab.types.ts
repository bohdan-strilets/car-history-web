import type { IconName } from '@shared/icons';

export type FabSize = 'md' | 'lg';

export interface FabProps {
  icon: IconName;
  label?: string;
  onClick?: () => void;
  size?: FabSize;
  visible?: boolean;
  disabled?: boolean;
  className?: string;
}
