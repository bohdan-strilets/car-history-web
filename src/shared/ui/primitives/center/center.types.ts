import { type RecipeVariants } from '@vanilla-extract/recipes';
import { type ComponentPropsWithoutRef, type ElementType } from 'react';

import { root } from './center.css';

export type CenterVariants = NonNullable<RecipeVariants<typeof root>>;

export interface CenterOwnProps {
  inline?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
}

export type CenterProps<T extends ElementType = 'div'> = CenterOwnProps & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof CenterOwnProps | 'as'>;
