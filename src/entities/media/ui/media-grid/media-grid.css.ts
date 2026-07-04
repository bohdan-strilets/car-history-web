import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';
import { media } from '@shared/styles/lib';

export const grid = style({
  columnCount: 2,
  columnGap: vars.spacing.sm,

  '@media': {
    [media.tablet]: {
      columnCount: 3,
    },
    [media.laptop]: {
      columnCount: 4,
      columnGap: vars.spacing.md,
    },
  },
});

export const item = style({
  breakInside: 'avoid',
  marginBottom: vars.spacing.sm,
  display: 'inline-block',
  width: '100%',
});
