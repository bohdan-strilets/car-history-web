import { style } from '@vanilla-extract/css';

import { media, vars } from '@shared/styles';

export const root = style({
  display: 'flex',

  height: vars.layout.appLayout.bottomNav.height,
  width: '100%',
  paddingInline: vars.spacing.md,

  backgroundColor: vars.color.bg.base,
  borderTop: `1px solid ${vars.color.border.base}`,

  '@media': {
    [media.laptop]: {
      display: 'none',
    },
  },
});
