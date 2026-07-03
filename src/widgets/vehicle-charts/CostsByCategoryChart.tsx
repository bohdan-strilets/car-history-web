import { useTranslation } from 'react-i18next';

import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import { TIMELINE_EVENT_TYPE_CONFIG } from '@entities/timeline';
import {
  CHART_BAR_RADIUS_END,
  CHART_CURSOR,
  CHART_MARGIN,
  ChartGrid,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  Panel,
  Stack,
  Text,
} from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import type { CostsByCategoryChartProps } from './vehicle-charts.types';

export const CostsByCategoryChart = ({ data }: CostsByCategoryChartProps) => {
  const { t } = useTranslation();

  if (data.length === 0) return null;

  const chartData = data.map((row) => {
    const config = getConfigOption(t, TIMELINE_EVENT_TYPE_CONFIG, row.type);

    return {
      ...row,
      label: config?.label,
      color: config?.color,
    };
  });

  return (
    <Panel>
      <Stack gap="lg">
        <Text weight="bold" size="lg">
          {t('stats.charts.costsByCategory')}
        </Text>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={chartData} layout="vertical" margin={CHART_MARGIN}>
            <ChartGrid horizontal={false} />
            <ChartXAxis type="number" />
            <ChartYAxis type="category" dataKey="label" width={100} />
            <Tooltip content={<ChartTooltip />} cursor={CHART_CURSOR} />
            <Bar
              dataKey="totalCost"
              name={t('stats.charts.totalCost')}
              radius={CHART_BAR_RADIUS_END}
            >
              {chartData.map((entry) => (
                <Cell key={entry.type} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </Panel>
  );
};
