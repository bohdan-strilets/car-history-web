import { keyframes, style } from '@vanilla-extract/css';

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.6 },
});

const shimmer = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-4px)' },
});

export const sparkle = style({
  display: 'inline-block',
  animation: `${float} 2s ease-in-out infinite`,
});

export const shimmerBg = style({
  backgroundSize: '200% 100%',
  animation: `${shimmer} 3s linear infinite`,
});

export const pulseButton = style({
  animation: `${pulse} 2s ease-in-out infinite`,
});
