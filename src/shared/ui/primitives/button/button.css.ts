import { recipe } from '@vanilla-extract/recipes';

import { createResponsiveStyles } from '@shared/lib/';
import { vars } from '@shared/styles';

export const responsiveStyles = {
  size: createResponsiveStyles(vars.layout.controllerSize, (v) => ({
    height: v,
  })),
};

const { duration, easing } = vars.transition;
const fastInOut = `${duration.fast} ${easing.inOut}`;

export const root = recipe({
  base: {
    position: 'relative',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.spacing.sm,
    flexShrink: 0,

    fontFamily: vars.typography.font.body,
    fontWeight: vars.typography.weight.medium,
    letterSpacing: vars.typography.spacing.wide,
    textDecoration: 'none',
    whiteSpace: 'nowrap',

    border: 'none',

    cursor: 'pointer',
    userSelect: 'none',
    transition: `
      background-color ${fastInOut},
      color ${fastInOut},
      border-color ${fastInOut},
      box-shadow ${fastInOut},
      opacity ${fastInOut},
      filter ${fastInOut}
    `,

    selectors: {
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },

      '&:active': {
        transform: 'translateY(0.99px)',
      },
    },
  },

  variants: {
    size: {
      sm: {
        height: vars.layout.controllerSize.sm,
        paddingInline: vars.spacing.md,
        fontSize: vars.typography.size.sm,
        borderRadius: vars.radius.sm,
      },
      md: {
        height: vars.layout.controllerSize.md,
        paddingInline: vars.spacing.lg,
        fontSize: vars.typography.size.md,
        borderRadius: vars.radius.md,
      },
      lg: {
        height: vars.layout.controllerSize.lg,
        paddingInline: vars.spacing.xl,
        fontSize: vars.typography.size.lg,
        borderRadius: vars.radius.lg,
      },
      xl: {
        height: vars.layout.controllerSize.xl,
        paddingInline: vars.spacing['2xl'],
        fontSize: vars.typography.size.xl,
        borderRadius: vars.radius.lg,
      },
    },

    variant: {
      solid: {},
      soft: {},
      outline: { backgroundColor: 'transparent' },
      ghost: { backgroundColor: 'transparent', border: 'none' },
    },

    color: {
      accent: {},
      success: {},
      warning: {},
      danger: {},
      info: {},

      orange: {},
      amber: {},
      yellow: {},
      lime: {},
      green: {},
      teal: {},
      cyan: {},
      sky: {},
      blue: {},
      indigo: {},
      violet: {},
      purple: {},
      pink: {},
      rose: {},
      gray: {},
    },

    radius: {
      none: { borderRadius: vars.radius.none },
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      pill: { borderRadius: vars.radius.pill },
    },

    fullWidth: {
      true: { width: '100%' },
    },

    iconOnly: {
      true: { paddingInline: 0 },
    },
  },

  compoundVariants: [
    // Solid
    {
      variants: { variant: 'solid', color: 'accent' },
      style: {
        backgroundColor: vars.color.accent.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.accent,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'success' },
      style: {
        backgroundColor: vars.color.semantic.success.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.green,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'warning' },
      style: {
        backgroundColor: vars.color.semantic.warning.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.amber,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'danger' },
      style: {
        backgroundColor: vars.color.semantic.danger.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.rose,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'info' },
      style: {
        backgroundColor: vars.color.semantic.info.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.sky,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'orange' },
      style: {
        backgroundColor: vars.color.palette.orange.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.orange,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'amber' },
      style: {
        backgroundColor: vars.color.palette.amber.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.amber,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'yellow' },
      style: {
        backgroundColor: vars.color.palette.yellow.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.yellow,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'lime' },
      style: {
        backgroundColor: vars.color.palette.lime.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.lime,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'green' },
      style: {
        backgroundColor: vars.color.palette.green.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.green,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'teal' },
      style: {
        backgroundColor: vars.color.palette.teal.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.teal,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'cyan' },
      style: {
        backgroundColor: vars.color.palette.cyan.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.cyan,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'sky' },
      style: {
        backgroundColor: vars.color.palette.sky.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.sky,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'blue' },
      style: {
        backgroundColor: vars.color.palette.blue.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.blue,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'indigo' },
      style: {
        backgroundColor: vars.color.palette.indigo.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.indigo,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'violet' },
      style: {
        backgroundColor: vars.color.palette.violet.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.violet,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'purple' },
      style: {
        backgroundColor: vars.color.palette.purple.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.purple,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'pink' },
      style: {
        backgroundColor: vars.color.palette.pink.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.pink,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'rose' },
      style: {
        backgroundColor: vars.color.palette.rose.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.rose,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'solid', color: 'gray' },
      style: {
        backgroundColor: vars.color.palette.gray.solid,
        color: vars.color.text.onColor,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.gray,
            filter: 'brightness(0.88)',
          },
        },
      },
    },

    // Soft
    {
      variants: { variant: 'soft', color: 'accent' },
      style: {
        backgroundColor: vars.color.accent.soft,
        color: vars.color.accent.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.accent,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'success' },
      style: {
        backgroundColor: vars.color.semantic.success.soft,
        color: vars.color.semantic.success.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.green,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'warning' },
      style: {
        backgroundColor: vars.color.semantic.warning.soft,
        color: vars.color.semantic.warning.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.amber,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'danger' },
      style: {
        backgroundColor: vars.color.semantic.danger.soft,
        color: vars.color.semantic.danger.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.rose,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'info' },
      style: {
        backgroundColor: vars.color.semantic.info.soft,
        color: vars.color.semantic.info.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.sky,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'orange' },
      style: {
        backgroundColor: vars.color.palette.orange.soft,
        color: vars.color.palette.orange.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.orange,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'amber' },
      style: {
        backgroundColor: vars.color.palette.amber.soft,
        color: vars.color.palette.amber.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.amber,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'yellow' },
      style: {
        backgroundColor: vars.color.palette.yellow.soft,
        color: vars.color.palette.yellow.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.yellow,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'lime' },
      style: {
        backgroundColor: vars.color.palette.lime.soft,
        color: vars.color.palette.lime.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.lime,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'green' },
      style: {
        backgroundColor: vars.color.palette.green.soft,
        color: vars.color.palette.green.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.green,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'teal' },
      style: {
        backgroundColor: vars.color.palette.teal.soft,
        color: vars.color.palette.teal.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.teal,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'cyan' },
      style: {
        backgroundColor: vars.color.palette.cyan.soft,
        color: vars.color.palette.cyan.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.cyan,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'sky' },
      style: {
        backgroundColor: vars.color.palette.sky.soft,
        color: vars.color.palette.sky.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.sky,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'blue' },
      style: {
        backgroundColor: vars.color.palette.blue.soft,
        color: vars.color.palette.blue.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.blue,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'indigo' },
      style: {
        backgroundColor: vars.color.palette.indigo.soft,
        color: vars.color.palette.indigo.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.indigo,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'violet' },
      style: {
        backgroundColor: vars.color.palette.violet.soft,
        color: vars.color.palette.violet.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.violet,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'purple' },
      style: {
        backgroundColor: vars.color.palette.purple.soft,
        color: vars.color.palette.purple.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.purple,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'pink' },
      style: {
        backgroundColor: vars.color.palette.pink.soft,
        color: vars.color.palette.pink.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.pink,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'rose' },
      style: {
        backgroundColor: vars.color.palette.rose.soft,
        color: vars.color.palette.rose.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.rose,
            filter: 'brightness(0.88)',
          },
        },
      },
    },
    {
      variants: { variant: 'soft', color: 'gray' },
      style: {
        backgroundColor: vars.color.palette.gray.soft,
        color: vars.color.palette.gray.solid,

        selectors: {
          '&:hover': {
            boxShadow: vars.shadow.palette.gray,
            filter: 'brightness(0.88)',
          },
        },
      },
    },

    // Outline
    {
      variants: { variant: 'outline', color: 'accent' },
      style: {
        border: `1px solid ${vars.color.accent.solid}`,
        color: vars.color.accent.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.accent.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'success' },
      style: {
        border: `1px solid ${vars.color.semantic.success.solid}`,
        color: vars.color.semantic.success.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.green.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'warning' },
      style: {
        border: `1px solid ${vars.color.semantic.warning.solid}`,
        color: vars.color.semantic.warning.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.amber.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'danger' },
      style: {
        border: `1px solid ${vars.color.semantic.danger.solid}`,
        color: vars.color.semantic.danger.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.rose.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'info' },
      style: {
        border: `1px solid ${vars.color.semantic.info.solid}`,
        color: vars.color.semantic.info.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.sky.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'orange' },
      style: {
        border: `1px solid ${vars.color.palette.orange.solid}`,
        color: vars.color.palette.orange.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.orange.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'amber' },
      style: {
        border: `1px solid ${vars.color.palette.amber.solid}`,
        color: vars.color.palette.amber.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.amber.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'yellow' },
      style: {
        border: `1px solid ${vars.color.palette.yellow.solid}`,
        color: vars.color.palette.yellow.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.yellow.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'lime' },
      style: {
        border: `1px solid ${vars.color.palette.lime.solid}`,
        color: vars.color.palette.lime.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.lime.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'green' },
      style: {
        border: `1px solid ${vars.color.palette.green.solid}`,
        color: vars.color.palette.green.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.green.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'teal' },
      style: {
        border: `1px solid ${vars.color.palette.teal.solid}`,
        color: vars.color.palette.teal.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.teal.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'cyan' },
      style: {
        border: `1px solid ${vars.color.palette.cyan.solid}`,
        color: vars.color.palette.cyan.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.cyan.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'sky' },
      style: {
        border: `1px solid ${vars.color.palette.sky.solid}`,
        color: vars.color.palette.sky.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.sky.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'blue' },
      style: {
        border: `1px solid ${vars.color.palette.blue.solid}`,
        color: vars.color.palette.blue.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.blue.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'indigo' },
      style: {
        border: `1px solid ${vars.color.palette.indigo.solid}`,
        color: vars.color.palette.indigo.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.indigo.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'violet' },
      style: {
        border: `1px solid ${vars.color.palette.violet.solid}`,
        color: vars.color.palette.violet.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.violet.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'purple' },
      style: {
        border: `1px solid ${vars.color.palette.purple.solid}`,
        color: vars.color.palette.purple.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.purple.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'pink' },
      style: {
        border: `1px solid ${vars.color.palette.pink.solid}`,
        color: vars.color.palette.pink.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.pink.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'rose' },
      style: {
        border: `1px solid ${vars.color.palette.rose.solid}`,
        color: vars.color.palette.rose.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.rose.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },
    {
      variants: { variant: 'outline', color: 'gray' },
      style: {
        border: `1px solid ${vars.color.palette.gray.solid}`,
        color: vars.color.palette.gray.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.gray.solid,
            color: vars.color.text.onColor,
          },
        },
      },
    },

    // Ghost
    {
      variants: { variant: 'ghost', color: 'accent' },
      style: {
        color: vars.color.accent.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.accent.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'success' },
      style: {
        color: vars.color.semantic.success.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.green.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'warning' },
      style: {
        color: vars.color.semantic.warning.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.amber.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'danger' },
      style: {
        color: vars.color.semantic.danger.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.rose.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'info' },
      style: {
        color: vars.color.semantic.info.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.sky.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'orange' },
      style: {
        color: vars.color.palette.orange.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.orange.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'amber' },
      style: {
        color: vars.color.palette.amber.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.amber.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'yellow' },
      style: {
        color: vars.color.palette.yellow.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.yellow.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'lime' },
      style: {
        color: vars.color.palette.lime.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.lime.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'green' },
      style: {
        color: vars.color.palette.green.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.green.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'teal' },
      style: {
        color: vars.color.palette.teal.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.teal.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'cyan' },
      style: {
        color: vars.color.palette.cyan.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.cyan.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'sky' },
      style: {
        color: vars.color.palette.sky.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.sky.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'blue' },
      style: {
        color: vars.color.palette.blue.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.blue.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'indigo' },
      style: {
        color: vars.color.palette.indigo.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.indigo.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'violet' },
      style: {
        color: vars.color.palette.violet.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.violet.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'purple' },
      style: {
        color: vars.color.palette.purple.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.purple.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'pink' },
      style: {
        color: vars.color.palette.pink.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.pink.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'rose' },
      style: {
        color: vars.color.palette.rose.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.rose.soft,
          },
        },
      },
    },
    {
      variants: { variant: 'ghost', color: 'gray' },
      style: {
        color: vars.color.palette.gray.solid,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.gray.soft,
          },
        },
      },
    },

    // IconOnly sizes
    {
      variants: { iconOnly: true, size: 'sm' },
      style: { width: vars.layout.controllerSize.sm, paddingInline: 0 },
    },
    {
      variants: { iconOnly: true, size: 'md' },
      style: { width: vars.layout.controllerSize.md, paddingInline: 0 },
    },
    {
      variants: { iconOnly: true, size: 'lg' },
      style: { width: vars.layout.controllerSize.lg, paddingInline: 0 },
    },
    {
      variants: { iconOnly: true, size: 'xl' },
      style: { width: vars.layout.controllerSize.xl, paddingInline: 0 },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    color: 'accent',
    size: 'md',
  },
});
