import { recipe } from '@vanilla-extract/recipes';

import { createResponsiveStyles } from '@shared/lib';
import { vars } from '@shared/styles';

import { direction, wrap } from './stack.config';

export const responsiveStyles = {
  gap: createResponsiveStyles(vars.spacing, (v) => ({ gap: v })),
  direction: createResponsiveStyles(direction, (v) => ({ flexDirection: v })),
  wrap: createResponsiveStyles(wrap, (v) => ({ flexWrap: v })),
};

export const root = recipe({
  base: {
    display: 'flex',
  },

  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      'row-reverse': { flexDirection: 'row-reverse' },
      'column-reverse': { flexDirection: 'column-reverse' },
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

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },

    wrap: {
      wrap: { flexWrap: 'wrap' },
      nowrap: { flexWrap: 'nowrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' },
    },

    inline: {
      true: { display: 'inline-flex' },
    },
  },

  defaultVariants: {
    direction: 'column',
  },
});
