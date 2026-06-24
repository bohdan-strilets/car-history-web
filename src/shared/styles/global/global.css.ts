import { globalStyle } from '@vanilla-extract/css';

import { vars } from '../contract';

// Base
globalStyle('html, body', {
  height: '100%',
  backgroundColor: vars.color.bg.canvas,
  color: vars.color.text.primary,
  fontFamily: vars.typography.font.body,
  fontSize: vars.typography.size.md,
  fontWeight: vars.typography.weight.regular,
  lineHeight: vars.typography.height.normal,
  transition: `background-color ${vars.transition.duration.base} ${vars.transition.easing.inOut}, color ${vars.transition.duration.base} ${vars.transition.easing.inOut}`,
});

// Selection
globalStyle('::selection', {
  backgroundColor: vars.color.accent.soft,
  color: vars.color.accent.solid,
});

// Scrollbar
globalStyle('::-webkit-scrollbar', {
  width: '6px',
  height: '6px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: 'transparent',
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: vars.color.border.base,
  borderRadius: vars.radius.pill,
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: vars.color.border.strong,
});

// Focus visible
globalStyle(':focus-visible', {
  outline: 'none',
  boxShadow: `0 0 0 2px ${vars.color.bg.canvas}, 0 0 0 4px ${vars.color.border.focus}`,
});

globalStyle('input:focus-visible, textarea:focus-visible', {
  outline: 'none',
  boxShadow: 'none',
});

// Placeholder
globalStyle('::placeholder', {
  color: vars.color.text.tertiary,
  opacity: 1,
});

// Disabled
globalStyle(':disabled', {
  opacity: 0.5,
  cursor: 'not-allowed',
});

// Typography defaults
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.typography.font.display,
  fontWeight: vars.typography.weight.bold,
  lineHeight: vars.typography.height.tight,
  letterSpacing: vars.typography.spacing.tight,
  color: vars.color.text.primary,
});

globalStyle('p', {
  lineHeight: vars.typography.height.relaxed,
  color: vars.color.text.secondary,
});

globalStyle('a', {
  color: vars.color.accent.solid,
  transition: `color ${vars.transition.duration.fast} ${vars.transition.easing.inOut}`,
});

globalStyle('a:hover', {
  color: vars.color.text.primary,
});

globalStyle('strong, b', {
  fontWeight: vars.typography.weight.semibold,
});

globalStyle('small', {
  fontSize: vars.typography.size.sm,
  color: vars.color.text.tertiary,
});

globalStyle('code', {
  fontSize: vars.typography.size.sm,
  backgroundColor: vars.color.bg.sunken,
  borderRadius: vars.radius.sm,
  padding: `2px 6px`,
  color: vars.color.accent.solid,
});

// Form elements

globalStyle('input[type="number"]', {
  MozAppearance: 'textfield',
});

globalStyle(
  'input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button',
  {
    WebkitAppearance: 'none',
    margin: 0,
  },
);

// Autofill

globalStyle('input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus', {
  WebkitBoxShadow: `0 0 0px 1000px ${vars.color.bg.sunken} inset`,
  boxShadow: vars.shadow.neu.inset,
  borderRadius: vars.radius.md,
  WebkitTextFillColor: vars.color.text.primary,
  caretColor: vars.color.text.primary,
  transition: 'background-color 5000s ease-in-out 0s',
});
