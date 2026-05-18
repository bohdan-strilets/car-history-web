import { media, vars } from '@shared/styles';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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

export const segment = style({
  flex: 1,

  overflow: 'hidden',
  height: '4px',

  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.border.base,

  '@media': {
    [media.tablet]: {
      height: '6px',
    },
    [media.laptop]: {
      height: '8px',
    },
  },
});

export const segmentFill = recipe({
  base: {
    borderRadius: vars.radius.pill,
    backgroundColor: vars.color.accent.solid,

    height: '100%',
    width: '0%',

    transition: `width ${slowInOut}`,
  },

  variants: {
    active: {
      true: { width: '100%' },
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
});
