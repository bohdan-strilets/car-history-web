import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const mapContainer = style({
  width: '100%',
  height: '500px',
  borderRadius: vars.radius.lg,
  overflow: 'hidden',
});

export const pin = style({
  width: '32px',
  height: '32px',
  borderRadius: '50% 50% 50% 0',
  transform: 'rotate(-45deg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: vars.shadow.md,
  border: '2px solid white',
  cursor: 'pointer',
});

export const pinIcon = style({
  transform: 'rotate(45deg)',
});

export const infoWindowContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.xs,
  padding: vars.spacing.sm,
  minWidth: '180px',
});
