import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { media, vars } from '@shared/styles';

const { duration, easing } = vars.transition;
const slowInOut = `${duration.slow} ${easing.inOut}`;

export const root = recipe({
  base: {
    display: 'none',

    width: vars.layout.appLayout.sidebar.collapsedWidth,
    height: '100%',
    padding: vars.spacing.md,

    backgroundColor: vars.color.bg.base,
    borderRight: `1px solid ${vars.color.border.base}`,

    overflow: 'hidden',
    transition: `width ${slowInOut}`,

    '@media': {
      [media.laptop]: {
        display: 'flex',
      },
    },
  },

  variants: {
    expanded: {
      true: {
        width: vars.layout.appLayout.sidebar.expandedWidth,
        alignItems: 'stretch',
      },
    },
  },
});

export const spacer = style({
  flex: 1,
});
