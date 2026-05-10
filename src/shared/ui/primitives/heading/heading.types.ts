import type { ResponsiveValue } from '@shared/types';
import { type RecipeVariants } from '@vanilla-extract/recipes';
import { type ComponentPropsWithoutRef } from 'react';

import { root } from './heading.css';

export type HeadingVariants = NonNullable<RecipeVariants<typeof root>>;

export type HeadingSize = NonNullable<HeadingVariants['size']>;
export type HeadingWeight = NonNullable<HeadingVariants['weight']>;
export type HeadingFont = NonNullable<HeadingVariants['font']>;
export type HeadingColor = NonNullable<HeadingVariants['color']>;
export type HeadingAlign = NonNullable<HeadingVariants['align']>;
export type HeadingTransform = NonNullable<HeadingVariants['transform']>;

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingOwnProps {
  as?: HeadingTag;
  size?: ResponsiveValue<HeadingSize>;
  weight?: HeadingWeight;
  font?: HeadingFont;
  color?: HeadingColor;
  align?: ResponsiveValue<HeadingAlign>;
  transform?: HeadingTransform;
  truncate?: boolean;
}

export type HeadingProps = HeadingOwnProps &
  Omit<ComponentPropsWithoutRef<HeadingTag>, keyof HeadingOwnProps | 'as'>;
