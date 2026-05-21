import type { IconName } from '@shared/icons';
import type { ReactNode } from 'react';

export type DropdownAlign = 'start' | 'end';

export interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: DropdownAlign;
  disabled?: boolean;
  fullWidth?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownItemProps {
  leftIcon?: IconName;
  rightIcon?: IconName;
  label: string;
  onClick?: () => void;
  danger?: boolean;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
}
