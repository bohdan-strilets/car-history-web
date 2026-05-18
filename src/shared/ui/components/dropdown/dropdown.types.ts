import type { IconName } from '@shared/icons';
import type { ReactNode } from 'react';

export interface BaseDropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'start' | 'end';
  disabled?: boolean;
}

export interface DropdownItemProps {
  icon?: IconName;
  label: string;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
}
