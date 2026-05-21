import { vars } from '@shared/styles';
import { recipe } from '@vanilla-extract/recipes';

export const root = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.spacing.sm,

    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    borderRadius: vars.radius.md,
  },

  variants: {
    variant: {
      default: {
        backgroundColor: vars.color.bg.elevated,
        border: `1px solid ${vars.color.border.strong}`,
      },
      success: {
        backgroundColor: vars.color.semantic.success.soft,
        color: vars.color.semantic.success.solid,
        border: `1px solid ${vars.color.semantic.success.solid}`,
      },
      warning: {
        backgroundColor: vars.color.semantic.warning.soft,
        color: vars.color.semantic.warning.solid,
        border: `1px solid ${vars.color.semantic.warning.solid}`,
      },
      danger: {
        backgroundColor: vars.color.semantic.danger.soft,
        color: vars.color.semantic.danger.solid,
        border: `1px solid ${vars.color.semantic.danger.solid}`,
      },
      info: {
        backgroundColor: vars.color.semantic.info.soft,
        color: vars.color.semantic.info.solid,
        border: `1px solid ${vars.color.semantic.info.solid}`,
      },
    },
  },
});
