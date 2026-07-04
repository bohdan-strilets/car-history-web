import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

const { duration, easing } = vars.transition;

export const root = recipe({
  base: {
    position: 'relative',

    width: '100%',
    height: '100%',

    borderRadius: vars.radius.md,
    backgroundColor: vars.color.bg.sunken,
    boxShadow: vars.shadow.neu.raised,

    overflow: 'hidden',
    cursor: 'pointer',
  },
  variants: {
    isDeleting: {
      true: { opacity: 0.5, pointerEvents: 'none' },
      false: {},
    },
  },
  defaultVariants: {
    isDeleting: false,
  },
});

export const image = style({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export const videoBadge = style({
  position: 'absolute',
  bottom: vars.spacing.sm,
  left: vars.spacing.sm,
  zIndex: 1,
});

export const primaryBadge = style({
  position: 'absolute',
  top: vars.spacing.sm,
  left: vars.spacing.sm,
  zIndex: 1,
});

export const deleteButtonWrapper = style({
  position: 'absolute',
  top: vars.spacing.sm,
  right: vars.spacing.sm,
  zIndex: 2,

  opacity: 0,
  transition: `opacity ${duration.fast} ${easing.inOut}`,

  selectors: {
    '.mediaCard:hover &': {
      opacity: 1,
    },
  },
});
