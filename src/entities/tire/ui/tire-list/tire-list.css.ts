import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';
import { media } from '@shared/styles/lib';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing.sm,

  '@media': {
    [media.tablet]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [media.laptop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});
