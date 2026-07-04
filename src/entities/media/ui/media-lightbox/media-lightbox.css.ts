import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.92)',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: vars.spacing.lg,
  flexShrink: 0,
});

export const counter = style({
  color: vars.color.text.inverse === undefined ? '#fff' : '#fff',
  fontSize: vars.typography.size.sm,
});

export const stage = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  padding: vars.spacing.lg,
});

export const image = style({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  userSelect: 'none',
});

export const navButton = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
});

export const navButtonLeft = style([navButton, { left: vars.spacing.lg }]);
export const navButtonRight = style([navButton, { right: vars.spacing.lg }]);

export const closeButton = style({
  flexShrink: 0,
});

export const imageWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const loadingOverlay = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.md,
  padding: vars.spacing.lg,
  flexShrink: 0,
});

export const footerInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: vars.spacing.sm,
});

export const footerActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
});

export const metaText = style({
  color: 'rgba(255, 255, 255, 0.6)',
});
