import { vars } from '@shared/styles';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Animations

const pulse1 = keyframes({
  '0%, 100%': {
    transform: 'scale(1)',
    opacity: 0.5,
    filter: 'blur(0px)',
  },
  '50%': {
    transform: 'scale(1.2)',
    opacity: 0.9,
    filter: 'blur(1px)',
  },
});

const pulse2 = keyframes({
  '0%, 100%': {
    transform: 'scale(1) translate(0, 0)',
    opacity: 0.2,
    filter: 'blur(0px)',
  },
  '50%': {
    transform: 'scale(1.2) translate(-4px, 4px)',
    opacity: 0.5,
    filter: 'blur(1px)',
  },
});

// Styles

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100%',
  width: '100%',
});

export const content = style({
  maxWidth: '580px',
  width: '100%',
  margin: '0 auto',
});

const beforeBase = {
  content: '""',
  position: 'absolute' as const,
  top: '-20%',
  right: '-20%',
  width: '66px',
  height: '66px',
  borderRadius: '50%',
  animation: `${pulse1} 4s ease-in-out infinite`,
};

const afterBase = {
  content: '""',
  position: 'absolute' as const,
  bottom: '-20%',
  left: '-20%',
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  animation: `${pulse2} 5s ease-in-out infinite 1s`,
};

export const iconWrapper = recipe({
  base: { position: 'relative' },
  variants: {
    variant: {
      default: {
        '::before': {
          ...beforeBase,
          background: `rgba(${vars.color.accent.rgb}, 0.5)`,
        },
        '::after': {
          ...afterBase,
          background: `rgba(${vars.color.accent.rgb}, 0.4)`,
        },
      },
      error: {
        '::before': {
          ...beforeBase,
          background: `rgba(${vars.color.semantic.danger.rgb}, 0.5)`,
        },
        '::after': {
          ...afterBase,
          background: `rgba(${vars.color.semantic.danger.rgb}, 0.4)`,
        },
      },
    },
  },
  defaultVariants: { variant: 'default' },
});
