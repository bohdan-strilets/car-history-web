import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const dropzone = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,
  padding: vars.spacing.xl,
  borderRadius: vars.radius.lg,
  border: `2px dashed ${vars.color.border.base}`,
  backgroundColor: vars.color.bg.sunken,
  cursor: 'pointer',
  transition: `border-color ${vars.transition.duration.fast} ${vars.transition.easing.inOut}`,
  selectors: {
    '&:hover': {
      borderColor: vars.color.accent.solid,
    },
  },
});

export const dropzoneActive = style({
  borderColor: vars.color.accent.solid,
  backgroundColor: vars.color.accent.soft,
});

export const hiddenInput = style({
  display: 'none',
});

export const queueList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing.sm,
});

export const queueItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.sm,
  padding: vars.spacing.sm,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.bg.surface,
});

export const queueThumbnail = style({
  width: '48px',
  height: '48px',
  borderRadius: vars.radius.sm,
  objectFit: 'cover',
  flexShrink: 0,
});

export const queueInfo = style({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const queueMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.xs,
});

export const queueStatus = style({
  flexShrink: 0,
});

export const removeButton = style({
  flexShrink: 0,
});
