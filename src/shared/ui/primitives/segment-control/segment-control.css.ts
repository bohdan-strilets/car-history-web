import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const { duration, easing } = vars.transition;
const baseInOut = `${duration.base} ${easing.inOut}`;

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.xs,

  padding: vars.spacing.xs,

  backgroundColor: vars.color.bg.sunken,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.neu.insetSm,
});

export const option = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: 'none',
    borderRadius: vars.radius.sm,
    backgroundColor: 'transparent',
    color: vars.color.text.tertiary,

    cursor: 'pointer',
    transition: `all ${baseInOut}`,

    ':hover': {
      color: vars.color.text.secondary,
    },
  },

  variants: {
    size: {
      sm: { width: '30px', height: '30px' },
      md: { width: '36px', height: '36px' },
      lg: { width: '44px', height: '44px' },
    },
    active: {
      true: {
        backgroundColor: vars.color.bg.elevated,
        boxShadow: vars.shadow.neu.raised,
        color: vars.color.text.primary,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
