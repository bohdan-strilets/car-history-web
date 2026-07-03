import { Stack, Text } from '@shared/ui';

import type { ChartLegendProps } from './chart.types';

export const ChartLegend = ({ payload }: ChartLegendProps) => {
  if (!payload || payload.length === 0) return null;

  return (
    <Stack direction="row" align="center" justify="center" gap="lg">
      {payload.map((entry) => (
        <Stack key={entry.value} direction="row" align="center" gap="sm">
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '2px',
              backgroundColor: entry.color,
              display: 'inline-block',
            }}
          />
          <Text size="sm" color="secondary">
            {entry.value}
          </Text>
        </Stack>
      ))}
    </Stack>
  );
};
