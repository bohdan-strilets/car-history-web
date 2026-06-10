import type { ComponentPropsWithoutRef } from 'react';

import type { root } from './checkbox.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type CheckboxVariants = NonNullable<RecipeVariants<typeof root>>;

export type CheckboxSize = NonNullable<CheckboxVariants['size']>;
export type CheckboxState = NonNullable<CheckboxVariants['state']>;

export interface CheckboxOwnProps {
  size?: CheckboxSize;
  state?: CheckboxState;
  indeterminate?: boolean;
  label?: string;
}

export type CheckboxProps = CheckboxOwnProps &
  Omit<ComponentPropsWithoutRef<'input'>, keyof CheckboxOwnProps | 'type'>;
