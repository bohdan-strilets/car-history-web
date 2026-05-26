import type { DropdownDirection } from '@shared/ui';
import type { ComponentPropsWithoutRef } from 'react';

export interface UserBarOwnProps {
  expanded?: boolean;
  direction?: DropdownDirection;
}

export type UserBarProps = UserBarOwnProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof UserBarOwnProps>;
