import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import { root } from './grid.css';

import type { ResponsiveValue } from '@shared/types';

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
