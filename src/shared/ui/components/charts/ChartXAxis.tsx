import { XAxis } from 'recharts';

import { CHART_AXIS_TICK_PROPS, CHART_COLORS } from './chart.theme';

import type { ChartXAxisProps } from './chart.types';

export const ChartXAxis = (props: ChartXAxisProps) => {
  return <XAxis stroke={CHART_COLORS.axisText} {...CHART_AXIS_TICK_PROPS} {...props} />;
};
