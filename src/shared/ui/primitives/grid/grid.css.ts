import { media, vars } from '@shared/styles';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Responsive

const columnValues = {
  1: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
  2: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
  3: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
  4: { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
  5: { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
  6: { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
  7: { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' },
  8: { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' },
  9: { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' },
  10: { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' },
  11: { gridTemplateColumns: 'repeat(11, minmax(0, 1fr))' },
  12: { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' },
} as const;

export const responsiveStyles = {
  columns: {
    tablet: styleVariants(columnValues, (v) => ({
      '@media': { [media.tablet]: v },
    })),
    laptop: styleVariants(columnValues, (v) => ({
      '@media': { [media.laptop]: v },
    })),
    desktop: styleVariants(columnValues, (v) => ({
      '@media': { [media.desktop]: v },
    })),
    wideDesktop: styleVariants(columnValues, (v) => ({
      '@media': { [media.wideDesktop]: v },
    })),
  },
  gap: {
    tablet: styleVariants(vars.spacing, (v) => ({
      '@media': { [media.tablet]: { gap: v } },
    })),
    laptop: styleVariants(vars.spacing, (v) => ({
      '@media': { [media.laptop]: { gap: v } },
    })),
    desktop: styleVariants(vars.spacing, (v) => ({
      '@media': { [media.desktop]: { gap: v } },
    })),
    wideDesktop: styleVariants(vars.spacing, (v) => ({
      '@media': { [media.wideDesktop]: { gap: v } },
    })),
  },
} as const;

// ─── Recipe ───────────────────────────────────────────────────────────────────

export const root = recipe({
  base: {
    display: 'grid',
  },

  variants: {
    columns: {
      1: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
      2: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
      3: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' },
      4: { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' },
      5: { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' },
      6: { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))' },
      7: { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' },
      8: { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' },
      9: { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))' },
      10: { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))' },
      11: { gridTemplateColumns: 'repeat(11, minmax(0, 1fr))' },
      12: { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' },
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
