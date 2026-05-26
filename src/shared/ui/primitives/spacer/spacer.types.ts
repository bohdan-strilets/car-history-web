import type { RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './spacer.css';

type RootVariants = RecipeVariants<typeof root>;

export type SpacerSize = NonNullable<RootVariants>['size'];

export interface SpacerProps {
  size?: SpacerSize;
  className?: string;
}
