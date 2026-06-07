import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@shared/styles';

export const root = recipe({
  base: {
    position: 'relative',
  },

  variants: {
    variant: {
      base: {
        backgroundColor: vars.color.bg.base,
      },
      elevated: {
        backgroundColor: vars.color.bg.elevated,
      },
      sunken: {
        backgroundColor: vars.color.bg.sunken,
      },
      glass: {
        backgroundColor: vars.color.bg.glass,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      },
      neuRaised: {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.raised,
      },
      neuRaisedLg: {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.raisedLg,
      },
      neuInset: {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.inset,
      },
      neuInsetSm: {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.insetSm,
      },
    },

    soft: {
      orange: { backgroundColor: vars.color.palette.orange.soft },
      amber: { backgroundColor: vars.color.palette.amber.soft },
      yellow: { backgroundColor: vars.color.palette.yellow.soft },
      lime: { backgroundColor: vars.color.palette.lime.soft },
      green: { backgroundColor: vars.color.palette.green.soft },
      teal: { backgroundColor: vars.color.palette.teal.soft },
      cyan: { backgroundColor: vars.color.palette.cyan.soft },
      sky: { backgroundColor: vars.color.palette.sky.soft },
      blue: { backgroundColor: vars.color.palette.blue.soft },
      indigo: { backgroundColor: vars.color.palette.indigo.soft },
      violet: { backgroundColor: vars.color.palette.violet.soft },
      purple: { backgroundColor: vars.color.palette.purple.soft },
      pink: { backgroundColor: vars.color.palette.pink.soft },
      rose: { backgroundColor: vars.color.palette.rose.soft },
      gray: { backgroundColor: vars.color.palette.gray.soft },

      success: { backgroundColor: vars.color.semantic.success.soft },
      warning: { backgroundColor: vars.color.semantic.warning.soft },
      danger: { backgroundColor: vars.color.semantic.danger.soft },
      info: { backgroundColor: vars.color.semantic.info.soft },
      accent: { backgroundColor: vars.color.accent.soft },
    },

    solid: {
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

      success: { backgroundColor: vars.color.semantic.success.solid },
      warning: { backgroundColor: vars.color.semantic.warning.solid },
      danger: { backgroundColor: vars.color.semantic.danger.solid },
      info: { backgroundColor: vars.color.semantic.info.solid },
      accent: { backgroundColor: vars.color.accent.solid },
    },

    gradient: {
      bgSubtle: { backgroundImage: vars.gradient.bg.subtle },
      bgMesh: { backgroundImage: vars.gradient.bg.mesh },
      accentSolid: { backgroundImage: vars.gradient.accent.solid },
      accentSoft: { backgroundImage: vars.gradient.accent.soft },
      accentGlow: { backgroundImage: vars.gradient.accent.glow },

      orange: { backgroundImage: vars.gradient.palette.orange },
      amber: { backgroundImage: vars.gradient.palette.amber },
      yellow: { backgroundImage: vars.gradient.palette.yellow },
      lime: { backgroundImage: vars.gradient.palette.lime },
      green: { backgroundImage: vars.gradient.palette.green },
      teal: { backgroundImage: vars.gradient.palette.teal },
      cyan: { backgroundImage: vars.gradient.palette.cyan },
      sky: { backgroundImage: vars.gradient.palette.sky },
      blue: { backgroundImage: vars.gradient.palette.blue },
      indigo: { backgroundImage: vars.gradient.palette.indigo },
      violet: { backgroundImage: vars.gradient.palette.violet },
      purple: { backgroundImage: vars.gradient.palette.purple },
      pink: { backgroundImage: vars.gradient.palette.pink },
      rose: { backgroundImage: vars.gradient.palette.rose },
      gray: { backgroundImage: vars.gradient.palette.gray },
    },

    border: {
      base: { border: `1px solid ${vars.color.border.base}` },
      strong: { border: `1px solid ${vars.color.border.strong}` },
      subtle: { border: `1px solid ${vars.color.border.subtle}` },
      glass: { border: `1px solid ${vars.color.border.glass}` },
      accent: { border: `1px solid ${vars.color.accent.solid}` },
      none: { border: 'none' },

      orange: { border: `1px solid ${vars.color.palette.orange.solid}` },
      amber: { border: `1px solid ${vars.color.palette.amber.solid}` },
      yellow: { border: `1px solid ${vars.color.palette.yellow.solid}` },
      lime: { border: `1px solid ${vars.color.palette.lime.solid}` },
      green: { border: `1px solid ${vars.color.palette.green.solid}` },
      teal: { border: `1px solid ${vars.color.palette.teal.solid}` },
      cyan: { border: `1px solid ${vars.color.palette.cyan.solid}` },
      sky: { border: `1px solid ${vars.color.palette.sky.solid}` },
      blue: { border: `1px solid ${vars.color.palette.blue.solid}` },
      indigo: { border: `1px solid ${vars.color.palette.indigo.solid}` },
      violet: { border: `1px solid ${vars.color.palette.violet.solid}` },
      purple: { border: `1px solid ${vars.color.palette.purple.solid}` },
      pink: { border: `1px solid ${vars.color.palette.pink.solid}` },
      rose: { border: `1px solid ${vars.color.palette.rose.solid}` },
      gray: { border: `1px solid ${vars.color.palette.gray.solid}` },

      success: { border: `1px solid ${vars.color.semantic.success.solid}` },
      warning: { border: `1px solid ${vars.color.semantic.warning.solid}` },
      danger: { border: `1px solid ${vars.color.semantic.danger.solid}` },
      info: { border: `1px solid ${vars.color.semantic.info.solid}` },
    },

    shadow: {
      sm: { boxShadow: vars.shadow.sm },
      md: { boxShadow: vars.shadow.md },
      lg: { boxShadow: vars.shadow.lg },
      xl: { boxShadow: vars.shadow.xl },
      accent: { boxShadow: vars.shadow.accent },
      glass: { boxShadow: vars.shadow.glass },

      orange: { boxShadow: vars.shadow.palette.orange },
      amber: { boxShadow: vars.shadow.palette.amber },
      yellow: { boxShadow: vars.shadow.palette.yellow },
      lime: { boxShadow: vars.shadow.palette.lime },
      green: { boxShadow: vars.shadow.palette.green },
      teal: { boxShadow: vars.shadow.palette.teal },
      cyan: { boxShadow: vars.shadow.palette.cyan },
      sky: { boxShadow: vars.shadow.palette.sky },
      blue: { boxShadow: vars.shadow.palette.blue },
      indigo: { boxShadow: vars.shadow.palette.indigo },
      violet: { boxShadow: vars.shadow.palette.violet },
      purple: { boxShadow: vars.shadow.palette.purple },
      pink: { boxShadow: vars.shadow.palette.pink },
      rose: { boxShadow: vars.shadow.palette.rose },
      gray: { boxShadow: vars.shadow.palette.gray },
    },

    radius: {
      none: { borderRadius: vars.radius.none },
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      pill: { borderRadius: vars.radius.pill },
    },
  },
});
