import { style } from '@vanilla-extract/css';

import { breakpoints, vars } from '@shared/styles';

export const wrapper = style({
  minHeight: '100vh',
  backgroundColor: vars.color.bg.canvas,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  maxWidth: breakpoints.desktop,
  height: '100%',
  margin: '0 auto',
  padding: vars.spacing['3xl'],
});
