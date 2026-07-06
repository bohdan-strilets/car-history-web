import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
  padding: vars.spacing.sm,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.bg.surface,
});

export const rowLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const rowRight = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '2px',
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
});
