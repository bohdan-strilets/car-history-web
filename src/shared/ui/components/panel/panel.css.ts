import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

const { duration, easing } = vars.transition;
const baseInOut = `${duration.base} ${easing.inOut}`;

export const root = recipe({
  base: {
    width: '100%',
    height: '100%',
  },

  variants: {
    hoverable: {
      true: {
        cursor: 'pointer',
        transition: `box-shadow ${baseInOut}, transform ${baseInOut}`,

        ':hover': {
          boxShadow: vars.shadow.neu.raisedLg,
          transform: 'translateY(-1px)',
        },

        ':active': {
          transform: 'translateY(0)',
        },
      },
    },

    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },
});
