import { type ComponentPropsWithoutRef } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './pulsing-dot.css';

export type PulsingDotVariants = NonNullable<RecipeVariants<typeof root>>;

export type PulsingDotSize = NonNullable<PulsingDotVariants['size']>;
export type PulsingDotColor = NonNullable<PulsingDotVariants['color']>;

export interface PulsingDotOwnProps {
  color: PulsingDotColor;
  size?: PulsingDotSize;
  isPulsing?: boolean;
}

export type PulsingDotProps = PulsingDotOwnProps &
  Omit<ComponentPropsWithoutRef<'span'>, keyof PulsingDotOwnProps>;
