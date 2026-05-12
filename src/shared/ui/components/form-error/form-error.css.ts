import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.spacing.sm,

  width: '100%',
  padding: vars.spacing.md,

  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.semantic.danger.soft,
  color: vars.color.semantic.danger.solid,

  fontFamily: vars.typography.font.body,
  fontSize: vars.typography.size.sm,
  fontWeight: vars.typography.weight.medium,
});
