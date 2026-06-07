import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    flexShrink: 0,
    border: 'none',
  },

  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        height: '1px',
      },
      vertical: {
        width: '1px',
        height: '100%',
        alignSelf: 'stretch',
      },
    },

    color: {
      base: { backgroundColor: vars.color.border.base },
      strong: { backgroundColor: vars.color.border.strong },
      subtle: { backgroundColor: vars.color.border.subtle },
      accent: { backgroundColor: vars.color.accent.solid },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
    color: 'base',
  },
});

export const withLabel = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
  border: 'none',
  backgroundColor: 'transparent',

  '::before': {
    content: '""',
    flex: 1,
    height: '1px',
    backgroundColor: vars.color.border.base,
  },

  '::after': {
    content: '""',
    flex: 1,
    height: '1px',
    backgroundColor: vars.color.border.base,
  },
});

export const labelText = style({
  fontSize: vars.typography.size.sm,
  color: vars.color.text.tertiary,
  whiteSpace: 'nowrap',
  flexShrink: 0,
});
