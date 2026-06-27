import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

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

export const triggerWrapper = style({
  outline: 'none',
  borderRadius: vars.radius.md,
});

export const content = recipe({
  base: {
    minWidth: '220px',
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
