import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

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
