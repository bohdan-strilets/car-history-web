import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';

import type { root } from './input.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';

export type InputVariants = NonNullable<RecipeVariants<typeof root>>;

export type InputSize = NonNullable<InputVariants['size']>;
export type InputState = NonNullable<InputVariants['state']>;

export interface InputOwnProps {
  size?: ResponsiveValue<InputSize>;
  state?: InputState;
  leftIcon?: IconName;
  rightIcon?: IconName;
  rightElement?: ReactNode;
}

export type InputProps = InputOwnProps &
  Omit<ComponentPropsWithoutRef<'input'>, keyof InputOwnProps>;

export interface InputClassesParams {
  size?: ResponsiveValue<InputSize>;
  state?: InputState;
  disabled?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
}
