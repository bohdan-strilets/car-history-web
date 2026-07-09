import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const item = style({
  breakInside: 'avoid',
  marginBottom: vars.spacing.sm,
  display: 'inline-block',
  width: '100%',
});
