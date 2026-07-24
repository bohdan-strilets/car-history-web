import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

const { duration, easing } = vars.transition;

export const rootLink = style({
  width: '100%',
});

export const hovered = style({
  transition: `background-color ${duration.fast} ${easing.inOut}`,

  ':hover': {
    backgroundColor: vars.color.accent.glow,
  },
});
