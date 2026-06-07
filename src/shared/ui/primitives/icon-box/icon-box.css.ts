import { recipe } from '@vanilla-extract/recipes';

import { createResponsiveStyles } from '@shared/lib';
import { vars } from '@shared/styles';

export const responsiveStyles = {
  size: createResponsiveStyles(vars.layout.iconBoxSize, (v) => ({ width: v, height: v })),
};

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
        width: vars.layout.iconBoxSize.xs,
        height: vars.layout.iconBoxSize.xs,
      },
      sm: {
        width: vars.layout.iconBoxSize.sm,
        height: vars.layout.iconBoxSize.sm,
      },
      md: {
        width: vars.layout.iconBoxSize.md,
        height: vars.layout.iconBoxSize.md,
      },
      lg: {
        width: vars.layout.iconBoxSize.lg,
        height: vars.layout.iconBoxSize.lg,
      },
      xl: {
        width: vars.layout.iconBoxSize.xl,
        height: vars.layout.iconBoxSize.xl,
      },
      '2xl': {
        width: vars.layout.iconBoxSize['2xl'],
        height: vars.layout.iconBoxSize['2xl'],
      },
      '3xl': {
        width: vars.layout.iconBoxSize['3xl'],
        height: vars.layout.iconBoxSize['3xl'],
      },
      '4xl': {
        width: vars.layout.iconBoxSize['4xl'],
        height: vars.layout.iconBoxSize['4xl'],
      },
    },

    soft: {
      orange: {
        backgroundColor: vars.color.palette.orange.soft,
        color: vars.color.palette.orange.solid,
      },
      amber: {
        backgroundColor: vars.color.palette.amber.soft,
        color: vars.color.palette.amber.solid,
      },
      yellow: {
        backgroundColor: vars.color.palette.yellow.soft,
        color: vars.color.palette.yellow.solid,
      },
      lime: {
        backgroundColor: vars.color.palette.lime.soft,
        color: vars.color.palette.lime.solid,
      },
      green: {
        backgroundColor: vars.color.palette.green.soft,
        color: vars.color.palette.green.solid,
      },
      teal: {
        backgroundColor: vars.color.palette.teal.soft,
        color: vars.color.palette.teal.solid,
      },
      cyan: {
        backgroundColor: vars.color.palette.cyan.soft,
        color: vars.color.palette.cyan.solid,
      },
      sky: {
        backgroundColor: vars.color.palette.sky.soft,
        color: vars.color.palette.sky.solid,
      },
      blue: {
        backgroundColor: vars.color.palette.blue.soft,
        color: vars.color.palette.blue.solid,
      },
      indigo: {
        backgroundColor: vars.color.palette.indigo.soft,
        color: vars.color.palette.indigo.solid,
      },
      violet: {
        backgroundColor: vars.color.palette.violet.soft,
        color: vars.color.palette.violet.solid,
      },
      purple: {
        backgroundColor: vars.color.palette.purple.soft,
        color: vars.color.palette.purple.solid,
      },
      pink: {
        backgroundColor: vars.color.palette.pink.soft,
        color: vars.color.palette.pink.solid,
      },
      rose: {
        backgroundColor: vars.color.palette.rose.soft,
        color: vars.color.palette.rose.solid,
      },
      gray: {
        backgroundColor: vars.color.palette.gray.soft,
        color: vars.color.palette.gray.solid,
      },

      success: {
        backgroundColor: vars.color.semantic.success.soft,
        color: vars.color.semantic.success.solid,
      },
      warning: {
        backgroundColor: vars.color.semantic.warning.soft,
        color: vars.color.semantic.warning.solid,
      },
      danger: {
        backgroundColor: vars.color.semantic.danger.soft,
        color: vars.color.semantic.danger.solid,
      },
      info: {
        backgroundColor: vars.color.semantic.info.soft,
        color: vars.color.semantic.info.solid,
      },

      accent: {
        backgroundColor: vars.color.accent.soft,
        color: vars.color.accent.solid,
      },
    },

    solid: {
      orange: {
        backgroundColor: vars.color.palette.orange.solid,
        color: vars.color.text.onColor,
      },
      amber: {
        backgroundColor: vars.color.palette.amber.solid,
        color: vars.color.text.onColor,
      },
      yellow: {
        backgroundColor: vars.color.palette.yellow.solid,
        color: vars.color.text.onColor,
      },
      lime: {
        backgroundColor: vars.color.palette.lime.solid,
        color: vars.color.text.onColor,
      },
      green: {
        backgroundColor: vars.color.palette.green.solid,
        color: vars.color.text.onColor,
      },
      teal: {
        backgroundColor: vars.color.palette.teal.solid,
        color: vars.color.text.onColor,
      },
      cyan: {
        backgroundColor: vars.color.palette.cyan.solid,
        color: vars.color.text.onColor,
      },
      sky: {
        backgroundColor: vars.color.palette.sky.solid,
        color: vars.color.text.onColor,
      },
      blue: {
        backgroundColor: vars.color.palette.blue.solid,
        color: vars.color.text.onColor,
      },
      indigo: {
        backgroundColor: vars.color.palette.indigo.solid,
        color: vars.color.text.onColor,
      },
      violet: {
        backgroundColor: vars.color.palette.violet.solid,
        color: vars.color.text.onColor,
      },
      purple: {
        backgroundColor: vars.color.palette.purple.solid,
        color: vars.color.text.onColor,
      },
      pink: {
        backgroundColor: vars.color.palette.pink.solid,
        color: vars.color.text.onColor,
      },
      rose: {
        backgroundColor: vars.color.palette.rose.solid,
        color: vars.color.text.onColor,
      },
      gray: {
        backgroundColor: vars.color.palette.gray.solid,
        color: vars.color.text.onColor,
      },

      success: {
        backgroundColor: vars.color.semantic.success.solid,
        color: vars.color.text.onColor,
      },
      warning: {
        backgroundColor: vars.color.semantic.warning.solid,
        color: vars.color.text.onColor,
      },
      danger: {
        backgroundColor: vars.color.semantic.danger.solid,
        color: vars.color.text.onColor,
      },
      info: {
        backgroundColor: vars.color.semantic.info.solid,
        color: vars.color.text.onColor,
      },

      accent: {
        backgroundColor: vars.color.accent.solid,
        color: vars.color.text.onColor,
      },
    },

    gradient: {
      bgSubtle: {
        backgroundImage: vars.gradient.bg.subtle,
        color: vars.color.text.primary,
      },
      bgMesh: {
        backgroundImage: vars.gradient.bg.mesh,
        color: vars.color.text.primary,
      },

      accentSolid: {
        backgroundImage: vars.gradient.accent.solid,
        color: vars.color.text.onColor,
      },
      accentSoft: {
        backgroundImage: vars.gradient.accent.soft,
        color: vars.color.accent.solid,
      },
      accentGlow: {
        backgroundImage: vars.gradient.accent.glow,
        color: vars.color.accent.solid,
      },

      orange: {
        backgroundImage: vars.gradient.palette.orange,
        color: vars.color.text.onColor,
      },
      amber: {
        backgroundImage: vars.gradient.palette.amber,
        color: vars.color.text.onColor,
      },
      yellow: {
        backgroundImage: vars.gradient.palette.yellow,
        color: vars.color.text.onColor,
      },
      lime: {
        backgroundImage: vars.gradient.palette.lime,
        color: vars.color.text.onColor,
      },
      green: {
        backgroundImage: vars.gradient.palette.green,
        color: vars.color.text.onColor,
      },
      teal: {
        backgroundImage: vars.gradient.palette.teal,
        color: vars.color.text.onColor,
      },
      cyan: {
        backgroundImage: vars.gradient.palette.cyan,
        color: vars.color.text.onColor,
      },
      sky: {
        backgroundImage: vars.gradient.palette.sky,
        color: vars.color.text.onColor,
      },
      blue: {
        backgroundImage: vars.gradient.palette.blue,
        color: vars.color.text.onColor,
      },
      indigo: {
        backgroundImage: vars.gradient.palette.indigo,
        color: vars.color.text.onColor,
      },
      violet: {
        backgroundImage: vars.gradient.palette.violet,
        color: vars.color.text.onColor,
      },
      purple: {
        backgroundImage: vars.gradient.palette.purple,
        color: vars.color.text.onColor,
      },
      pink: {
        backgroundImage: vars.gradient.palette.pink,
        color: vars.color.text.onColor,
      },
      rose: {
        backgroundImage: vars.gradient.palette.rose,
        color: vars.color.text.onColor,
      },
      gray: {
        backgroundImage: vars.gradient.palette.gray,
        color: vars.color.text.onColor,
      },
    },

    border: {
      base: { border: `1px solid ${vars.color.border.base}` },
      strong: { border: `1px solid ${vars.color.border.strong}` },
      subtle: { border: `1px solid ${vars.color.border.subtle}` },
      accent: { border: `1px solid ${vars.color.accent.solid}` },
      orange: { border: `1px solid ${vars.color.palette.orange.solid}` },
      amber: { border: `1px solid ${vars.color.palette.amber.solid}` },
      yellow: { border: `1px solid ${vars.color.palette.yellow.solid}` },
      lime: { border: `1px solid ${vars.color.palette.lime.solid}` },
      green: { border: `1px solid ${vars.color.palette.green.solid}` },
      teal: { border: `1px solid ${vars.color.palette.teal.solid}` },
      cyan: { border: `1px solid ${vars.color.palette.cyan.solid}` },
      sky: { border: `1px solid ${vars.color.palette.sky.solid}` },
      blue: { border: `1px solid ${vars.color.palette.blue.solid}` },
      indigo: { border: `1px solid ${vars.color.palette.indigo.solid}` },
      violet: { border: `1px solid ${vars.color.palette.violet.solid}` },
      purple: { border: `1px solid ${vars.color.palette.purple.solid}` },
      pink: { border: `1px solid ${vars.color.palette.pink.solid}` },
      rose: { border: `1px solid ${vars.color.palette.rose.solid}` },
      gray: { border: `1px solid ${vars.color.palette.gray.solid}` },
      success: { border: `1px solid ${vars.color.semantic.success.solid}` },
      warning: { border: `1px solid ${vars.color.semantic.warning.solid}` },
      danger: { border: `1px solid ${vars.color.semantic.danger.solid}` },
      info: { border: `1px solid ${vars.color.semantic.info.solid}` },
    },

    radius: {
      none: { borderRadius: vars.radius.none },
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      pill: { borderRadius: vars.radius.pill },
    },

    shadow: {
      sm: { boxShadow: vars.shadow.sm },
      md: { boxShadow: vars.shadow.md },
      lg: { boxShadow: vars.shadow.lg },
      xl: { boxShadow: vars.shadow.xl },
      accent: { boxShadow: vars.shadow.accent },
      orange: { boxShadow: vars.shadow.palette.orange },
      amber: { boxShadow: vars.shadow.palette.amber },
      yellow: { boxShadow: vars.shadow.palette.yellow },
      lime: { boxShadow: vars.shadow.palette.lime },
      green: { boxShadow: vars.shadow.palette.green },
      teal: { boxShadow: vars.shadow.palette.teal },
      cyan: { boxShadow: vars.shadow.palette.cyan },
      sky: { boxShadow: vars.shadow.palette.sky },
      blue: { boxShadow: vars.shadow.palette.blue },
      indigo: { boxShadow: vars.shadow.palette.indigo },
      violet: { boxShadow: vars.shadow.palette.violet },
      purple: { boxShadow: vars.shadow.palette.purple },
      pink: { boxShadow: vars.shadow.palette.pink },
      rose: { boxShadow: vars.shadow.palette.rose },
      gray: { boxShadow: vars.shadow.palette.gray },
    },
  },

  defaultVariants: {
    size: 'md',
    radius: 'md',
  },
});
