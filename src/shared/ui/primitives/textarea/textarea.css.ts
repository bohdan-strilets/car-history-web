import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

const { duration, easing } = vars.transition;
const fastTransition = `${duration.fast} ${easing.inOut}`;

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',

    borderRadius: vars.radius.md,
    border: '3px solid transparent',
    backgroundColor: vars.color.bg.sunken,
    color: vars.color.text.primary,
    boxShadow: vars.shadow.neu.inset,

    fontFamily: vars.typography.font.body,
    fontWeight: vars.typography.weight.regular,

    transition: `box-shadow ${fastTransition}, background-color ${fastTransition}`,

    selectors: {
      '&:focus-within': {
        boxShadow: `${vars.shadow.neu.insetSm}, 0 0 0 3px ${vars.color.accent.soft}`,
      },
      '&:hover:not(:focus-within)': {
        boxShadow: `${vars.shadow.neu.inset}, 0 0 0 3px ${vars.color.border.subtle}`,
      },
    },
  },

  variants: {
    size: {
      sm: {
        padding: vars.spacing.md,
        fontSize: vars.typography.size.sm,
      },
      md: {
        padding: vars.spacing.lg,
        fontSize: vars.typography.size.md,
      },
      lg: {
        padding: vars.spacing.xl,
        fontSize: vars.typography.size.lg,
      },
    },

    resize: {
      none: { resize: 'none' },
      vertical: { resize: 'vertical' },
      both: { resize: 'both' },
    },

    state: {
      default: {},
      error: {
        selectors: {
          '&, &:hover:not(:focus-within)': {
            boxShadow: `${vars.shadow.neu.inset}, 0 0 0 3px ${vars.color.semantic.danger.soft}`,
          },
          '&:focus-within': {
            boxShadow: `${vars.shadow.neu.insetSm}, 0 0 0 3px ${vars.color.semantic.danger.soft}`,
          },
        },
      },
      success: {
        selectors: {
          '&, &:hover:not(:focus-within)': {
            boxShadow: `${vars.shadow.neu.inset}, 0 0 0 3px ${vars.color.semantic.success.soft}`,
          },
          '&:focus-within': {
            boxShadow: `${vars.shadow.neu.insetSm}, 0 0 0 3px ${vars.color.semantic.success.soft}`,
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
    resize: 'vertical',
    state: 'default',
  },
});

export const nativeTextarea = recipe({
  base: {
    flex: 1,
    minWidth: 0,
    width: '100%',

    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'inherit',

    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: vars.typography.height.relaxed,

    selectors: {
      '&::placeholder': {
        color: vars.color.text.tertiary,
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },
});
