import { useTranslation } from 'react-i18next';

import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  CHART_BAR_RADIUS_TOP,
  CHART_COLORS,
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

import type { CostsByMonthChartProps } from './vehicle-charts.types';

export const CostsByMonthChart = ({ data }: CostsByMonthChartProps) => {
  const { t } = useTranslation();

  if (data.length === 0) return null;

  return (
    <Panel>
      <Stack gap="lg">
        <Text weight="bold" size="lg">
          {t('stats.charts.costsByMonth')}
        </Text>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={CHART_MARGIN}>
            <ChartGrid vertical={false} />
            <ChartXAxis dataKey="month" />
            <ChartYAxis />
            <Tooltip content={<ChartTooltip />} cursor={CHART_CURSOR} />
            <Bar
              dataKey="totalCost"
              name={t('stats.charts.totalCost')}
              fill={CHART_COLORS.accent}
              radius={CHART_BAR_RADIUS_TOP}
            />
          </BarChart>
        </ResponsiveContainer>
      </Stack>
    </Panel>
  );
};
