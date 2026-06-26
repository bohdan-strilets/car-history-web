import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    position: 'fixed',
    inset: 0,

    display: 'flex',
    justifyContent: 'center',

    pointerEvents: 'none',
  },

  variants: {
    centered: {
      true: {
        alignItems: 'center',
        padding: vars.spacing.lg,
      },
    },
    bottom: {
      true: {
        alignItems: 'flex-end',
      },
    },
  },
});

export const modal = recipe({
  base: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',

    width: '100%',

    backgroundColor: vars.color.bg.elevated,
    border: `1px solid ${vars.color.border.base}`,
    boxShadow: vars.shadow.xl,

    overflow: 'hidden',
    pointerEvents: 'all',
  },

  variants: {
    centered: {
      true: {
        maxWidth: vars.layout.contentWidth.modal,
        maxHeight: '90vh',

        borderRadius: vars.radius.lg,
      },
    },
    bottom: {
      true: {
        maxWidth: vars.layout.contentWidth.modal,
        maxHeight: '92dvh',

        borderBottom: 'none',
        borderTopRightRadius: vars.radius.lg,
        borderTopLeftRadius: vars.radius.lg,

        overflow: 'hidden',
      },
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  gap: vars.spacing.md,

  padding: vars.spacing.lg,

  borderBottom: `1px solid ${vars.color.border.base}`,
});

export const body = style({
  flex: 1,
  overflowY: 'auto',
  padding: vars.spacing.xl,
});

// Base bottom modal

export const handle = style({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: vars.spacing.md,
  paddingBottom: vars.spacing.xs,
  flexShrink: 0,
});

export const handleBar = style({
  width: '36px',
  height: '4px',
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.border.strong,
});
