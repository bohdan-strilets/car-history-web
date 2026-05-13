import { radialGradient, rgba } from '@shared/lib/css';
import { media } from '@shared/styles';
import { vars } from '@shared/styles/contract';
import { style } from '@vanilla-extract/css';

const accentRgb = rgba(vars.color.accent.rgb, 0.15);
const glowGradient = radialGradient({
  shape: 'ellipse',
  position1: '30% 50%',
  color1: accentRgb,
  stop1: '0%',
  color2: 'transparent',
  stop2: '60%',
});

export const container = style({
  position: 'relative',
  overflow: 'hidden',

  display: 'none',

  background: vars.gradient.bg.mesh,
  backgroundColor: vars.color.bg.surface,

  '@media': {
    [media.laptop]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: vars.spacing['4xl'],
    },
  },
});

export const glow = style({
  position: 'absolute',
  inset: 0,
  background: glowGradient,
  pointerEvents: 'none',
});

export const content = style({
  position: 'relative',
  zIndex: 1,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,

  height: '100%',
});
