import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const input = style({
  fontSize: vars.typography.size['6xl'],
  fontWeight: vars.typography.weight.bold,
  fontFamily: vars.typography.font.display,

  lineHeight: 1,
  textAlign: 'center',

  color: vars.color.text.primary,
  cursor: 'text',
});
