import { type ComponentPropsWithoutRef } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';
import type { IconWeight } from '@shared/ui';

import { root } from './button.css';

export type ButtonVariants = NonNullable<RecipeVariants<typeof root>>;
export type ButtonVariant = NonNullable<ButtonVariants['variant']>;
export type ButtonColor = NonNullable<ButtonVariants['color']>;
export type ButtonSize = NonNullable<ButtonVariants['size']>;
export type ButtonRadius = NonNullable<ButtonVariants['radius']>;

export interface ButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ResponsiveValue<ButtonSize>;
  radius?: ButtonRadius;
  fullWidth?: boolean;
  iconOnly?: boolean;
  loading?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  weight?: IconWeight;
}
