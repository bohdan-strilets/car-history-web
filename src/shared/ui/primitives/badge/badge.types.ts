import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';

import { root } from './badge.css';

export type BadgeVariants = NonNullable<RecipeVariants<typeof root>>;

export type BadgeSize = NonNullable<BadgeVariants['size']>;
export type BadgeSoft = NonNullable<BadgeVariants['soft']>;
export type BadgeSolid = NonNullable<BadgeVariants['solid']>;
export type BadgeGradient = NonNullable<BadgeVariants['gradient']>;
export type BadgeBorder = NonNullable<BadgeVariants['border']>;

export interface BadgeOwnProps {
  size?: ResponsiveValue<BadgeSize>;
  soft?: BadgeSoft;
  solid?: BadgeSolid;
  gradient?: BadgeGradient;
  border?: BadgeBorder;
  startIcon?: IconName;
  endIcon?: IconName;
}

export type BadgeProps<T extends ElementType = 'span'> = BadgeOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof BadgeOwnProps | 'as'>;

export interface BadgeClassesParams {
  size?: ResponsiveValue<BadgeSize>;
  soft?: BadgeSoft;
  solid?: BadgeSolid;
  gradient?: BadgeGradient;
  border?: BadgeBorder;
}
