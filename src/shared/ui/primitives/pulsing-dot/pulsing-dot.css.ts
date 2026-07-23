import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

const pulse = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 0.6,
  },
  '100%': {
    transform: 'scale(2.4)',
    opacity: 0,
  },
});

const base = style({
  position: 'relative',
  display: 'inline-block',
  flexShrink: 0,
  borderRadius: vars.radius.pill,
  backgroundColor: 'currentColor',

  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: 'inherit',
      backgroundColor: 'currentColor',
    },
  },
});

export const root = recipe({
  base,

  variants: {
    size: {
      xs: { width: '8px', height: '8px' },
      sm: { width: '10px', height: '10px' },
      md: { width: '12px', height: '12px' },
      lg: { width: '16px', height: '16px' },
      xl: { width: '20px', height: '20px' },
    },

    color: {
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

    isPulsing: {
      true: {
        selectors: {
          '&::after': {
            animation: `${pulse} 1.8s ${vars.transition.easing.out} infinite`,
          },
        },
      },
      false: {
        selectors: {
          '&::after': {
            display: 'none',
          },
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    isPulsing: true,
  },
});
