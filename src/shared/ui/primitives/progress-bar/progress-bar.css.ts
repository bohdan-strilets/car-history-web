import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const track = style({
  width: '100%',
  height: '3px',
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.bg.sunken,
  overflow: 'hidden',
});

export const root = recipe({
  base: {
    height: '100%',
    borderRadius: vars.radius.pill,
    transition: `width ${vars.transition.duration.base} ${vars.transition.easing.out}`,
  },
  variants: {
    color: {
      accent: { backgroundColor: vars.color.accent.solid },
      success: { backgroundColor: vars.color.semantic.success.solid },
      danger: { backgroundColor: vars.color.semantic.danger.solid },
      warning: { backgroundColor: vars.color.semantic.warning.solid },
      info: { backgroundColor: vars.color.semantic.info.solid },
      orange: { backgroundColor: vars.color.palette.orange.solid },
      amber: { backgroundColor: vars.color.palette.amber.solid },
      yellow: { backgroundColor: vars.color.palette.yellow.solid },
      lime: { backgroundColor: vars.color.palette.lime.solid },
      green: { backgroundColor: vars.color.palette.green.solid },
      teal: { backgroundColor: vars.color.palette.teal.solid },
      cyan: { backgroundColor: vars.color.palette.cyan.solid },
      sky: { backgroundColor: vars.color.palette.sky.solid },
      blue: { backgroundColor: vars.color.palette.blue.solid },
      indigo: { backgroundColor: vars.color.palette.indigo.solid },
      violet: { backgroundColor: vars.color.palette.violet.solid },
      purple: { backgroundColor: vars.color.palette.purple.solid },
      pink: { backgroundColor: vars.color.palette.pink.solid },
      rose: { backgroundColor: vars.color.palette.rose.solid },
      gray: { backgroundColor: vars.color.palette.gray.solid },
    },
  },
  defaultVariants: {
    color: 'accent',
  },
});
