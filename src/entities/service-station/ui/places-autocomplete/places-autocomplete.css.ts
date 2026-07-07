import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const suggestionItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  width: '100%',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  borderRadius: vars.radius.sm,
  textAlign: 'left',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.bg.sunken,
    },
  },
});

export const loadingWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  padding: vars.spacing.lg,
});

export const emptyWrapper = style({
  padding: vars.spacing.lg,
});
