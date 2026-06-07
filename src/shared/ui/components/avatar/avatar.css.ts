import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,

    color: vars.color.text.onColor,

    fontFamily: vars.typography.font.body,
    fontWeight: vars.typography.weight.bold,

    overflow: 'hidden',
    userSelect: 'none',
  },
  variants: {
    size: {
      sm: {
        width: vars.layout.iconBoxSize.sm,
        height: vars.layout.iconBoxSize.sm,
        fontSize: vars.typography.size.xs,
      },
      md: {
        width: vars.layout.iconBoxSize.md,
        height: vars.layout.iconBoxSize.md,
        fontSize: vars.typography.size.sm,
      },
      lg: {
        width: vars.layout.iconBoxSize.lg,
        height: vars.layout.iconBoxSize.lg,
        fontSize: vars.typography.size.md,
      },
      xl: {
        width: vars.layout.iconBoxSize.xl,
        height: vars.layout.iconBoxSize.xl,
        fontSize: vars.typography.size.xl,
      },
    },

    shape: {
      circle: { borderRadius: vars.radius.pill },
      square: { borderRadius: vars.radius.md },
    },

    variant: {
      accent: {
        backgroundImage: vars.gradient.accent.solid,
      },
      default: {
        backgroundColor: vars.color.palette.gray.soft,
        color: vars.color.text.secondary,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'square',
    variant: 'accent',
  },
});
