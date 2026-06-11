import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import type { ResponsiveValue } from '@shared/types';

import { root } from './text.css';

export type TextVariants = NonNullable<RecipeVariants<typeof root>>;

export type TextSize = NonNullable<TextVariants['size']>;
export type TextWeight = NonNullable<TextVariants['weight']>;
export type TextColor = NonNullable<TextVariants['color']>;
export type TextAlign = NonNullable<TextVariants['align']>;
export type TextLineHeight = NonNullable<TextVariants['lineHeight']>;
export type TextLetterSpacing = NonNullable<TextVariants['letterSpacing']>;
export type TextTransform = NonNullable<TextVariants['transform']>;
export type TextFamily = NonNullable<TextVariants['family']>;

export interface TextOwnProps {
  size?: ResponsiveValue<TextSize>;
  weight?: TextWeight;
  color?: TextColor;
  align?: ResponsiveValue<TextAlign>;
  lineHeight?: TextLineHeight;
  letterSpacing?: TextLetterSpacing;
  transform?: TextTransform;
  italic?: boolean;
  underline?: boolean;
  strike?: boolean;
  truncate?: boolean;
  family?: TextFamily;
}

export type TextProps<T extends ElementType = 'p'> = TextOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps | 'as'>;
