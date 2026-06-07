import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './surface.css';

export type SurfaceVariants = NonNullable<RecipeVariants<typeof root>>;

export type SurfaceVariant = NonNullable<SurfaceVariants['variant']>;
export type SurfaceSoft = NonNullable<SurfaceVariants['soft']>;
export type SurfaceSolid = NonNullable<SurfaceVariants['solid']>;
export type SurfaceGradient = NonNullable<SurfaceVariants['gradient']>;
export type SurfaceBorder = NonNullable<SurfaceVariants['border']>;
export type SurfaceShadow = NonNullable<SurfaceVariants['shadow']>;
export type SurfaceRadius = NonNullable<SurfaceVariants['radius']>;

export interface SurfaceOwnProps {
  variant?: SurfaceVariant;
  soft?: SurfaceSoft;
  solid?: SurfaceSolid;
  gradient?: SurfaceGradient;
  border?: SurfaceBorder;
  shadow?: SurfaceShadow;
  radius?: SurfaceRadius;
}

export type SurfaceProps<T extends ElementType = 'div'> = SurfaceOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof SurfaceOwnProps | 'as'>;
