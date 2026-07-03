import { useTranslation } from 'react-i18next';

import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

import {
  CHART_COLORS,
  CHART_LINE_DOT_RADIUS,
  CHART_LINE_STROKE_WIDTH,
  CHART_MARGIN,
  ChartGrid,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  Panel,
  Stack,
  Text,
} from '@shared/ui';

import type { FuelConsumptionChartProps } from './vehicle-charts.types';

export const FuelConsumptionChart = ({ fuelConsumption }: FuelConsumptionChartProps) => {
  const { t } = useTranslation();

  if (fuelConsumption.trend.length === 0) return null;

  return (
    <Panel>
      <Stack gap="lg">
        <Stack direction="row" align="center" justify="between">
          <Text weight="bold" size="lg">
            {t('stats.charts.fuelConsumption')}
          </Text>
          {fuelConsumption.avgLPer100Km != null && (
            <Text size="sm" color="tertiary">
              {t('stats.charts.avg')}: {fuelConsumption.avgLPer100Km.toFixed(1)}{' '}
              {t('units.lper100km')}
            </Text>
          )}
        </Stack>

        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={fuelConsumption.trend} margin={CHART_MARGIN}>
            <ChartGrid vertical={false} />
            <ChartXAxis dataKey="date" />
            <ChartYAxis />
            <Tooltip
              content={
                <ChartTooltip formatValue={(v) => `${v.toFixed(1)} ${t('units.lper100km')}`} />
              }
            />
            <Line
              type="monotone"
              dataKey="consumption"
              name={t('stats.charts.fuelConsumption')}
              stroke={CHART_COLORS.accent}
              strokeWidth={CHART_LINE_STROKE_WIDTH}
              dot={{ r: CHART_LINE_DOT_RADIUS, fill: CHART_COLORS.accent }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Stack>
    </Panel>
  );
};
