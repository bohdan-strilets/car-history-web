import type { ResponsiveValue } from '@shared/types';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

import { root } from './box.css';

export type BoxVariants = NonNullable<RecipeVariants<typeof root>>;

export type PaddingToken = NonNullable<BoxVariants['p']>;
export type RadiusToken = NonNullable<BoxVariants['radius']>;
export type WidthToken = NonNullable<BoxVariants['width']>;
export type MaxWidthToken = NonNullable<BoxVariants['maxWidth']>;
export type HeightToken = NonNullable<BoxVariants['height']>;
export type OverflowToken = NonNullable<BoxVariants['overflow']>;
export type PositionToken = NonNullable<BoxVariants['position']>;

export interface BoxOwnProps {
  p?: ResponsiveValue<PaddingToken>;
  px?: ResponsiveValue<PaddingToken>;
  py?: ResponsiveValue<PaddingToken>;
  radius?: ResponsiveValue<RadiusToken>;
  width?: ResponsiveValue<WidthToken>;
  maxWidth?: MaxWidthToken;
  height?: ResponsiveValue<HeightToken>;
  overflow?: ResponsiveValue<OverflowToken>;
  position?: ResponsiveValue<PositionToken>;
}

export type BoxProps<T extends ElementType = 'div'> = BoxOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof BoxOwnProps | 'as'>;
