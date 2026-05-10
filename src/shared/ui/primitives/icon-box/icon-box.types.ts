import type { IconName } from '@shared/icons';
import type { PaletteColors, SemanticColors } from '@shared/styles';
import type { ResponsiveValue } from '@shared/types';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import type { IconStrokeWidth } from '../icon';

import { root } from './icon-box.css';

export type IconBoxVariants = NonNullable<RecipeVariants<typeof root>>;
export type IconBoxSize = NonNullable<IconBoxVariants['size']>;
export type IconBoxRadius = NonNullable<IconBoxVariants['radius']>;
export type IconBoxShadow = NonNullable<IconBoxVariants['shadow']>;

export type IconBoxColor = PaletteColors | SemanticColors;
export type IconBoxVariant = 'soft' | 'solid' | 'ghost';

export type GradientToken =
  | 'bg-subtle'
  | 'bg-mesh'
  | 'accent-solid'
  | 'accent-soft'
  | 'accent-glow'
  | `palette-${PaletteColors}`;

export interface IconBoxProps {
  name: IconName;
  size?: ResponsiveValue<IconBoxSize>;
  color?: IconBoxColor;
  variant?: IconBoxVariant;
  gradient?: GradientToken;
  radius?: IconBoxRadius;
  shadow?: IconBoxShadow;
  strokeWidth?: IconStrokeWidth;
  className?: string;
  'aria-label'?: string;
}
