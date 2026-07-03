import { vars } from '@shared/styles';

// Shared spacing — used identically in every chart's <BarChart>/<LineChart> margin prop
export const CHART_MARGIN = {
  top: 8,
  right: 16,
  left: 8,
  bottom: 0,
} as const;

// Shared color tokens, resolved once from the theme contract
export const CHART_COLORS = {
  grid: vars.color.border.subtle,
  axisText: vars.color.text.tertiary,
  cursorFill: vars.color.bg.sunken,
  accent: vars.color.accent.solid,
} as const;

// Shared dash pattern for CartesianGrid
export const CHART_GRID_DASH = '3 3';

// Shared tick styling — identical fontSize/tickLine/axisLine across every axis in every chart
export const CHART_AXIS_TICK_PROPS = {
  fontSize: 12,
  tickLine: false,
  axisLine: false,
} as const;

// Shared cursor highlight for <Tooltip cursor={...} />
export const CHART_CURSOR = {
  fill: CHART_COLORS.cursorFill,
  opacity: 0.4,
} as const;

// Bar corner radius — mutable tuple type required by recharts' RectRadius.
// No `as const` (readonly tuples aren't assignable to recharts' mutable [number,number,number,number]).
// Two variants: vertical bars round the top; horizontal bars (layout="vertical") round the right end.
export const CHART_BAR_RADIUS_TOP: [number, number, number, number] = [6, 6, 0, 0];
export const CHART_BAR_RADIUS_END: [number, number, number, number] = [0, 6, 6, 0];

// Line chart styling — stroke width and dot radius, kept as named constants
// so every line chart in the app looks consistent without repeating raw numbers.
export const CHART_LINE_STROKE_WIDTH = 2;
export const CHART_LINE_DOT_RADIUS = 3;
