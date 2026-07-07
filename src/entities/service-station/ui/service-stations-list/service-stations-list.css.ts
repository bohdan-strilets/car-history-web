import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';
import { media } from '@shared/styles/lib';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: vars.spacing.md,

  '@media': {
    [media.tablet]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [media.laptop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});
