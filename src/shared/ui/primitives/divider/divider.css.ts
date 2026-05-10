import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

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
