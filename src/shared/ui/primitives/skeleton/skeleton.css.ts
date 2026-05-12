import { vars } from '@shared/styles';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

export const root = recipe({
  base: {
    display: 'block',
    flexShrink: 0,
    backgroundImage: `linear-gradient(
      90deg,
      ${vars.color.bg.elevated} 25%,
      ${vars.color.border.strong} 50%,
      ${vars.color.bg.elevated} 75%
    )`,
    backgroundSize: '200% 100%',
    animationName: shimmer,
    animationDuration: '4.5s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },

  variants: {
    variant: {
      rect: { borderRadius: vars.radius.sm },
      circle: { borderRadius: vars.radius.pill },
      text: { borderRadius: vars.radius.sm, height: '1em' },
    },
  },

  defaultVariants: {
    variant: 'rect',
  },
});

export const textLine = style({
  display: 'block',
  width: '100%',
});
