import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const track = style({
  width: '100%',
  height: '3px',
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.bg.sunken,
  overflow: 'hidden',
});

export const root = recipe({
  base: {
    height: '100%',
    borderRadius: vars.radius.pill,
    transition: `width ${vars.transition.duration.base} ${vars.transition.easing.out}`,
  },
  variants: {
    color: {
      accent: { backgroundColor: vars.color.accent.solid },
      success: { backgroundColor: vars.color.semantic.success.solid },
      danger: { backgroundColor: vars.color.semantic.danger.solid },
    },
  },
  defaultVariants: {
    color: 'accent',
  },
});
