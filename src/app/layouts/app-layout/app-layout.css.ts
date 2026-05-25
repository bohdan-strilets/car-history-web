import { media, vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',

  height: '100dvh',
  width: '100%',

  backgroundColor: vars.color.bg.canvas,
  overflow: 'hidden',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  minWidth: 0,
  overflow: 'hidden',
});

export const main = style({
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: vars.spacing.md,
  paddingBottom: '64px',

  '@media': {
    [media.laptop]: {
      paddingBottom: 0,
      padding: vars.spacing['2xl'],
    },
  },
});
