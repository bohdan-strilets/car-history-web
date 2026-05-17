import { vars } from '@shared/styles';
import { keyframes, style } from '@vanilla-extract/css';

const pulseAnimation = keyframes({
  '0%': {
    transform: 'scale(1)',
    boxShadow: `0 0 0 0 rgba(${vars.color.semantic.success.rgb}, 0.4)`,
  },
  '70%': {
    transform: 'scale(1.05)',
    boxShadow: `0 0 0 30px rgba(${vars.color.semantic.success.rgb}, 0)`,
  },
  '100%': {
    transform: 'scale(1)',
    boxShadow: `0 0 0 0 rgba(${vars.color.semantic.success.rgb}, 0)`,
  },
});

export const root = style({
  paddingBlock: vars.spacing['2xl'],
});

export const pulse = style({
  borderRadius: vars.radius.pill,
  animation: `${pulseAnimation} 2s ease-in-out infinite`,
});
