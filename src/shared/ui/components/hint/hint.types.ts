import type { RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './hint.css';

export type HintVariants = NonNullable<RecipeVariants<typeof root>>;
export type HintVariant = NonNullable<HintVariants['variant']>;

export interface HintProps {
  message: string;
  variant?: HintVariant;
}
