import { recipe } from '@vanilla-extract/recipes';

import { createResponsiveStyles } from '@shared/lib';
import { vars } from '@shared/styles';

import { textAlign } from './text.config';

export const responsiveStyles = {
  size: createResponsiveStyles(vars.typography.size, (v) => ({ fontSize: v })),
  align: createResponsiveStyles(textAlign, (v) => ({ textAlign: v })),
};

export const root = recipe({
  base: {},

  variants: {
    family: {
      body: { fontFamily: vars.typography.font.body },
      heading: { fontFamily: vars.typography.font.display },
    },

    size: {
      xs: { fontSize: vars.typography.size.xs },
      sm: { fontSize: vars.typography.size.sm },
      md: { fontSize: vars.typography.size.md },
      lg: { fontSize: vars.typography.size.lg },
      xl: { fontSize: vars.typography.size.xl },
      '2xl': { fontSize: vars.typography.size['2xl'] },
      '3xl': { fontSize: vars.typography.size['3xl'] },
      '4xl': { fontSize: vars.typography.size['4xl'] },
      '5xl': { fontSize: vars.typography.size['5xl'] },
      '6xl': { fontSize: vars.typography.size['6xl'] },
    },

    weight: {
      light: { fontWeight: vars.typography.weight.light },
      regular: { fontWeight: vars.typography.weight.regular },
      medium: { fontWeight: vars.typography.weight.medium },
      semibold: { fontWeight: vars.typography.weight.semibold },
      bold: { fontWeight: vars.typography.weight.bold },
      extraBold: { fontWeight: vars.typography.weight.extraBold },
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

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    lineHeight: {
      tight: { lineHeight: vars.typography.height.tight },
      snug: { lineHeight: vars.typography.height.snug },
      normal: { lineHeight: vars.typography.height.normal },
      relaxed: { lineHeight: vars.typography.height.relaxed },
    },

    letterSpacing: {
      tight: { letterSpacing: vars.typography.spacing.tight },
      normal: { letterSpacing: vars.typography.spacing.normal },
      wide: { letterSpacing: vars.typography.spacing.wide },
      wider: { letterSpacing: vars.typography.spacing.wider },
      widest: { letterSpacing: vars.typography.spacing.widest },
    },

    transform: {
      uppercase: { textTransform: 'uppercase' },
      lowercase: { textTransform: 'lowercase' },
      capitalize: { textTransform: 'capitalize' },
      none: { textTransform: 'none' },
    },

    italic: {
      true: { fontStyle: 'italic' },
    },

    underline: {
      true: { textDecoration: 'underline' },
    },

    strike: {
      true: { textDecoration: 'line-through' },
    },

    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    family: 'body',
    size: 'md',
    weight: 'regular',
    color: 'primary',
  },
});
