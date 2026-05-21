import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

const { duration, easing } = vars.transition;

export const root = recipe({
  base: {
    flexShrink: 0,
    transition: `transform ${duration.fast} ${easing.inOut}`,
  },
  variants: {
    open: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});
