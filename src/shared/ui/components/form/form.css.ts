import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  width: '100%',
});
