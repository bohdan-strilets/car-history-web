import { useTranslation } from 'react-i18next';

import { Panel, Stack, Text } from '@shared/ui';

import type { ChartTooltipProps } from './chart.types';

export const ChartTooltip = ({ active, payload, label, formatValue }: ChartTooltipProps) => {
  const { t } = useTranslation();

  if (!active || !payload || payload.length === 0) return null;

  return (
    <Panel variant="elevated" radius="sm" p="md" style={{ minWidth: '160px' }}>
      <Stack gap="sm">
        {label && (
          <Text size="sm" weight="bold" color="secondary">
            {label}
          </Text>
        )}

        {payload.map((entry) => (
          <Stack key={entry.dataKey} direction="row" align="center" justify="between" gap="lg">
            <Stack direction="row" align="center" gap="sm">
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: entry.color,
                  display: 'inline-block',
                }}
              />
              <Text size="sm" color="secondary">
                {entry.name}
              </Text>
            </Stack>
            <Text size="sm" weight="bold">
              {formatValue && typeof entry.value === 'number'
                ? formatValue(entry.value)
                : entry.value}
              {!formatValue && ` ${t('enums.currencyShort.PLN')}`}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Panel>
  );
};
