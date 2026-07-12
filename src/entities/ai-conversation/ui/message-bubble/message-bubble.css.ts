import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const bubble = recipe({
  base: {
    maxWidth: '75%',
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    borderRadius: vars.radius.md,
    wordBreak: 'break-word',
  },
  variants: {
    role: {
      USER: {
        alignSelf: 'flex-end',
        backgroundColor: vars.color.accent.soft,
        color: vars.color.text.primary,
      },
      ASSISTANT: {
        alignSelf: 'flex-start',
        backgroundColor: vars.color.bg.sunken,
        boxShadow: vars.shadow.neu.raised,
        color: vars.color.text.primary,
      },
    },
    isError: {
      true: {
        borderColor: vars.color.semantic.danger.solid,
        backgroundColor: vars.color.semantic.danger.soft,
      },
      false: {},
    },
  },
  defaultVariants: {
    isError: false,
  },
});
