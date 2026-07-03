import type { ComponentProps } from 'react';

import type { XAxis, YAxis } from 'recharts';

// Tooltip types

export type ChartTooltipPayloadItem = {
  dataKey?: string;
  name?: string;
  value?: number;
  color?: string;
};

export type ChartTooltipProps = {
  active?: boolean;
  payload?: ChartTooltipPayloadItem[];
  label?: string;
  formatValue?: (value: number) => string;
};

// Legend types

export type ChartLegendPayloadItem = {
  value?: string;
  color?: string;
};

export type ChartLegendProps = {
  payload?: ChartLegendPayloadItem[];
};

// Grid and axis types

export type ChartGridProps = {
  horizontal?: boolean;
  vertical?: boolean;
};

export type ChartXAxisProps = ComponentProps<typeof XAxis>;

export type ChartYAxisProps = ComponentProps<typeof YAxis>;
