import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

// Constants

const { duration, easing } = vars.transition;
const slowInOut = `${duration.slow} ${easing.inOut}`;

// Animations

const shimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

// Styles

export const segments = style({
  display: 'flex',
  gap: vars.spacing.sm,
  width: '100%',
});

export const segment = recipe({
  base: {
    flex: 1,
    borderRadius: vars.radius.pill,
    backgroundColor: vars.color.border.base,
    overflow: 'hidden',
  },
  variants: {
    size: {
      sm: { height: '3px' },
      md: { height: '5px' },
      lg: { height: '8px' },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export const segmentFill = recipe({
  base: {
    height: '100%',
    width: '0%',

    borderRadius: vars.radius.pill,
    transition: `width ${slowInOut}`,
  },

  variants: {
    active: {
      true: { width: '100%' },
    },
    color: {
      accent: { backgroundColor: vars.color.accent.solid },
      amber: { backgroundColor: vars.color.palette.amber.solid },
      blue: { backgroundColor: vars.color.palette.blue.solid },
      cyan: { backgroundColor: vars.color.palette.cyan.solid },
      gray: { backgroundColor: vars.color.palette.gray.solid },
      green: { backgroundColor: vars.color.palette.green.solid },
      indigo: { backgroundColor: vars.color.palette.indigo.solid },
      lime: { backgroundColor: vars.color.palette.lime.solid },
      orange: { backgroundColor: vars.color.palette.orange.solid },
      pink: { backgroundColor: vars.color.palette.pink.solid },
      purple: { backgroundColor: vars.color.palette.purple.solid },
      rose: { backgroundColor: vars.color.palette.rose.solid },
      sky: { backgroundColor: vars.color.palette.sky.solid },
      teal: { backgroundColor: vars.color.palette.teal.solid },
      violet: { backgroundColor: vars.color.palette.violet.solid },
      yellow: { backgroundColor: vars.color.palette.yellow.solid },
    },
    current: {
      true: {
        width: '100%',
        position: 'relative',
        overflow: 'hidden',

        '::after': {
          content: '',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)`,
          transform: 'translateX(-100%)',
          animation: `${shimmer} 1.5s infinite`,
        },
      },
    },
  },

  defaultVariants: {
    color: 'accent',
  },
});
