import { media, vars } from '@shared/styles';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Responsive

const gapValues = vars.spacing;

const directionValues = {
  row: 'row',
  column: 'column',
  'row-reverse': 'row-reverse',
  'column-reverse': 'column-reverse',
} as const;

const wrapValues = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  'wrap-reverse': 'wrap-reverse',
} as const;

export const responsiveStyles = {
  gap: {
    tablet: styleVariants(gapValues, (v) => ({
      '@media': { [media.tablet]: { gap: v } },
    })),
    laptop: styleVariants(gapValues, (v) => ({
      '@media': { [media.laptop]: { gap: v } },
    })),
    desktop: styleVariants(gapValues, (v) => ({
      '@media': { [media.desktop]: { gap: v } },
    })),
    wideDesktop: styleVariants(gapValues, (v) => ({
      '@media': { [media.wideDesktop]: { gap: v } },
    })),
  },
  direction: {
    tablet: styleVariants(directionValues, (v) => ({
      '@media': { [media.tablet]: { flexDirection: v as never } },
    })),
    laptop: styleVariants(directionValues, (v) => ({
      '@media': { [media.laptop]: { flexDirection: v as never } },
    })),
    desktop: styleVariants(directionValues, (v) => ({
      '@media': { [media.desktop]: { flexDirection: v as never } },
    })),
    wideDesktop: styleVariants(directionValues, (v) => ({
      '@media': { [media.wideDesktop]: { flexDirection: v as never } },
    })),
  },
  wrap: {
    tablet: styleVariants(wrapValues, (v) => ({
      '@media': { [media.tablet]: { flexWrap: v as never } },
    })),
    laptop: styleVariants(wrapValues, (v) => ({
      '@media': { [media.laptop]: { flexWrap: v as never } },
    })),
    desktop: styleVariants(wrapValues, (v) => ({
      '@media': { [media.desktop]: { flexWrap: v as never } },
    })),
    wideDesktop: styleVariants(wrapValues, (v) => ({
      '@media': { [media.wideDesktop]: { flexWrap: v as never } },
    })),
  },
} as const;

// Recipe

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
