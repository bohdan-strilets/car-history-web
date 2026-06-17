import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { media, vars } from '@shared/styles';

const { duration, easing } = vars.transition;

const scaleIn = keyframes({
  from: { opacity: 0, transform: 'scale(0.8)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

export const fab = recipe({
  base: {
    position: 'fixed',
    bottom: `calc(${vars.spacing['xl']} + ${vars.layout.appLayout.bottomNav.height})`,
    right: vars.spacing['3xl'],
    zIndex: vars.zIndex.sticky,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.spacing.sm,

    border: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    flexShrink: 0,

    background: vars.color.accent.solid,
    color: vars.color.text.onColor,
    boxShadow: vars.shadow.accent,

    transition: [
      `transform ${duration.base} ${easing.spring}`,
      `box-shadow ${duration.base} ${easing.inOut}`,
      `opacity ${duration.base} ${easing.inOut}`,
    ].join(', '),

    animationName: scaleIn,
    animationDuration: vars.transition.duration.slow,
    animationTimingFunction: vars.transition.easing.spring,
    animationFillMode: 'both',

    ':hover': {
      transform: 'scale(1.06)',
      boxShadow: `${vars.shadow.accent}, 0 8px 32px rgba(${vars.color.accent.rgb}, 0.5)`,
    },

    ':active': {
      transform: 'scale(0.96)',
      boxShadow: vars.shadow.accent,
    },

    ':disabled': {
      opacity: 0.4,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },

    '@media': {
      [media.laptop]: {
        bottom: vars.spacing['3xl'],
      },
    },
  },

  variants: {
    size: {
      md: {
        width: vars.layout.iconBoxSize.lg,
        height: vars.layout.iconBoxSize.lg,
        borderRadius: vars.radius.lg,
      },
      lg: {
        width: vars.layout.iconBoxSize.xl,
        height: vars.layout.iconBoxSize.xl,
        borderRadius: vars.radius.xl,
      },
    },

    extended: {
      true: {
        width: 'auto',
        borderRadius: vars.radius.pill,
        paddingInline: vars.spacing['2xl'],
      },
      false: {},
    },

    visible: {
      true: { opacity: 1, pointerEvents: 'auto' },
      false: { opacity: 0, pointerEvents: 'none', transform: 'scale(0.8)' },
    },
  },

  defaultVariants: {
    size: 'md',
    extended: false,
    visible: true,
  },
});
