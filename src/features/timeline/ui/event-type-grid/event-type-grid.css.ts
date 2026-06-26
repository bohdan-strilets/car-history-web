import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

const pulse = keyframes({
  '0%, 100%': {
    boxShadow: `${vars.shadow.neu.raised}, 0 0 0 0 rgba(${vars.color.accent.rgb}, 0.8)`,
  },
  '50%': {
    boxShadow: `${vars.shadow.neu.raised}, 0 0 0 6px rgba(${vars.color.accent.rgb}, 0.3)`,
  },
});

export const highlighted = style({
  animationName: pulse,
  animationDuration: '2s',
  animationTimingFunction: vars.transition.easing.inOut,
  animationIterationCount: 'infinite',
});
