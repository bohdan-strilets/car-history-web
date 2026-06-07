import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

const { duration, easing } = vars.transition;
const fastTransition = `${duration.fast} ${easing.inOut}`;

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative',
    cursor: 'pointer',

    borderRadius: vars.radius.sm,
    backgroundColor: vars.color.bg.sunken,
    boxShadow: vars.shadow.neu.insetSm,

    transition: `box-shadow ${fastTransition}, background-color ${fastTransition}`,

    selectors: {
      '&:hover': {
        boxShadow: `${vars.shadow.neu.insetSm}, 0 0 0 3px ${vars.color.border.subtle}`,
      },
      '&:has(input:checked), &:has(input:indeterminate)': {
        backgroundColor: vars.color.accent.solid,
        boxShadow: vars.shadow.sm,
      },
      '&:has(input:checked):hover, &:has(input:indeterminate):hover': {
        backgroundColor: vars.color.accent.solid,
      },
    },
  },

  variants: {
    size: {
      sm: { width: '20px', height: '20px' },
      md: { width: '24px', height: '24px' },
      lg: { width: '28px', height: '28px' },
    },

    state: {
      default: {},
      error: {
        selectors: {
          '&, &:hover': {
            boxShadow: `${vars.shadow.neu.inset}, 0 0 0 3px ${vars.color.semantic.danger.soft}`,
          },
        },
      },
      disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    state: 'default',
  },
});

export const nativeInput = style({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  margin: 0,
  cursor: 'inherit',
  width: '100%',
  height: '100%',
});

export const iconSlot = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.text.onColor,
  pointerEvents: 'none',
});

export const wrapper = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  cursor: 'pointer',

  selectors: {
    '&:has(input:disabled)': {
      cursor: 'not-allowed',
    },
  },
});

export const labelText = recipe({
  base: {
    fontFamily: vars.typography.font.body,
    fontWeight: vars.typography.weight.regular,
    color: vars.color.text.primary,
    userSelect: 'none',
  },

  variants: {
    size: {
      sm: { fontSize: vars.typography.size.sm },
      md: { fontSize: vars.typography.size.md },
      lg: { fontSize: vars.typography.size.lg },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
