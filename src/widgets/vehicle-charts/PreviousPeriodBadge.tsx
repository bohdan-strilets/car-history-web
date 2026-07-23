import { useTranslation } from 'react-i18next';

import { Badge, Icon, Stack, Text } from '@shared/ui';

import type { PreviousPeriodBadgeProps } from './vehicle-charts.types';

export const PreviousPeriodBadge = ({ comparison }: PreviousPeriodBadgeProps) => {
  const { t } = useTranslation();

  if (!comparison || comparison.changePercent === null) return null;

  const isIncrease = comparison.changePercent > 0;
  const color = isIncrease ? 'danger' : 'success';
  const icon = isIncrease ? 'trendingUp' : 'trendingDown';
  const prefix = isIncrease ? '+' : '';

  return (
    <Badge soft={color} size="xl">
      <Stack direction="row" align="center" gap="xs">
        <Icon name={icon} size="sm" color={color} weight="bold" />
        <Text size="xs" color={color} weight="bold">
          {prefix}
          {comparison.changePercent}%
        </Text>
        <Text size="xs" color="tertiary">
          {t('stats.summary.vsPreviousPeriod')}
        </Text>
      </Stack>
    </Badge>
  );
};
