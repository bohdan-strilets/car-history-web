import { YAxis } from 'recharts';

import { CHART_AXIS_TICK_PROPS, CHART_COLORS } from './chart.theme';

import type { ChartYAxisProps } from './chart.types';

export const ChartYAxis = (props: ChartYAxisProps) => {
  return <YAxis stroke={CHART_COLORS.axisText} {...CHART_AXIS_TICK_PROPS} {...props} />;
};
