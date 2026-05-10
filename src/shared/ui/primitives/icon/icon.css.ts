import { media, vars } from '@shared/styles';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Responsive

export const responsiveStyles = {
  size: {
    tablet: styleVariants(vars.layout.iconSize, (v) => ({
      '@media': { [media.tablet]: { width: v, height: v } },
    })),
    laptop: styleVariants(vars.layout.iconSize, (v) => ({
      '@media': { [media.laptop]: { width: v, height: v } },
    })),
    desktop: styleVariants(vars.layout.iconSize, (v) => ({
      '@media': { [media.desktop]: { width: v, height: v } },
    })),
    wideDesktop: styleVariants(vars.layout.iconSize, (v) => ({
      '@media': { [media.wideDesktop]: { width: v, height: v } },
    })),
  },
} as const;

// Recipe

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  variants: {
    size: {
      xs: {
        width: vars.layout.iconSize.xs,
        height: vars.layout.iconSize.xs,
      },
      sm: {
        width: vars.layout.iconSize.sm,
        height: vars.layout.iconSize.sm,
      },
      md: {
        width: vars.layout.iconSize.md,
        height: vars.layout.iconSize.md,
      },
      lg: {
        width: vars.layout.iconSize.lg,
        height: vars.layout.iconSize.lg,
      },
      xl: {
        width: vars.layout.iconSize.xl,
        height: vars.layout.iconSize.xl,
      },
      '2xl': {
        width: vars.layout.iconSize['2xl'],
        height: vars.layout.iconSize['2xl'],
      },
      '3xl': {
        width: vars.layout.iconSize['3xl'],
        height: vars.layout.iconSize['3xl'],
      },
      '4xl': {
        width: vars.layout.iconSize['4xl'],
        height: vars.layout.iconSize['4xl'],
      },
    },

    color: {
      primary: { color: vars.color.text.primary },
      secondary: { color: vars.color.text.secondary },
      tertiary: { color: vars.color.text.tertiary },
      disabled: { color: vars.color.text.disabled },
      inverse: { color: vars.color.text.inverse },
      inherit: { color: 'inherit' },
      onColor: { color: vars.color.text.onColor },
      accent: { color: vars.color.accent.solid },
      success: { color: vars.color.semantic.success.solid },
      warning: { color: vars.color.semantic.warning.solid },
      danger: { color: vars.color.semantic.danger.solid },
      info: { color: vars.color.semantic.info.solid },
      orange: { color: vars.color.palette.orange.solid },
      amber: { color: vars.color.palette.amber.solid },
      yellow: { color: vars.color.palette.yellow.solid },
      lime: { color: vars.color.palette.lime.solid },
      green: { color: vars.color.palette.green.solid },
      teal: { color: vars.color.palette.teal.solid },
      cyan: { color: vars.color.palette.cyan.solid },
      sky: { color: vars.color.palette.sky.solid },
      blue: { color: vars.color.palette.blue.solid },
      indigo: { color: vars.color.palette.indigo.solid },
      violet: { color: vars.color.palette.violet.solid },
      purple: { color: vars.color.palette.purple.solid },
      pink: { color: vars.color.palette.pink.solid },
      rose: { color: vars.color.palette.rose.solid },
      gray: { color: vars.color.palette.gray.solid },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});
