import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'fixed',
  inset: 0,

  backgroundColor: vars.color.bg.overlay,
  backdropFilter: 'blur(2px)',

  zIndex: vars.zIndex.overlay,
});
