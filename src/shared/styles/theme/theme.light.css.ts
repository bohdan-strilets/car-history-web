import { createTheme } from '@vanilla-extract/css';

import { vars } from '../contract';

import { baseTheme } from './theme.base.css';

export const lightTheme = createTheme(vars, {
  ...baseTheme,

  color: {
    bg: {
      canvas: '#DDDEE6',
      base: '#E8E9EF',
      surface: '#E8E9EF',
      elevated: '#EEEEF4',
      sunken: '#E0E1E8',
      overlay: 'rgba(28, 31, 46, 0.4)',
      glass: 'rgba(232, 233, 239, 0.6)',
    },

    neu: {
      light: 'rgba(255, 255, 255, 0.85)',
      dark: 'rgba(185, 188, 205, 0.7)',
    },

    text: {
      primary: '#1C1F2E',
      secondary: '#6B7080',
      tertiary: '#9EA5B5',
      disabled: '#BCC0CE',
      inverse: '#FFFFFF',
      onColor: '#FFFFFF',
    },

    border: {
      base: 'rgba(185, 188, 205, 0.4)',
      strong: 'rgba(185, 188, 205, 0.7)',
      subtle: 'rgba(185, 188, 205, 0.2)',
      focus: 'rgba(249, 115, 22, 0.5)',
      glass: 'rgba(255, 255, 255, 0.5)',
    },

    accent: {
      solid: '#F97316',
      soft: 'rgba(249, 115, 22, 0.12)',
      glow: 'rgba(249, 115, 22, 0.25)',
      rgb: '249, 115, 22',
    },

    semantic: {
      success: {
        solid: '#10B981',
        soft: 'rgba(16, 185, 129, 0.12)',
        rgb: '16, 185, 129',
      },
      warning: {
        solid: '#F59E0B',
        soft: 'rgba(245, 158, 11, 0.12)',
        rgb: '245, 158, 11',
      },
      danger: {
        solid: '#EF4444',
        soft: 'rgba(239, 68, 68, 0.12)',
        rgb: '239, 68, 68',
      },
      info: {
        solid: '#38BDF8',
        soft: 'rgba(56, 189, 248, 0.12)',
        rgb: '56, 189, 248',
      },
    },

    palette: {
      orange: {
        solid: '#F97316',
        soft: 'rgba(249, 115, 22, 0.12)',
        rgb: '249, 115, 22',
      },
      amber: {
        solid: '#EAB308',
        soft: 'rgba(234, 179, 8, 0.12)',
        rgb: '234, 179, 8',
      },
      yellow: {
        solid: '#FACC15',
        soft: 'rgba(250, 204, 21, 0.12)',
        rgb: '250, 204, 21',
      },
      lime: {
        solid: '#84CC16',
        soft: 'rgba(132, 204, 22, 0.12)',
        rgb: '132, 204, 22',
      },
      green: {
        solid: '#22C55E',
        soft: 'rgba(34, 197, 94, 0.12)',
        rgb: '34, 197, 94',
      },
      teal: {
        solid: '#14B8A6',
        soft: 'rgba(20, 184, 166, 0.12)',
        rgb: '20, 184, 166',
      },
      cyan: {
        solid: '#06B6D4',
        soft: 'rgba(6, 182, 212, 0.12)',
        rgb: '6, 182, 212',
      },
      sky: {
        solid: '#38BDF8',
        soft: 'rgba(56, 189, 248, 0.12)',
        rgb: '56, 189, 248',
      },
      blue: {
        solid: '#3B82F6',
        soft: 'rgba(59, 130, 246, 0.12)',
        rgb: '59, 130, 246',
      },
      indigo: {
        solid: '#6366F1',
        soft: 'rgba(99, 102, 241, 0.12)',
        rgb: '99, 102, 241',
      },
      violet: {
        solid: '#8B5CF6',
        soft: 'rgba(139, 92, 246, 0.12)',
        rgb: '139, 92, 246',
      },
      purple: {
        solid: '#A855F7',
        soft: 'rgba(168, 85, 247, 0.12)',
        rgb: '168, 85, 247',
      },
      pink: {
        solid: '#EC4899',
        soft: 'rgba(236, 72, 153, 0.12)',
        rgb: '236, 72, 153',
      },
      rose: {
        solid: '#F43F5E',
        soft: 'rgba(244, 63, 94, 0.12)',
        rgb: '244, 63, 94',
      },
      gray: {
        solid: '#64748B',
        soft: 'rgba(100, 116, 139, 0.12)',
        rgb: '100, 116, 139',
      },
    },
  },

  gradient: {
    bg: {
      subtle: 'linear-gradient(135deg, #E8E9EF 0%, #EEEEF4 50%, #E8E9EF 100%)',
      mesh: 'radial-gradient(at 20% 20%, rgba(249, 115, 22, 0.06) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(99, 102, 241, 0.06) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(20, 184, 166, 0.04) 0px, transparent 60%)',
    },

    accent: {
      solid: 'linear-gradient(135deg, #F97316 0%, #EAB308 100%)',
      soft: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(234, 179, 8, 0.15) 100%)',
      glow: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(234, 179, 8, 0.3) 100%)',
    },

    palette: {
      orange: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
      amber: 'linear-gradient(135deg, #EAB308 0%, #FCD34D 100%)',
      yellow: 'linear-gradient(135deg, #FACC15 0%, #FDE68A 100%)',
      lime: 'linear-gradient(135deg, #84CC16 0%, #BEF264 100%)',
      green: 'linear-gradient(135deg, #22C55E 0%, #86EFAC 100%)',
      teal: 'linear-gradient(135deg, #14B8A6 0%, #5EEAD4 100%)',
      cyan: 'linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)',
      sky: 'linear-gradient(135deg, #38BDF8 0%, #7DD3FC 100%)',
      blue: 'linear-gradient(135deg, #3B82F6 0%, #93C5FD 100%)',
      indigo: 'linear-gradient(135deg, #6366F1 0%, #A5B4FC 100%)',
      violet: 'linear-gradient(135deg, #8B5CF6 0%, #C4B5FD 100%)',
      purple: 'linear-gradient(135deg, #A855F7 0%, #D8B4FE 100%)',
      pink: 'linear-gradient(135deg, #EC4899 0%, #F9A8D4 100%)',
      rose: 'linear-gradient(135deg, #F43F5E 0%, #FDA4AF 100%)',
      gray: 'linear-gradient(135deg, #64748B 0%, #94A3B8 100%)',
    },
  },

  shadow: {
    neu: {
      raised: '6px 6px 14px rgba(185, 188, 205, 0.7), -6px -6px 14px rgba(255, 255, 255, 0.85)',
      raisedLg:
        '12px 12px 28px rgba(185, 188, 205, 0.7), -12px -12px 28px rgba(255, 255, 255, 0.85)',
      inset:
        'inset 4px 4px 10px rgba(185, 188, 205, 0.7), inset -4px -4px 10px rgba(255, 255, 255, 0.85)',
      insetSm:
        'inset 2px 2px 6px rgba(185, 188, 205, 0.7), inset -2px -2px 6px rgba(255, 255, 255, 0.85)',
    },
    sm: '0 1px 3px rgba(28, 31, 46, 0.08), 0 1px 2px rgba(28, 31, 46, 0.04)',
    md: '0 4px 6px rgba(28, 31, 46, 0.07), 0 2px 4px rgba(28, 31, 46, 0.04)',
    lg: '0 10px 15px rgba(28, 31, 46, 0.08), 0 4px 6px rgba(28, 31, 46, 0.04)',
    xl: '0 20px 25px rgba(28, 31, 46, 0.08), 0 8px 10px rgba(28, 31, 46, 0.04)',
    accent: '0 4px 20px rgba(249, 115, 22, 0.35)',
    glass: '0 8px 32px rgba(28, 31, 46, 0.08)',
    palette: {
      orange: '0 4px 20px rgba(249, 115, 22, 0.35)',
      amber: '0 4px 20px rgba(234, 179, 8, 0.35)',
      yellow: '0 4px 20px rgba(250, 204, 21, 0.35)',
      lime: '0 4px 20px rgba(132, 204, 22, 0.35)',
      green: '0 4px 20px rgba(34, 197, 94, 0.35)',
      teal: '0 4px 20px rgba(20, 184, 166, 0.35)',
      cyan: '0 4px 20px rgba(6, 182, 212, 0.35)',
      sky: '0 4px 20px rgba(56, 189, 248, 0.35)',
      blue: '0 4px 20px rgba(59, 130, 246, 0.35)',
      indigo: '0 4px 20px rgba(99, 102, 241, 0.35)',
      violet: '0 4px 20px rgba(139, 92, 246, 0.35)',
      purple: '0 4px 20px rgba(168, 85, 247, 0.35)',
      pink: '0 4px 20px rgba(236, 72, 153, 0.35)',
      rose: '0 4px 20px rgba(244, 63, 94, 0.35)',
      gray: '0 4px 20px rgba(100, 116, 139, 0.25)',
    },
  },
});
