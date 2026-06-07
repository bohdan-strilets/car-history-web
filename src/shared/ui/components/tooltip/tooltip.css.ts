import { style } from '@vanilla-extract/css';

import { vars } from '@shared/styles';

export const tooltip = style({
  position: 'fixed',
  zIndex: vars.zIndex.tooltip,

  padding: `${vars.spacing.xs} ${vars.spacing.md}`,

  color: vars.color.text.primary,
  backgroundColor: vars.color.bg.elevated,
  border: `0.5px solid ${vars.color.border.base}`,
  borderRadius: vars.radius.sm,
  boxShadow: vars.shadow.md,

  fontSize: vars.typography.size.sm,
  fontWeight: vars.typography.weight.medium,
  whiteSpace: 'nowrap',

  pointerEvents: 'none',
});
