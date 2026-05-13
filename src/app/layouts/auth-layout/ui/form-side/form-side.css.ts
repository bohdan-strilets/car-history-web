import { media, vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  flex: 1,
  height: '100%',
});

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3xl'],

  width: '100%',
  maxWidth: '400px',
});

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',

  '@media': {
    [media.laptop]: {
      display: 'none',
    },
  },
});
