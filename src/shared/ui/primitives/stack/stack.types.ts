import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import type { ResponsiveValue } from '@shared/types';

import { root } from './stack.css';

export type StackVariants = NonNullable<RecipeVariants<typeof root>>;

export type DirectionToken = NonNullable<StackVariants['direction']>;
export type GapToken = NonNullable<StackVariants['gap']>;
export type AlignToken = NonNullable<StackVariants['align']>;
export type JustifyToken = NonNullable<StackVariants['justify']>;
export type WrapToken = NonNullable<StackVariants['wrap']>;

export interface StackOwnProps {
  direction?: ResponsiveValue<DirectionToken>;
  gap?: ResponsiveValue<GapToken>;
  align?: AlignToken;
  justify?: JustifyToken;
  wrap?: ResponsiveValue<WrapToken>;
  inline?: boolean;
}

export type StackProps<T extends ElementType = 'div'> = StackOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof StackOwnProps | 'as'>;
