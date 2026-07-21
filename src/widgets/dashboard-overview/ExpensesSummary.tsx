import { useTranslation } from 'react-i18next';

import { Grid, Panel, Stack, Text } from '@shared/ui';

import type { ExpensesSummaryProps } from './expenses-summary.types';

export const ExpensesSummary = ({ summary, currency }: ExpensesSummaryProps) => {
  const { t, i18n } = useTranslation();

  const formatAmount = (value: number) =>
    new Intl.NumberFormat(i18n.language, { style: 'currency', currency }).format(value);

  return (
    <Grid columns={{ mobile: '1', tablet: '2' }} gap="lg">
      <Panel p="2xl">
        <Stack gap="sm">
          <Text
            color="tertiary"
            transform="uppercase"
            letterSpacing="widest"
            size="sm"
            weight="semibold"
          >
            {t('dashboard.expenses.currentMonth')}
          </Text>
          <Text size="4xl" weight="extraBold">
            {formatAmount(summary.currentMonth)}
          </Text>
        </Stack>
      </Panel>

      <Panel p="2xl">
        <Stack gap="sm">
          <Text
            color="tertiary"
            transform="uppercase"
            letterSpacing="widest"
            size="sm"
            weight="semibold"
          >
            {t('dashboard.expenses.currentYear')}
          </Text>
          <Text size="4xl" weight="extraBold">
            {formatAmount(summary.currentYear)}
          </Text>
        </Stack>
      </Panel>
    </Grid>
  );
};
