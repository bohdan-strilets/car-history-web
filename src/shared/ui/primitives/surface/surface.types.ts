import type { PaletteColors, SemanticColors } from '@shared/styles';
import { type RecipeVariants } from '@vanilla-extract/recipes';
import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { root } from './surface.css';

export type SurfaceVariants = NonNullable<RecipeVariants<typeof root>>;

export type SurfaceVariant = NonNullable<SurfaceVariants['variant']>;
export type SurfaceBorder = NonNullable<SurfaceVariants['border']>;
export type SurfaceShadow = NonNullable<SurfaceVariants['shadow']>;
export type SurfaceRadius = NonNullable<SurfaceVariants['radius']>;

export type SurfaceColor = PaletteColors | SemanticColors;

export type ColorVariant = 'soft' | 'solid';

export type GradientToken =
  | 'bg-subtle'
  | 'bg-mesh'
  | 'accent-solid'
  | 'accent-soft'
  | 'accent-glow'
  | `palette-${PaletteColors}`;

export interface SurfaceOwnProps {
  variant?: SurfaceVariant;
  color?: SurfaceColor;
  colorVariant?: ColorVariant;
  gradient?: GradientToken;
  border?: SurfaceBorder;
  shadow?: SurfaceShadow;
  radius?: SurfaceRadius;
}

export type SurfaceProps<T extends ElementType = 'div'> = SurfaceOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof SurfaceOwnProps | 'as'>;
