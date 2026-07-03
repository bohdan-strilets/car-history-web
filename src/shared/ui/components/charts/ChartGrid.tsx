import { CartesianGrid } from 'recharts';

import { CHART_COLORS, CHART_GRID_DASH } from './chart.theme';

import type { ChartGridProps } from './chart.types';

export const ChartGrid = ({ horizontal = true, vertical = true }: ChartGridProps) => {
  return (
    <CartesianGrid
      strokeDasharray={CHART_GRID_DASH}
      stroke={CHART_COLORS.grid}
      horizontal={horizontal}
      vertical={vertical}
    />
  );
};
