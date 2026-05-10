import { globalStyle } from '@vanilla-extract/css';

// Box sizing
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

// Root
globalStyle(':root', {
  lineHeight: '1.5',
  textSizeAdjust: '100%',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

// HTML & Body
globalStyle('html', {
  height: '100%',
  scrollBehavior: 'smooth',
});

globalStyle('body', {
  height: '100%',
  lineHeight: 'inherit',
});

// Typography
globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

// Links
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'inherit',
});

// Lists
globalStyle('ol, ul, menu', {
  listStyle: 'none',
});

// Media
globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  display: 'block',
  verticalAlign: 'middle',
});

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

// Forms
globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  color: 'inherit',
  margin: 0,
  padding: 0,
});

globalStyle('button, select', {
  textTransform: 'none',
});

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  WebkitAppearance: 'button',
  backgroundColor: 'transparent',
  backgroundImage: 'none',
  cursor: 'pointer',
  border: 'none',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
  pointerEvents: 'none',
});

globalStyle(':focus-visible', {
  outline: 'none',
});

globalStyle('input, textarea', {
  outline: 'none',
  border: 'none',
  background: 'none',
});

globalStyle('textarea', {
  resize: 'vertical',
});

globalStyle('select', {
  appearance: 'none',
});

// Table
globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

// HR
globalStyle('hr', {
  height: 0,
  color: 'inherit',
  borderTopWidth: '1px',
});

// Pre & Code
globalStyle('pre, code, kbd, samp', {
  fontFamily: 'monospace',
  fontSize: '1em',
});

globalStyle('pre', {
  overflowX: 'auto',
});

// Hidden
globalStyle('[hidden]', {
  display: 'none',
});

// Root app
globalStyle('#root', {
  height: '100%',
  isolation: 'isolate',
});
