import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

const { duration, easing } = vars.transition;
const fastInOut = `${duration.fast} ${easing.inOut}`;

export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: vars.spacing.sm,
  height: '58px',

  borderRadius: vars.radius.md,
  backgroundColor: vars.color.bg.base,
  boxShadow: vars.shadow.md,

  cursor: 'pointer',
  transition: `box-shadow ${fastInOut}`,

  ':hover': {
    boxShadow: vars.shadow.lg,
  },
});
