import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const { duration, easing } = vars.transition;

export const chevron = recipe({
  base: {
    flexShrink: 0,
    transition: `transform ${duration.fast} ${easing.inOut}`,
  },
  variants: {
    open: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

export const selectedValue = style({
  backgroundColor: vars.color.accent.soft,
  color: vars.color.accent.solid,
});
