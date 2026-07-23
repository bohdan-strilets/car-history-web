import { type RecipeVariants } from '@vanilla-extract/recipes';

import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';

import { root } from './icon.css';

export type IconVariants = NonNullable<RecipeVariants<typeof root>>;
export type IconSize = NonNullable<IconVariants['size']>;
export type IconColor = NonNullable<IconVariants['color']>;
export type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

export interface IconProps {
  name: IconName;
  size?: ResponsiveValue<IconSize>;
  color?: IconColor;
  weight?: IconWeight;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}
