import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.spacing.md,

  padding: vars.spacing['3xl'],

  borderRadius: vars.radius.xl,
  backgroundColor: vars.color.bg.base,
  boxShadow: vars.shadow.neu.raised,

  cursor: 'text',
});

export const nativeInput = style({
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: 0,
  height: 0,
});

export const valueText = style({
  fontSize: vars.typography.size['6xl'],
  fontWeight: vars.typography.weight.bold,
  fontFamily: vars.typography.font.display,

  lineHeight: 1,
  textAlign: 'center',

  minWidth: '1ch',
  color: vars.color.text.primary,
  cursor: 'text',
});
