import type { ComponentPropsWithoutRef } from 'react';

import type { DropdownDirection } from '@shared/ui';

export interface UserBarOwnProps {
  expanded?: boolean;
  direction?: DropdownDirection;
}

export type UserBarProps = UserBarOwnProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof UserBarOwnProps>;
