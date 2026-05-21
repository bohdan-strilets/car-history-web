import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

export const content = recipe({
  base: {
    position: 'absolute',
    top: `calc(100% + ${vars.spacing.sm})`,
    zIndex: vars.zIndex.dropdown,

    minWidth: '180px',
    maxHeight: '300px',
    padding: vars.spacing.xs,

    backgroundColor: vars.color.bg.elevated,
    border: `1px solid ${vars.color.border.base}`,
    borderRadius: vars.radius.md,
    boxShadow: vars.shadow.lg,
    outline: 'none',

    overflowY: 'auto',
  },

  variants: {
    align: {
      start: { left: 0 },
      end: { right: 0 },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },
});

export const item = recipe({
  base: {
    ':hover': {
      color: vars.color.text.primary,
      backgroundColor: vars.color.bg.surface,
    },
  },

  variants: {
    selected: {
      true: {
        color: vars.color.accent.solid,
        backgroundColor: vars.color.accent.soft,
      },
    },
  },
});
