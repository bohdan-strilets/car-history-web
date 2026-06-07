import { root } from './hint.css';

import type { RecipeVariants } from '@vanilla-extract/recipes';

export type HintVariants = NonNullable<RecipeVariants<typeof root>>;
export type HintVariant = NonNullable<HintVariants['variant']>;

export interface HintProps {
  message: string;
  variant?: HintVariant;
}
