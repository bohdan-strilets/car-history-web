import { createResponsiveStyles } from '@shared/lib/primitives';
import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const responsiveStyles = {
  p: createResponsiveStyles(vars.spacing, (v) => ({ padding: v })),
  px: createResponsiveStyles(vars.spacing, (v) => ({ paddingInline: v })),
  py: createResponsiveStyles(vars.spacing, (v) => ({ paddingBlock: v })),
  radius: createResponsiveStyles(vars.radius, (v) => ({ borderRadius: v })),
} as const;

export const root = recipe({
  base: {
    boxSizing: 'border-box',
  },

  variants: {
    p: {
      none: { padding: vars.spacing.none },
      xs: { padding: vars.spacing.xs },
      sm: { padding: vars.spacing.sm },
      md: { padding: vars.spacing.md },
      lg: { padding: vars.spacing.lg },
      xl: { padding: vars.spacing.xl },
      '2xl': { padding: vars.spacing['2xl'] },
      '3xl': { padding: vars.spacing['3xl'] },
      '4xl': { padding: vars.spacing['4xl'] },
      '5xl': { padding: vars.spacing['5xl'] },
      '6xl': { padding: vars.spacing['6xl'] },
    },

    px: {
      none: { paddingInline: vars.spacing.none },
      xs: { paddingInline: vars.spacing.xs },
      sm: { paddingInline: vars.spacing.sm },
      md: { paddingInline: vars.spacing.md },
      lg: { paddingInline: vars.spacing.lg },
      xl: { paddingInline: vars.spacing.xl },
      '2xl': { paddingInline: vars.spacing['2xl'] },
      '3xl': { paddingInline: vars.spacing['3xl'] },
      '4xl': { paddingInline: vars.spacing['4xl'] },
      '5xl': { paddingInline: vars.spacing['5xl'] },
      '6xl': { paddingInline: vars.spacing['6xl'] },
    },

    py: {
      none: { paddingBlock: vars.spacing.none },
      xs: { paddingBlock: vars.spacing.xs },
      sm: { paddingBlock: vars.spacing.sm },
      md: { paddingBlock: vars.spacing.md },
      lg: { paddingBlock: vars.spacing.lg },
      xl: { paddingBlock: vars.spacing.xl },
      '2xl': { paddingBlock: vars.spacing['2xl'] },
      '3xl': { paddingBlock: vars.spacing['3xl'] },
      '4xl': { paddingBlock: vars.spacing['4xl'] },
      '5xl': { paddingBlock: vars.spacing['5xl'] },
      '6xl': { paddingBlock: vars.spacing['6xl'] },
    },

    radius: {
      none: { borderRadius: vars.radius.none },
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      pill: { borderRadius: vars.radius.pill },
    },

    width: {
      auto: { width: 'auto' },
      full: { width: '100%' },
      screen: { width: '100vw' },
      fit: { width: 'fit-content' },
      min: { width: 'min-content' },
      max: { width: 'max-content' },
    },

    height: {
      auto: { height: 'auto' },
      full: { height: '100%' },
      screen: { height: '100vh' },
      fit: { height: 'fit-content' },
      min: { height: 'min-content' },
      max: { height: 'max-content' },
    },

    overflow: {
      visible: { overflow: 'visible' },
      hidden: { overflow: 'hidden' },
      auto: { overflow: 'auto' },
      scroll: { overflow: 'scroll' },
      'x-auto': { overflowX: 'auto' },
      'y-auto': { overflowY: 'auto' },
      'x-hidden': { overflowX: 'hidden' },
      'y-hidden': { overflowY: 'hidden' },
    },

    position: {
      static: { position: 'static' },
      relative: { position: 'relative' },
      absolute: { position: 'absolute' },
      fixed: { position: 'fixed' },
      sticky: { position: 'sticky' },
    },
  },
});
