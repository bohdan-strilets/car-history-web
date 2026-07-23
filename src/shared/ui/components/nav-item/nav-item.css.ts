import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

const { duration, easing } = vars.transition;
const fastInOut = `${duration.fast} ${easing.inOut}`;

export const rootLink = style({
  borderRadius: vars.radius.md,
  width: '100%',
  display: 'block',

  transition: `color ${fastInOut}, background-color ${fastInOut}`,

  ':hover': {
    color: vars.color.text.primary,
    backgroundColor: vars.color.accent.soft,
  },
});
