import type { ResponsiveValue } from '@shared/types';
import { type RecipeVariants } from '@vanilla-extract/recipes';
import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { root } from './grid.css';

export type GridVariants = NonNullable<RecipeVariants<typeof root>>;

export type ColumnsToken = NonNullable<GridVariants['columns']>;
export type GapToken = NonNullable<GridVariants['gap']>;

export interface GridOwnProps {
  columns?: ResponsiveValue<ColumnsToken>;
  gap?: ResponsiveValue<GapToken>;
}

export type GridProps<T extends ElementType = 'div'> = GridOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof GridOwnProps | 'as'>;
