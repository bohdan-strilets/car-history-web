import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const root = style({
  position: 'relative',
  display: 'inline-flex',
});

export const content = recipe({
  base: {
    position: 'absolute',
    top: `calc(100% + ${vars.spacing.xs})`,
    zIndex: vars.zIndex.dropdown,

    minWidth: '180px',
    padding: vars.spacing.xs,

    backgroundColor: vars.color.bg.elevated,
    border: `1px solid ${vars.color.border.base}`,
    borderRadius: vars.radius.md,
    boxShadow: vars.shadow.lg,
    outline: 'none',
  },

  variants: {
    align: {
      start: {
        left: 0,
      },
      end: {
        right: 0,
      },
    },
  },
});

export const item = style({
  ':hover': {
    color: vars.color.text.primary,
    backgroundColor: vars.color.bg.surface,
  },
});
