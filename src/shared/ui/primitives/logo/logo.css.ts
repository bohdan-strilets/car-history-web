import { createResponsiveStyles } from '@shared/lib/primitives';
import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: vars.spacing.sm,
    flexShrink: 0,
  },

  variants: {
    size: {
      sm: { gap: vars.spacing.xs },
      md: { gap: vars.spacing.sm },
      lg: { gap: vars.spacing.sm },
      xl: { gap: vars.spacing.md },
      '2xl': { gap: vars.spacing.md },
      '3xl': { gap: vars.spacing.lg },
      '4xl': { gap: vars.spacing.xl },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const icon = recipe({
  base: {
    flexShrink: 0,
    display: 'block',
  },

  variants: {
    size: {
      sm: { width: '20px', height: '20px' },
      md: { width: '28px', height: '28px' },
      lg: { width: '36px', height: '36px' },
      xl: { width: '48px', height: '48px' },
      '2xl': { width: '64px', height: '64px' },
      '3xl': { width: '80px', height: '80px' },
      '4xl': { width: '96px', height: '96px' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const text = recipe({
  base: {
    fontFamily: vars.typography.font.display,
    fontWeight: vars.typography.weight.bold,
    letterSpacing: vars.typography.spacing.tight,
    color: vars.color.text.primary,
    lineHeight: '1',
  },

  variants: {
    size: {
      sm: { fontSize: vars.typography.size.md },
      md: { fontSize: vars.typography.size.xl },
      lg: { fontSize: vars.typography.size['2xl'] },
      xl: { fontSize: vars.typography.size['3xl'] },
      '2xl': { fontSize: vars.typography.size['4xl'] },
      '3xl': { fontSize: vars.typography.size['5xl'] },
      '4xl': { fontSize: vars.typography.size['6xl'] },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const responsiveStyles = {
  iconSize: createResponsiveStyles(
    {
      sm: '20px',
      md: '28px',
      lg: '36px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '80px',
      '4xl': '96px',
    },
    (v) => ({ width: v, height: v }),
  ),
  fontSize: createResponsiveStyles(
    {
      sm: vars.typography.size.md,
      md: vars.typography.size.xl,
      lg: vars.typography.size['2xl'],
      xl: vars.typography.size['3xl'],
      '2xl': vars.typography.size['4xl'],
      '3xl': vars.typography.size['5xl'],
      '4xl': vars.typography.size['6xl'],
    },
    (v) => ({ fontSize: v }),
  ),
  gap: createResponsiveStyles(
    {
      sm: vars.spacing.xs,
      md: vars.spacing.sm,
      lg: vars.spacing.sm,
      xl: vars.spacing.md,
      '2xl': vars.spacing.md,
      '3xl': vars.spacing.lg,
      '4xl': vars.spacing.xl,
    },
    (v) => ({ gap: v }),
  ),
} as const;
