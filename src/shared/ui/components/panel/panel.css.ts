import { vars } from '@shared/styles';
import { style } from '@vanilla-extract/css';

const { duration, easing } = vars.transition;
const baseInOut = `${duration.base} ${easing.inOut}`;

export const hoverableStyles = style({
  cursor: 'pointer',
  transition: `box-shadow ${baseInOut}, transform ${baseInOut}`,

  ':hover': {
    boxShadow: vars.shadow.neu.raisedLg,
    transform: 'translateY(-1px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});
