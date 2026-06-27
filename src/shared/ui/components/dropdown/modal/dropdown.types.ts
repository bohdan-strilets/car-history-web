import type { ReactNode } from 'react';

import type { IconName } from '@shared/icons';

export type DropdownAlign = 'start' | 'end';
export type DropdownDirection = 'top' | 'bottom' | 'left' | 'right';

// Props

export interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: DropdownAlign;
  direction?: DropdownDirection;
  disabled?: boolean;
  fullWidth?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  minWidth?: number | string;
  maxHeight?: number | string;
  className?: string;
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

// Types

export interface Coords {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
}

// Params

export type DropdownParams = Pick<DropdownProps, 'align' | 'direction' | 'fullWidth' | 'open'> & {
  menuRef: React.RefObject<HTMLDivElement | null>;
};

export interface DropdownKeyboardParams {
  open: boolean;
  onClose: () => void;
}
