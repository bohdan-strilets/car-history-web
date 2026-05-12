import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xl,
  width: '100%',
});
