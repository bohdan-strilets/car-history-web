import type { IconName } from '@shared/icons';
import type { ReactNode } from 'react';

export interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'start' | 'end';
  disabled?: boolean;
  fullWidth?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownItemProps {
  leftIcon?: IconName;
  rightIcon?: IconName;
  label: string;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
  className?: string;
}
