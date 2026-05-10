import { type RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './divider.css';

export type DividerVariants = NonNullable<RecipeVariants<typeof root>>;
export type DividerOrientation = NonNullable<DividerVariants['orientation']>;
export type DividerColor = NonNullable<DividerVariants['color']>;

export interface DividerProps {
  orientation?: DividerOrientation;
  color?: DividerColor;
  className?: string;
}
