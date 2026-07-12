import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const wrapper = style({
  display: 'flex',
  alignItems: 'flex-end',
  gap: vars.spacing.md,
  width: '100%',
});

export const textareaWrapper = style({
  flex: 1,
});
