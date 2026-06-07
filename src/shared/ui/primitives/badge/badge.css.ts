import { recipe } from '@vanilla-extract/recipes';

import { createResponsiveStyles } from '@shared/lib';
import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.spacing.xs,
    flexShrink: 0,

    borderRadius: vars.radius.pill,

    fontFamily: vars.typography.font.body,
    fontWeight: vars.typography.weight.medium,
    lineHeight: vars.typography.height.tight,
    letterSpacing: vars.typography.spacing.wide,

    whiteSpace: 'nowrap',
    userSelect: 'none',
  },

  variants: {
    size: {
      xs: {
        height: '18px',
        paddingInline: '6px',
        fontSize: vars.typography.size.xs,
        gap: '3px',
      },
      sm: {
        height: '22px',
        paddingInline: vars.spacing.sm,
        fontSize: vars.typography.size.xs,
      },
      md: {
        height: '26px',
        paddingInline: vars.spacing.md,
        fontSize: vars.typography.size.sm,
      },
      lg: {
        height: '30px',
        paddingInline: vars.spacing.md,
        fontSize: vars.typography.size.sm,
      },
      xl: {
        height: '36px',
        paddingInline: vars.spacing.lg,
        fontSize: vars.typography.size.md,
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
      accent: { backgroundColor: vars.color.accent.soft, color: vars.color.accent.solid },
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
      accentSolid: {
        backgroundImage: vars.gradient.accent.solid,
        color: vars.color.text.onColor,
      },
      accentSoft: {
        backgroundImage: vars.gradient.accent.soft,
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
      base: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.border.base}`,
        color: vars.color.text.secondary,
      },
      strong: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.border.strong}`,
        color: vars.color.text.primary,
      },
      accent: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.accent.solid}`,
        color: vars.color.accent.solid,
      },
      orange: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.orange.solid}`,
        color: vars.color.palette.orange.solid,
      },
      amber: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.amber.solid}`,
        color: vars.color.palette.amber.solid,
      },
      yellow: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.yellow.solid}`,
        color: vars.color.palette.yellow.solid,
      },
      lime: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.lime.solid}`,
        color: vars.color.palette.lime.solid,
      },
      green: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.green.solid}`,
        color: vars.color.palette.green.solid,
      },
      teal: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.teal.solid}`,
        color: vars.color.palette.teal.solid,
      },
      cyan: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.cyan.solid}`,
        color: vars.color.palette.cyan.solid,
      },
      sky: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.sky.solid}`,
        color: vars.color.palette.sky.solid,
      },
      blue: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.blue.solid}`,
        color: vars.color.palette.blue.solid,
      },
      indigo: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.indigo.solid}`,
        color: vars.color.palette.indigo.solid,
      },
      violet: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.violet.solid}`,
        color: vars.color.palette.violet.solid,
      },
      purple: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.purple.solid}`,
        color: vars.color.palette.purple.solid,
      },
      pink: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.pink.solid}`,
        color: vars.color.palette.pink.solid,
      },
      rose: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.rose.solid}`,
        color: vars.color.palette.rose.solid,
      },
      gray: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.palette.gray.solid}`,
        color: vars.color.palette.gray.solid,
      },
      success: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.semantic.success.solid}`,
        color: vars.color.semantic.success.solid,
      },
      warning: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.semantic.warning.solid}`,
        color: vars.color.semantic.warning.solid,
      },
      danger: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.semantic.danger.solid}`,
        color: vars.color.semantic.danger.solid,
      },
      info: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.semantic.info.solid}`,
        color: vars.color.semantic.info.solid,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    soft: 'gray',
  },
});

export const responsiveStyles = {
  sizeHeight: createResponsiveStyles(
    {
      xs: '18px',
      sm: '22px',
      md: '26px',
      lg: '30px',
      xl: '36px',
    },
    (v) => ({ height: v }),
  ),
  sizePaddingInline: createResponsiveStyles(
    {
      xs: '6px',
      sm: vars.spacing.sm,
      md: vars.spacing.md,
      lg: vars.spacing.md,
      xl: vars.spacing.lg,
    },
    (v) => ({ paddingInline: v }),
  ),
  sizeFontSize: createResponsiveStyles(
    {
      xs: vars.typography.size.xs,
      sm: vars.typography.size.xs,
      md: vars.typography.size.sm,
      lg: vars.typography.size.sm,
      xl: vars.typography.size.md,
    },
    (v) => ({ fontSize: v }),
  ),
} as const;
