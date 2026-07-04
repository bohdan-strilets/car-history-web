import { root } from './progress-bar.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

export type ProgressBarVariants = NonNullable<RecipeVariants<typeof root>>;
export type ProgressBarColor = NonNullable<ProgressBarVariants['color']>;

export interface ProgressBarProps {
  value: number;
  color?: ProgressBarColor;
  className?: string;
}
