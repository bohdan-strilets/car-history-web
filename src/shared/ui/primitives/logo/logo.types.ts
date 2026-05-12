import type { ResponsiveValue } from '@shared/types';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import type { root } from './logo.css';

export type LogoVariants = NonNullable<RecipeVariants<typeof root>>;
export type LogoSize = NonNullable<LogoVariants['size']>;

export type LogoVariant = 'icon' | 'text' | 'full';

export interface LogoProps {
  variant?: LogoVariant;
  size?: ResponsiveValue<LogoSize>;
  className?: string;
}
