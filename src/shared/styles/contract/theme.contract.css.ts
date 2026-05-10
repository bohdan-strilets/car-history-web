import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    bg: {
      canvas: null,
      base: null,
      surface: null,
      elevated: null,
      sunken: null,
      overlay: null,
      glass: null,
    },

    neu: {
      light: null,
      dark: null,
    },

    text: {
      primary: null,
      secondary: null,
      tertiary: null,
      disabled: null,
      inverse: null,
      onColor: null,
    },

    border: {
      base: null,
      strong: null,
      subtle: null,
      focus: null,
      glass: null,
    },

    accent: {
      solid: null,
      soft: null,
      glow: null,
      rgb: null,
    },

    semantic: {
      success: {
        solid: null,
        soft: null,
        rgb: null,
      },
      warning: {
        solid: null,
        soft: null,
        rgb: null,
      },
      danger: {
        solid: null,
        soft: null,
        rgb: null,
      },
      info: {
        solid: null,
        soft: null,
        rgb: null,
      },
    },

    palette: {
      orange: {
        solid: null,
        soft: null,
        rgb: null,
      },
      amber: {
        solid: null,
        soft: null,
        rgb: null,
      },
      yellow: {
        solid: null,
        soft: null,
        rgb: null,
      },
      lime: {
        solid: null,
        soft: null,
        rgb: null,
      },
      green: {
        solid: null,
        soft: null,
        rgb: null,
      },
      teal: {
        solid: null,
        soft: null,
        rgb: null,
      },
      cyan: {
        solid: null,
        soft: null,
        rgb: null,
      },
      sky: {
        solid: null,
        soft: null,
        rgb: null,
      },
      blue: {
        solid: null,
        soft: null,
        rgb: null,
      },
      indigo: {
        solid: null,
        soft: null,
        rgb: null,
      },
      violet: {
        solid: null,
        soft: null,
        rgb: null,
      },
      purple: {
        solid: null,
        soft: null,
        rgb: null,
      },
      pink: {
        solid: null,
        soft: null,
        rgb: null,
      },
      rose: {
        solid: null,
        soft: null,
        rgb: null,
      },
      gray: {
        solid: null,
        soft: null,
        rgb: null,
      },
    },
  },

  typography: {
    font: {
      display: null,
      body: null,
    },

    size: {
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
      '3xl': null,
      '4xl': null,
      '5xl': null,
      '6xl': null,
    },

    weight: {
      light: null,
      regular: null,
      medium: null,
      semibold: null,
      bold: null,
      extraBold: null,
    },

    height: {
      tight: null,
      snug: null,
      normal: null,
      relaxed: null,
    },

    spacing: {
      tight: null,
      normal: null,
      wide: null,
      wider: null,
      widest: null,
    },
  },

  spacing: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
    '5xl': null,
    '6xl': null,
  },

  radius: {
    none: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    pill: null,
  },

  shadow: {
    neu: {
      raised: null,
      raisedLg: null,
      inset: null,
      insetSm: null,
    },

    sm: null,
    md: null,
    lg: null,
    xl: null,

    accent: null,
    glass: null,

    palette: {
      orange: null,
      amber: null,
      yellow: null,
      lime: null,
      green: null,
      teal: null,
      cyan: null,
      sky: null,
      blue: null,
      indigo: null,
      violet: null,
      purple: null,
      pink: null,
      rose: null,
      gray: null,
    },
  },

  transition: {
    duration: {
      fast: null,
      base: null,
      slow: null,
      slowest: null,
    },
    easing: {
      in: null,
      out: null,
      inOut: null,
      spring: null,
      linear: null,
    },
  },

  zIndex: {
    base: null,
    raised: null,
    dropdown: null,
    sticky: null,
    overlay: null,
    modal: null,
    toast: null,
    tooltip: null,
  },
});
