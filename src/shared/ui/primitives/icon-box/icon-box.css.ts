import type { PaletteColors, SemanticColors } from '@shared/styles';
import { media, vars } from '@shared/styles';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Responsive

export const responsiveStyles = {
  size: {
    tablet: styleVariants(vars.layout.iconBoxSize, (v) => ({
      '@media': { [media.tablet]: { width: v, height: v } },
    })),
    laptop: styleVariants(vars.layout.iconBoxSize, (v) => ({
      '@media': { [media.laptop]: { width: v, height: v } },
    })),
    desktop: styleVariants(vars.layout.iconBoxSize, (v) => ({
      '@media': { [media.desktop]: { width: v, height: v } },
    })),
    wideDesktop: styleVariants(vars.layout.iconBoxSize, (v) => ({
      '@media': { [media.wideDesktop]: { width: v, height: v } },
    })),
  },
} as const;

// Color Maps

const paletteKeys = Object.keys(vars.color.palette) as PaletteColors[];

export const softVariants = styleVariants({
  ...Object.fromEntries(
    paletteKeys.map((k) => [
      k,
      { backgroundColor: vars.color.palette[k].soft, color: vars.color.palette[k].solid },
    ]),
  ),
  success: {
    backgroundColor: vars.color.semantic.success.soft,
    color: vars.color.semantic.success.solid,
  },
  warning: {
    backgroundColor: vars.color.semantic.warning.soft,
    color: vars.color.semantic.warning.solid,
  },
  danger: {
    backgroundColor: vars.color.semantic.danger.soft,
    color: vars.color.semantic.danger.solid,
  },
  info: { backgroundColor: vars.color.semantic.info.soft, color: vars.color.semantic.info.solid },
  accent: { backgroundColor: vars.color.accent.soft, color: vars.color.accent.solid },
} as unknown as Record<PaletteColors | SemanticColors, { backgroundColor: string; color: string }>);

export const solidVariants = styleVariants({
  ...Object.fromEntries(
    paletteKeys.map((k) => [
      k,
      { backgroundColor: vars.color.palette[k].solid, color: vars.color.text.onColor },
    ]),
  ),
  success: { backgroundColor: vars.color.semantic.success.solid, color: vars.color.text.onColor },
  warning: { backgroundColor: vars.color.semantic.warning.solid, color: vars.color.text.onColor },
  danger: { backgroundColor: vars.color.semantic.danger.solid, color: vars.color.text.onColor },
  info: { backgroundColor: vars.color.semantic.info.solid, color: vars.color.text.onColor },
  accent: { backgroundColor: vars.color.accent.solid, color: vars.color.text.onColor },
} as unknown as Record<PaletteColors | SemanticColors, { backgroundColor: string; color: string }>);

export const ghostVariants = styleVariants({
  ...Object.fromEntries(
    paletteKeys.map((k) => [
      k,
      { backgroundColor: 'transparent', color: vars.color.palette[k].solid },
    ]),
  ),
  success: { backgroundColor: 'transparent', color: vars.color.semantic.success.solid },
  warning: { backgroundColor: 'transparent', color: vars.color.semantic.warning.solid },
  danger: { backgroundColor: 'transparent', color: vars.color.semantic.danger.solid },
  info: { backgroundColor: 'transparent', color: vars.color.semantic.info.solid },
  accent: { backgroundColor: 'transparent', color: vars.color.accent.solid },
} as unknown as Record<PaletteColors | SemanticColors, { backgroundColor: string; color: string }>);

// Gradient Variants

export const gradientVariants = styleVariants({
  'bg-subtle': { backgroundImage: vars.gradient.bg.subtle },
  'bg-mesh': { backgroundImage: vars.gradient.bg.mesh },
  'accent-solid': { backgroundImage: vars.gradient.accent.solid, color: vars.color.text.onColor },
  'accent-soft': { backgroundImage: vars.gradient.accent.soft, color: vars.color.accent.solid },
  'accent-glow': { backgroundImage: vars.gradient.accent.glow, color: vars.color.accent.solid },
  'palette-orange': {
    backgroundImage: vars.gradient.palette.orange,
    color: vars.color.text.onColor,
  },
  'palette-amber': { backgroundImage: vars.gradient.palette.amber, color: vars.color.text.onColor },
  'palette-yellow': {
    backgroundImage: vars.gradient.palette.yellow,
    color: vars.color.text.onColor,
  },
  'palette-lime': { backgroundImage: vars.gradient.palette.lime, color: vars.color.text.onColor },
  'palette-green': { backgroundImage: vars.gradient.palette.green, color: vars.color.text.onColor },
  'palette-teal': { backgroundImage: vars.gradient.palette.teal, color: vars.color.text.onColor },
  'palette-cyan': { backgroundImage: vars.gradient.palette.cyan, color: vars.color.text.onColor },
  'palette-sky': { backgroundImage: vars.gradient.palette.sky, color: vars.color.text.onColor },
  'palette-blue': { backgroundImage: vars.gradient.palette.blue, color: vars.color.text.onColor },
  'palette-indigo': {
    backgroundImage: vars.gradient.palette.indigo,
    color: vars.color.text.onColor,
  },
  'palette-violet': {
    backgroundImage: vars.gradient.palette.violet,
    color: vars.color.text.onColor,
  },
  'palette-purple': {
    backgroundImage: vars.gradient.palette.purple,
    color: vars.color.text.onColor,
  },
  'palette-pink': { backgroundImage: vars.gradient.palette.pink, color: vars.color.text.onColor },
  'palette-rose': { backgroundImage: vars.gradient.palette.rose, color: vars.color.text.onColor },
  'palette-gray': { backgroundImage: vars.gradient.palette.gray, color: vars.color.text.onColor },
});

// Recipe

export const root = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  variants: {
    size: {
      xs: { width: vars.layout.iconBoxSize.xs, height: vars.layout.iconBoxSize.xs },
      sm: { width: vars.layout.iconBoxSize.sm, height: vars.layout.iconBoxSize.sm },
      md: { width: vars.layout.iconBoxSize.md, height: vars.layout.iconBoxSize.md },
      lg: { width: vars.layout.iconBoxSize.lg, height: vars.layout.iconBoxSize.lg },
      xl: { width: vars.layout.iconBoxSize.xl, height: vars.layout.iconBoxSize.xl },
      '2xl': { width: vars.layout.iconBoxSize['2xl'], height: vars.layout.iconBoxSize['2xl'] },
      '3xl': { width: vars.layout.iconBoxSize['3xl'], height: vars.layout.iconBoxSize['3xl'] },
      '4xl': { width: vars.layout.iconBoxSize['4xl'], height: vars.layout.iconBoxSize['4xl'] },
    },

    radius: {
      none: { borderRadius: vars.radius.none },
      sm: { borderRadius: vars.radius.sm },
      md: { borderRadius: vars.radius.md },
      lg: { borderRadius: vars.radius.lg },
      xl: { borderRadius: vars.radius.xl },
      pill: { borderRadius: vars.radius.pill },
    },

    shadow: {
      sm: { boxShadow: vars.shadow.sm },
      md: { boxShadow: vars.shadow.md },
      lg: { boxShadow: vars.shadow.lg },
      xl: { boxShadow: vars.shadow.xl },
      accent: { boxShadow: vars.shadow.accent },
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
  },

  defaultVariants: {
    size: 'md',
    radius: 'md',
  },
});
