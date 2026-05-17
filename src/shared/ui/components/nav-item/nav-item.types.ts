import type { IconName } from '@shared/icons';

export interface NavItemProps {
  icon: IconName;
  label: string;
  to: string;
  collapsed?: boolean;
}
