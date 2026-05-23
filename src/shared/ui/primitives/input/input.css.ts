import { createResponsiveStyles } from '@shared/lib/primitives';
import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

const { duration, easing } = vars.transition;
const fastTransition = `${duration.fast} ${easing.inOut}`;

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: vars.spacing.sm,

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
        height: vars.layout.controllerSize.sm,
        fontSize: vars.typography.size.sm,
      },
      md: {
        height: vars.layout.controllerSize.md,
        fontSize: vars.typography.size.md,
      },
      lg: {
        height: vars.layout.controllerSize.lg,
        fontSize: vars.typography.size.lg,
      },
      xl: {
        height: vars.layout.controllerSize.xl,
        fontSize: vars.typography.size.xl,
      },
    },

    hasLeftIcon: {
      true: { paddingInlineStart: vars.spacing.sm },
      false: {},
    },

    hasRightIcon: {
      true: { paddingInlineEnd: vars.spacing.sm },
      false: {},
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
    state: 'default',
    hasLeftIcon: false,
    hasRightIcon: false,
  },
});

export const nativeInput = recipe({
  base: {
    flex: 1,
    alignSelf: 'stretch',
    minWidth: 0,

    background: 'none',
    border: 'none',
    outline: 'none',
    color: 'inherit',

    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: vars.typography.height.normal,

    selectors: {
      '&::placeholder': {
        color: vars.color.text.tertiary,
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    size: {
      sm: { paddingInline: vars.spacing.md },
      md: { paddingInline: vars.spacing.lg },
      lg: { paddingInline: vars.spacing.xl },
      xl: { paddingInline: vars.spacing.xl },
    },
    hasLeftIcon: {
      true: { paddingInlineStart: 0 },
      false: {},
    },
    hasRightIcon: {
      true: { paddingInlineEnd: 0 },
      false: {},
    },
  },

  defaultVariants: {
    size: 'md',
    hasLeftIcon: false,
    hasRightIcon: false,
  },
});

export const iconSlot = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: vars.color.text.tertiary,
  },

  variants: {
    size: {
      sm: { width: vars.layout.iconSize.xs, height: vars.layout.iconSize.xs },
      md: { width: vars.layout.iconSize.sm, height: vars.layout.iconSize.sm },
      lg: { width: vars.layout.iconSize.md, height: vars.layout.iconSize.md },
      xl: { width: vars.layout.iconSize.lg, height: vars.layout.iconSize.lg },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const responsiveStyles = {
  sizeHeight: createResponsiveStyles(
    {
      sm: vars.layout.controllerSize.sm,
      md: vars.layout.controllerSize.md,
      lg: vars.layout.controllerSize.lg,
      xl: vars.layout.controllerSize.xl,
    },
    (v) => ({ height: v }),
  ),
  sizePaddingInline: createResponsiveStyles(
    {
      sm: vars.spacing.md,
      md: vars.spacing.lg,
      lg: vars.spacing.xl,
      xl: vars.spacing.xl,
    },
    (v) => ({ paddingInline: v }),
  ),
  sizeFontSize: createResponsiveStyles(
    {
      sm: vars.typography.size.sm,
      md: vars.typography.size.md,
      lg: vars.typography.size.lg,
      xl: vars.typography.size.xl,
    },
    (v) => ({ fontSize: v }),
  ),
} as const;
