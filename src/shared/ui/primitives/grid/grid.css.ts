import { recipe } from '@vanilla-extract/recipes';

import { createResponsiveStyles } from '@shared/lib';
import { vars } from '@shared/styles';

import { column } from './grid.config';

export const responsiveStyles = {
  columns: createResponsiveStyles(column, (v) => ({ gridTemplateColumns: v })),
  gap: createResponsiveStyles(vars.spacing, (v) => ({ gap: v })),
};

export const root = recipe({
  base: {
    display: 'grid',
  },

  variants: {
    columns: {
      '1': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
      '2': { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
      '3': { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
      '4': { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
      '5': { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
      '6': { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
      '7': { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' },
      '8': { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' },
      '9': { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' },
      '10': { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' },
      '11': { gridTemplateColumns: 'repeat(11, minmax(0, 1fr))' },
      '12': { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' },
    },

    gap: {
      none: { gap: vars.spacing.none },
      xs: { gap: vars.spacing.xs },
      sm: { gap: vars.spacing.sm },
      md: { gap: vars.spacing.md },
      lg: { gap: vars.spacing.lg },
      xl: { gap: vars.spacing.xl },
      '2xl': { gap: vars.spacing['2xl'] },
      '3xl': { gap: vars.spacing['3xl'] },
      '4xl': { gap: vars.spacing['4xl'] },
      '5xl': { gap: vars.spacing['5xl'] },
      '6xl': { gap: vars.spacing['6xl'] },
    },
  },
});
