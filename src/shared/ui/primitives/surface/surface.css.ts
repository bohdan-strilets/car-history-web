import { vars, type PaletteColors } from '@shared/styles';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Palette Keys

const paletteKeys = Object.keys(vars.color.palette) as PaletteColors[];

// Color Variants

export const colorSoftVariants = styleVariants(
  Object.fromEntries(paletteKeys.map((k) => [k, vars.color.palette[k].soft])) as Record<
    PaletteColors,
    string
  >,
  (v) => ({ backgroundColor: v }),
);

export const colorSolidVariants = styleVariants(
  Object.fromEntries(paletteKeys.map((k) => [k, vars.color.palette[k].solid])) as Record<
    PaletteColors,
    string
  >,
  (v) => ({ backgroundColor: v }),
);

// Gradient Variants

export const gradientVariants = styleVariants({
  'bg-subtle': { backgroundImage: vars.gradient.bg.subtle },
  'bg-mesh': { backgroundImage: vars.gradient.bg.mesh },
  'accent-solid': { backgroundImage: vars.gradient.accent.solid },
  'accent-soft': { backgroundImage: vars.gradient.accent.soft },
  'accent-glow': { backgroundImage: vars.gradient.accent.glow },
  'palette-orange': { backgroundImage: vars.gradient.palette.orange },
  'palette-amber': { backgroundImage: vars.gradient.palette.amber },
  'palette-yellow': { backgroundImage: vars.gradient.palette.yellow },
  'palette-lime': { backgroundImage: vars.gradient.palette.lime },
  'palette-green': { backgroundImage: vars.gradient.palette.green },
  'palette-teal': { backgroundImage: vars.gradient.palette.teal },
  'palette-cyan': { backgroundImage: vars.gradient.palette.cyan },
  'palette-sky': { backgroundImage: vars.gradient.palette.sky },
  'palette-blue': { backgroundImage: vars.gradient.palette.blue },
  'palette-indigo': { backgroundImage: vars.gradient.palette.indigo },
  'palette-violet': { backgroundImage: vars.gradient.palette.violet },
  'palette-purple': { backgroundImage: vars.gradient.palette.purple },
  'palette-pink': { backgroundImage: vars.gradient.palette.pink },
  'palette-rose': { backgroundImage: vars.gradient.palette.rose },
  'palette-gray': { backgroundImage: vars.gradient.palette.gray },
});

// Recipe

export const root = recipe({
  base: {
    position: 'relative',
  },

  variants: {
    variant: {
      base: { backgroundColor: vars.color.bg.base },
      elevated: { backgroundColor: vars.color.bg.elevated },
      sunken: { backgroundColor: vars.color.bg.sunken },
      glass: {
        backgroundColor: vars.color.bg.glass,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      },
      'neu-raised': {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.raised,
      },
      'neu-raisedLg': {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.raisedLg,
      },
      'neu-inset': {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.inset,
      },
      'neu-insetSm': {
        backgroundColor: vars.color.bg.base,
        boxShadow: vars.shadow.neu.insetSm,
      },
    },

    border: {
      base: { border: `1px solid ${vars.color.border.base}` },
      strong: { border: `1px solid ${vars.color.border.strong}` },
      subtle: { border: `1px solid ${vars.color.border.subtle}` },
      glass: { border: `1px solid ${vars.color.border.glass}` },
      accent: { border: `1px solid ${vars.color.accent.solid}` },
      none: { border: 'none' },
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
