import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

const { duration, easing } = vars.transition;
const fastInOut = `${duration.fast} ${easing.inOut}`;

export const root = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,

  padding: vars.spacing.md,
  width: '100%',

  borderRadius: vars.radius.md,
  color: vars.color.text.secondary,

  transition: `color ${fastInOut}, background-color ${fastInOut}`,

  ':hover': {
    color: vars.color.text.primary,
    backgroundColor: vars.color.accent.soft,
  },
});

export const labelText = style({
  fontSize: vars.typography.size.md,
  fontWeight: vars.typography.weight.medium,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
