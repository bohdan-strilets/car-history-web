import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';

import { baseTheme } from './theme.base.css';

export const darkTheme = createTheme(vars, {
  ...baseTheme,

  color: {
    bg: {
      canvas: '#141414',
      base: '#1A1A1A',
      surface: '#1F1F1F',
      elevated: '#252525',
      sunken: '#111111',
      overlay: 'rgba(0, 0, 0, 0.6)',
      glass: 'rgba(30, 30, 30, 0.55)',
    },

    neu: {
      light: 'rgba(50, 50, 50, 0.8)',
      dark: 'rgba(8, 8, 8, 0.9)',
    },

    text: {
      primary: '#F0F0F0',
      secondary: '#8A8A8A',
      tertiary: '#5A5A5A',
      disabled: '#3A3A3A',
      inverse: '#1A1A1A',
      onColor: '#FFFFFF',
    },

    border: {
      base: 'rgba(60, 60, 60, 0.6)',
      strong: 'rgba(80, 80, 80, 0.8)',
      subtle: 'rgba(40, 40, 40, 0.4)',
      focus: 'rgba(249, 115, 22, 0.5)',
      glass: 'rgba(80, 80, 80, 0.35)',
    },

    accent: {
      solid: '#F97316',
      soft: 'rgba(249, 115, 22, 0.15)',
      glow: 'rgba(249, 115, 22, 0.3)',
      rgb: '249, 115, 22',
    },

    semantic: {
      success: {
        solid: '#10B981',
        soft: 'rgba(16, 185, 129, 0.15)',
        rgb: '16, 185, 129',
      },
      warning: {
        solid: '#F59E0B',
        soft: 'rgba(245, 158, 11, 0.15)',
        rgb: '245, 158, 11',
      },
      danger: {
        solid: '#EF4444',
        soft: 'rgba(239, 68, 68, 0.15)',
        rgb: '239, 68, 68',
      },
      info: {
        solid: '#38BDF8',
        soft: 'rgba(56, 189, 248, 0.15)',
        rgb: '56, 189, 248',
      },
    },

    palette: {
      orange: {
        solid: '#F97316',
        soft: 'rgba(249, 115, 22, 0.15)',
        rgb: '249, 115, 22',
      },
      amber: {
        solid: '#EAB308',
        soft: 'rgba(234, 179, 8, 0.15)',
        rgb: '234, 179, 8',
      },
      yellow: {
        solid: '#FACC15',
        soft: 'rgba(250, 204, 21, 0.15)',
        rgb: '250, 204, 21',
      },
      lime: {
        solid: '#84CC16',
        soft: 'rgba(132, 204, 22, 0.15)',
        rgb: '132, 204, 22',
      },
      green: {
        solid: '#22C55E',
        soft: 'rgba(34, 197, 94, 0.15)',
        rgb: '34, 197, 94',
      },
      teal: {
        solid: '#14B8A6',
        soft: 'rgba(20, 184, 166, 0.15)',
        rgb: '20, 184, 166',
      },
      cyan: {
        solid: '#06B6D4',
        soft: 'rgba(6, 182, 212, 0.15)',
        rgb: '6, 182, 212',
      },
      sky: {
        solid: '#38BDF8',
        soft: 'rgba(56, 189, 248, 0.15)',
        rgb: '56, 189, 248',
      },
      blue: {
        solid: '#3B82F6',
        soft: 'rgba(59, 130, 246, 0.15)',
        rgb: '59, 130, 246',
      },
      indigo: {
        solid: '#6366F1',
        soft: 'rgba(99, 102, 241, 0.15)',
        rgb: '99, 102, 241',
      },
      violet: {
        solid: '#8B5CF6',
        soft: 'rgba(139, 92, 246, 0.15)',
        rgb: '139, 92, 246',
      },
      purple: {
        solid: '#A855F7',
        soft: 'rgba(168, 85, 247, 0.15)',
        rgb: '168, 85, 247',
      },
      pink: {
        solid: '#EC4899',
        soft: 'rgba(236, 72, 153, 0.15)',
        rgb: '236, 72, 153',
      },
      rose: {
        solid: '#F43F5E',
        soft: 'rgba(244, 63, 94, 0.15)',
        rgb: '244, 63, 94',
      },
      gray: {
        solid: '#64748B',
        soft: 'rgba(100, 116, 139, 0.15)',
        rgb: '100, 116, 139',
      },
    },
  },

  gradient: {
    bg: {
      subtle: 'linear-gradient(135deg, #1A1A1A 0%, #252525 50%, #1A1A1A 100%)',
      mesh: 'radial-gradient(at 20% 20%, rgba(249, 115, 22, 0.08) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(99, 102, 241, 0.08) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(20, 184, 166, 0.05) 0px, transparent 60%)',
    },

    accent: {
      solid: 'linear-gradient(135deg, #F97316 0%, #EAB308 100%)',
      soft: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(234, 179, 8, 0.2) 100%)',
      glow: 'linear-gradient(135deg, rgba(249, 115, 22, 0.4) 0%, rgba(234, 179, 8, 0.4) 100%)',
    },

    palette: {
      orange: 'linear-gradient(135deg, #EA6A10 0%, #F97316 100%)',
      amber: 'linear-gradient(135deg, #C99A07 0%, #EAB308 100%)',
      yellow: 'linear-gradient(135deg, #D4A812 0%, #FACC15 100%)',
      lime: 'linear-gradient(135deg, #65A30D 0%, #84CC16 100%)',
      green: 'linear-gradient(135deg, #16A34A 0%, #22C55E 100%)',
      teal: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)',
      cyan: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)',
      sky: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
      blue: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
      indigo: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
      violet: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
      purple: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
      pink: 'linear-gradient(135deg, #DB2777 0%, #EC4899 100%)',
      rose: 'linear-gradient(135deg, #E11D48 0%, #F43F5E 100%)',
      gray: 'linear-gradient(135deg, #475569 0%, #64748B 100%)',
    },
  },

  shadow: {
    neu: {
      raised: '6px 6px 14px rgba(8, 8, 8, 0.9), -6px -6px 14px rgba(50, 50, 50, 0.8)',
      raisedLg: '12px 12px 28px rgba(8, 8, 8, 0.9), -12px -12px 28px rgba(50, 50, 50, 0.8)',
      inset: 'inset 4px 4px 10px rgba(8, 8, 8, 0.9), inset -4px -4px 10px rgba(50, 50, 50, 0.8)',
      insetSm: 'inset 2px 2px 6px rgba(8, 8, 8, 0.9), inset -2px -2px 6px rgba(50, 50, 50, 0.8)',
    },
    sm: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.3), 0 4px 6px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.35), 0 8px 10px rgba(0, 0, 0, 0.2)',
    accent: '0 4px 20px rgba(249, 115, 22, 0.4)',
    glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
    palette: {
      orange: '0 4px 20px rgba(249, 115, 22, 0.4)',
      amber: '0 4px 20px rgba(234, 179, 8, 0.4)',
      yellow: '0 4px 20px rgba(250, 204, 21, 0.4)',
      lime: '0 4px 20px rgba(132, 204, 22, 0.4)',
      green: '0 4px 20px rgba(34, 197, 94, 0.4)',
      teal: '0 4px 20px rgba(20, 184, 166, 0.4)',
      cyan: '0 4px 20px rgba(6, 182, 212, 0.4)',
      sky: '0 4px 20px rgba(56, 189, 248, 0.4)',
      blue: '0 4px 20px rgba(59, 130, 246, 0.4)',
      indigo: '0 4px 20px rgba(99, 102, 241, 0.4)',
      violet: '0 4px 20px rgba(139, 92, 246, 0.4)',
      purple: '0 4px 20px rgba(168, 85, 247, 0.4)',
      pink: '0 4px 20px rgba(236, 72, 153, 0.4)',
      rose: '0 4px 20px rgba(244, 63, 94, 0.4)',
      gray: '0 4px 20px rgba(100, 116, 139, 0.3)',
    },
  },
});
