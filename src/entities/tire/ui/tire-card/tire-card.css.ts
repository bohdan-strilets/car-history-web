import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
  padding: vars.spacing.lg,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.bg.surface,
  boxShadow: vars.shadow.neu.raised,
  cursor: 'pointer',
});

export const header = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
});

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  minWidth: 0,
});

export const size = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.spacing.sm,
});

export const deleteButtonWrapper = style({
  cursor: 'pointer',
});
