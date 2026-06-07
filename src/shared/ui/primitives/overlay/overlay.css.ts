import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  position: 'fixed',
  inset: 0,

  backgroundColor: vars.color.bg.overlay,
  backdropFilter: 'blur(2px)',

  zIndex: vars.zIndex.overlay,
});
