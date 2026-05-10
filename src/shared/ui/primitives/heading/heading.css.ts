import { media, vars } from '@shared/styles';
import { styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Responsive

const textSize = vars.typography.size;
const textAlign = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export const responsiveStyles = {
  size: {
    tablet: styleVariants(textSize, (v) => ({
      '@media': { [media.tablet]: { fontSize: v } },
    })),
    laptop: styleVariants(textSize, (v) => ({
      '@media': { [media.laptop]: { fontSize: v } },
    })),
    desktop: styleVariants(textSize, (v) => ({
      '@media': { [media.desktop]: { fontSize: v } },
    })),
    wideDesktop: styleVariants(textSize, (v) => ({
      '@media': { [media.wideDesktop]: { fontSize: v } },
    })),
  },
  align: {
    tablet: styleVariants(textAlign, (v) => ({
      '@media': { [media.tablet]: { textAlign: v } },
    })),
    laptop: styleVariants(textAlign, (v) => ({
      '@media': { [media.laptop]: { textAlign: v } },
    })),
    desktop: styleVariants(textAlign, (v) => ({
      '@media': { [media.desktop]: { textAlign: v } },
    })),
    wideDesktop: styleVariants(textAlign, (v) => ({
      '@media': { [media.wideDesktop]: { textAlign: v } },
    })),
  },
} as const;

// Recipe

export const root = recipe({
  base: {
    lineHeight: vars.typography.height.tight,
    letterSpacing: vars.typography.spacing.tight,
  },

  variants: {
    size: {
      xs: { fontSize: vars.typography.size.xs },
      sm: { fontSize: vars.typography.size.sm },
      md: { fontSize: vars.typography.size.md },
      lg: { fontSize: vars.typography.size.lg },
      xl: { fontSize: vars.typography.size.xl },
      '2xl': { fontSize: vars.typography.size['2xl'] },
      '3xl': { fontSize: vars.typography.size['3xl'] },
      '4xl': { fontSize: vars.typography.size['4xl'] },
      '5xl': { fontSize: vars.typography.size['5xl'] },
      '6xl': { fontSize: vars.typography.size['6xl'] },
    },

    weight: {
      light: { fontWeight: vars.typography.weight.light },
      regular: { fontWeight: vars.typography.weight.regular },
      medium: { fontWeight: vars.typography.weight.medium },
      semibold: { fontWeight: vars.typography.weight.semibold },
      bold: { fontWeight: vars.typography.weight.bold },
      extraBold: { fontWeight: vars.typography.weight.extraBold },
    },

    font: {
      display: { fontFamily: vars.typography.font.display },
      body: { fontFamily: vars.typography.font.body },
    },

    color: {
      primary: { color: vars.color.text.primary },
      secondary: { color: vars.color.text.secondary },
      tertiary: { color: vars.color.text.tertiary },
      disabled: { color: vars.color.text.disabled },
      inverse: { color: vars.color.text.inverse },
      onColor: { color: vars.color.text.onColor },
      accent: { color: vars.color.accent.solid },
      success: { color: vars.color.semantic.success.solid },
      warning: { color: vars.color.semantic.warning.solid },
      danger: { color: vars.color.semantic.danger.solid },
      info: { color: vars.color.semantic.info.solid },
      orange: { color: vars.color.palette.orange.solid },
      amber: { color: vars.color.palette.amber.solid },
      yellow: { color: vars.color.palette.yellow.solid },
      lime: { color: vars.color.palette.lime.solid },
      green: { color: vars.color.palette.green.solid },
      teal: { color: vars.color.palette.teal.solid },
      cyan: { color: vars.color.palette.cyan.solid },
      sky: { color: vars.color.palette.sky.solid },
      blue: { color: vars.color.palette.blue.solid },
      indigo: { color: vars.color.palette.indigo.solid },
      violet: { color: vars.color.palette.violet.solid },
      purple: { color: vars.color.palette.purple.solid },
      pink: { color: vars.color.palette.pink.solid },
      rose: { color: vars.color.palette.rose.solid },
      gray: { color: vars.color.palette.gray.solid },
    },

    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },

    transform: {
      uppercase: { textTransform: 'uppercase' },
      lowercase: { textTransform: 'lowercase' },
      capitalize: { textTransform: 'capitalize' },
      none: { textTransform: 'none' },
    },

    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },

  defaultVariants: {
    font: 'display',
    weight: 'bold',
    color: 'primary',
  },
});
