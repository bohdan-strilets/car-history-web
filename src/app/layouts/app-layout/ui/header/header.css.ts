import { media, vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',

  minHeight: vars.layout.appLayout.header.height,
  width: '100%',
  padding: vars.spacing.md,

  backgroundColor: vars.color.bg.base,
  borderBottom: `1px solid ${vars.color.border.base}`,

  '@media': {
    [media.laptop]: {
      display: 'none',
    },
  },
});

export const expandedSwitcher = style({
  flex: 1,
});
