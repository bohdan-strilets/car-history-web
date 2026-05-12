import type { ResponsiveValue } from '@shared/types';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { outerRing, root } from './spinner.css';

export type SpinnerSizeVariants = NonNullable<RecipeVariants<typeof root>>;
export type SpinnerColorVariants = NonNullable<RecipeVariants<typeof outerRing>>;

export type SpinnerSize = NonNullable<SpinnerSizeVariants['size']>;
export type SpinnerColor = NonNullable<SpinnerColorVariants['color']>;

export interface SpinnerProps {
  size?: ResponsiveValue<SpinnerSize>;
  color?: SpinnerColor;
  className?: string;
}
