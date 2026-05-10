import type { IconName } from '@shared/icons';
import type { ResponsiveValue } from '@shared/types';
import type { IconStrokeWidth } from '@shared/ui/primitives/icon';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './icon-box.css';

export type IconBoxVariants = NonNullable<RecipeVariants<typeof root>>;
export type IconBoxSize = NonNullable<IconBoxVariants['size']>;
export type IconBoxSoft = NonNullable<IconBoxVariants['soft']>;
export type IconBoxSolid = NonNullable<IconBoxVariants['solid']>;
export type IconBoxGradient = NonNullable<IconBoxVariants['gradient']>;
export type IconBoxBorder = NonNullable<IconBoxVariants['border']>;
export type IconBoxRadius = NonNullable<IconBoxVariants['radius']>;
export type IconBoxShadow = NonNullable<IconBoxVariants['shadow']>;

export interface IconBoxProps {
  name: IconName;
  size?: ResponsiveValue<IconBoxSize>;
  soft?: IconBoxSoft;
  solid?: IconBoxSolid;
  gradient?: IconBoxGradient;
  border?: IconBoxBorder;
  radius?: IconBoxRadius;
  shadow?: IconBoxShadow;
  strokeWidth?: IconStrokeWidth;
  className?: string;
  'aria-label'?: string;
}
