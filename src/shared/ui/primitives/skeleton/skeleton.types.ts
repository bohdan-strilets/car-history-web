import type { root } from './skeleton.css';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { CSSProperties } from 'react';

export type SkeletonVariants = NonNullable<RecipeVariants<typeof root>>;
export type SkeletonVariant = NonNullable<SkeletonVariants['variant']>;

export interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  radius?: CSSProperties['borderRadius'];
  className?: string;
}
