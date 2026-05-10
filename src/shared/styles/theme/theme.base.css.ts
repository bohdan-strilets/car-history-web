export const baseTheme = {
  typography: {
    font: {
      display: "'Outfit', sans-serif",
      body: "'DM Sans', sans-serif",
    },
    size: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '64px',
    },
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extraBold: '800',
    },
    height: {
      tight: '1.1',
      snug: '1.25',
      normal: '1.5',
      relaxed: '1.6',
    },
    spacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',
      wider: '0.08em',
      widest: '0.12em',
    },
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '40px',
    '5xl': '48px',
    '6xl': '64px',
  },

  radius: {
    none: '0px',
    sm: '10px',
    md: '16px',
    lg: '22px',
    xl: '32px',
    pill: '999px',
  },

  transition: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slowest: '500ms',
    },
    easing: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      linear: 'linear',
    },
  },

  zIndex: {
    base: '0',
    raised: '1000',
    dropdown: '2000',
    sticky: '3000',
    overlay: '4000',
    modal: '5000',
    toast: '6000',
    tooltip: '7000',
  },
} as const;
