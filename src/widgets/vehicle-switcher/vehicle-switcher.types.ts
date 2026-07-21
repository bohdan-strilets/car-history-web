import type { DropdownAlign, DropdownDirection } from '@shared/ui';

export interface VehicleSwitcherProps {
  expanded?: boolean;
  direction?: DropdownDirection;
  align?: DropdownAlign;
  className?: string;
}
