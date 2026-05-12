import { createResponsiveStyles } from '@shared/lib/primitives';
import { vars } from '@shared/styles';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const spinCw = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const spinCcw = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(-360deg)' },
});

export const root = recipe({
  base: {
    position: 'relative',
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  variants: {
    size: {
      xs: { width: '16px', height: '16px' },
      sm: { width: '20px', height: '20px' },
      md: { width: '28px', height: '28px' },
      lg: { width: '36px', height: '36px' },
      xl: { width: '48px', height: '48px' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const ringBase = style({
  position: 'absolute',
  inset: 0,
  borderRadius: '50%',
  border: '2px solid transparent',
});

export const outerRing = recipe({
  base: [
    ringBase,
    {
      animationName: spinCw,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDuration: '1.2s',
    },
  ],

  variants: {
    color: {
      onColor: {
        borderTopColor: vars.color.text.onColor,
        borderRightColor: vars.color.text.onColor,
      },
      accent: {
        borderTopColor: vars.color.accent.solid,
        borderRightColor: vars.color.accent.soft,
      },

      success: {
        borderTopColor: vars.color.semantic.success.solid,
        borderRightColor: vars.color.semantic.success.soft,
      },
      warning: {
        borderTopColor: vars.color.semantic.warning.solid,
        borderRightColor: vars.color.semantic.warning.soft,
      },
      danger: {
        borderTopColor: vars.color.semantic.danger.solid,
        borderRightColor: vars.color.semantic.danger.soft,
      },
      info: {
        borderTopColor: vars.color.semantic.info.solid,
        borderRightColor: vars.color.semantic.info.soft,
      },

      orange: {
        borderTopColor: vars.color.palette.orange.solid,
        borderRightColor: vars.color.palette.orange.soft,
      },
      amber: {
        borderTopColor: vars.color.palette.amber.solid,
        borderRightColor: vars.color.palette.amber.soft,
      },
      yellow: {
        borderTopColor: vars.color.palette.yellow.solid,
        borderRightColor: vars.color.palette.yellow.soft,
      },
      lime: {
        borderTopColor: vars.color.palette.lime.solid,
        borderRightColor: vars.color.palette.lime.soft,
      },
      green: {
        borderTopColor: vars.color.palette.green.solid,
        borderRightColor: vars.color.palette.green.soft,
      },
      teal: {
        borderTopColor: vars.color.palette.teal.solid,
        borderRightColor: vars.color.palette.teal.soft,
      },
      cyan: {
        borderTopColor: vars.color.palette.cyan.solid,
        borderRightColor: vars.color.palette.cyan.soft,
      },
      sky: {
        borderTopColor: vars.color.palette.sky.solid,
        borderRightColor: vars.color.palette.sky.soft,
      },
      blue: {
        borderTopColor: vars.color.palette.blue.solid,
        borderRightColor: vars.color.palette.blue.soft,
      },
      indigo: {
        borderTopColor: vars.color.palette.indigo.solid,
        borderRightColor: vars.color.palette.indigo.soft,
      },
      violet: {
        borderTopColor: vars.color.palette.violet.solid,
        borderRightColor: vars.color.palette.violet.soft,
      },
      purple: {
        borderTopColor: vars.color.palette.purple.solid,
        borderRightColor: vars.color.palette.purple.soft,
      },
      pink: {
        borderTopColor: vars.color.palette.pink.solid,
        borderRightColor: vars.color.palette.pink.soft,
      },
      rose: {
        borderTopColor: vars.color.palette.rose.solid,
        borderRightColor: vars.color.palette.rose.soft,
      },
      gray: {
        borderTopColor: vars.color.palette.gray.solid,
        borderRightColor: vars.color.palette.gray.soft,
      },
    },
  },

  defaultVariants: { color: 'accent' },
});

export const innerRing = recipe({
  base: [
    ringBase,
    {
      inset: '4px',
      animationName: spinCcw,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationDuration: '0.8s',
    },
  ],

  variants: {
    color: {
      onColor: {
        borderTopColor: vars.color.text.onColor,
        borderLeftColor: vars.color.text.onColor,
      },
      accent: {
        borderTopColor: vars.color.accent.glow,
        borderLeftColor: vars.color.accent.soft,
      },
      success: {
        borderTopColor: vars.color.semantic.success.soft,
        borderLeftColor: vars.color.semantic.success.soft,
      },

      warning: {
        borderTopColor: vars.color.semantic.warning.soft,
        borderLeftColor: vars.color.semantic.warning.soft,
      },
      danger: {
        borderTopColor: vars.color.semantic.danger.soft,
        borderLeftColor: vars.color.semantic.danger.soft,
      },
      info: {
        borderTopColor: vars.color.semantic.info.soft,
        borderLeftColor: vars.color.semantic.info.soft,
      },

      orange: {
        borderTopColor: vars.color.palette.orange.soft,
        borderLeftColor: vars.color.palette.orange.soft,
      },
      amber: {
        borderTopColor: vars.color.palette.amber.soft,
        borderLeftColor: vars.color.palette.amber.soft,
      },
      yellow: {
        borderTopColor: vars.color.palette.yellow.soft,
        borderLeftColor: vars.color.palette.yellow.soft,
      },
      lime: {
        borderTopColor: vars.color.palette.lime.soft,
        borderLeftColor: vars.color.palette.lime.soft,
      },
      green: {
        borderTopColor: vars.color.palette.green.soft,
        borderLeftColor: vars.color.palette.green.soft,
      },
      teal: {
        borderTopColor: vars.color.palette.teal.soft,
        borderLeftColor: vars.color.palette.teal.soft,
      },
      cyan: {
        borderTopColor: vars.color.palette.cyan.soft,
        borderLeftColor: vars.color.palette.cyan.soft,
      },
      sky: {
        borderTopColor: vars.color.palette.sky.soft,
        borderLeftColor: vars.color.palette.sky.soft,
      },
      blue: {
        borderTopColor: vars.color.palette.blue.soft,
        borderLeftColor: vars.color.palette.blue.soft,
      },
      indigo: {
        borderTopColor: vars.color.palette.indigo.soft,
        borderLeftColor: vars.color.palette.indigo.soft,
      },
      violet: {
        borderTopColor: vars.color.palette.violet.soft,
        borderLeftColor: vars.color.palette.violet.soft,
      },
      purple: {
        borderTopColor: vars.color.palette.purple.soft,
        borderLeftColor: vars.color.palette.purple.soft,
      },
      pink: {
        borderTopColor: vars.color.palette.pink.soft,
        borderLeftColor: vars.color.palette.pink.soft,
      },
      rose: {
        borderTopColor: vars.color.palette.rose.soft,
        borderLeftColor: vars.color.palette.rose.soft,
      },
      gray: {
        borderTopColor: vars.color.palette.gray.soft,
        borderLeftColor: vars.color.palette.gray.soft,
      },
    },
  },

  defaultVariants: { color: 'accent' },
});

export const responsiveStyles = {
  size: createResponsiveStyles(
    {
      xs: '16px',
      sm: '20px',
      md: '28px',
      lg: '36px',
      xl: '48px',
    },
    (v) => ({ width: v, height: v }),
  ),
} as const;
