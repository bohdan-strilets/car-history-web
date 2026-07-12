import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: vars.spacing.lg,
});

export const messagesArea = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  paddingRight: vars.spacing.sm,
});

export const inputArea = style({
  paddingTop: vars.spacing.md,
  borderTop: `1px solid ${vars.color.border.subtle}`,
});
