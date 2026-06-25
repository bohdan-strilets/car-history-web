import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const root = style({
  display: 'flex',
  alignItems: 'stretch',

  overflow: 'hidden',
  height: '62px',
  width: 'fit-content',

  borderRadius: vars.radius.md,
  border: `2px solid #111111`,
  boxShadow: vars.shadow.sm,
});

export const countryArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '44px',
  background: '#0040AA',
});

export const numberArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  flex: 1,

  paddingInline: vars.spacing.lg,
  background: '#EBEBEB',
  color: '#111111',
});
