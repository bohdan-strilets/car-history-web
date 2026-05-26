import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    flexShrink: 0,
    display: 'block',
  },
  variants: {
    size: {
      xs: { width: vars.spacing.xs, height: vars.spacing.xs },
      sm: { width: vars.spacing.sm, height: vars.spacing.sm },
      md: { width: vars.spacing.md, height: vars.spacing.md },
      lg: { width: vars.spacing.lg, height: vars.spacing.lg },
      xl: { width: vars.spacing.xl, height: vars.spacing.xl },
      '2xl': { width: vars.spacing['2xl'], height: vars.spacing['2xl'] },
      '3xl': { width: vars.spacing['3xl'], height: vars.spacing['3xl'] },
      '4xl': { width: vars.spacing['4xl'], height: vars.spacing['4xl'] },
      fill: { flex: 1 },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
