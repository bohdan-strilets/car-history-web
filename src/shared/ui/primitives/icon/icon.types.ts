import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './icon.css';

export type IconVariants = NonNullable<RecipeVariants<typeof root>>;
export type IconSize = NonNullable<IconVariants['size']>;
export type IconColor = NonNullable<IconVariants['color']>;
export type IconStrokeWidth = 'thin' | 'regular' | 'medium' | 'bold';

export interface IconProps {
  name: IconName;
  size?: ResponsiveValue<IconSize>;
  color?: IconColor;
  strokeWidth?: IconStrokeWidth;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}
