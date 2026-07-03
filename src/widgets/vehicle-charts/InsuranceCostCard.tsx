import { useTranslation } from 'react-i18next';

import { Panel, Stack, Text } from '@shared/ui';

import type { InsuranceCostCardProps } from './vehicle-charts.types';

export const InsuranceCostCard = ({ insuranceCost }: InsuranceCostCardProps) => {
  const { t } = useTranslation();

  if (insuranceCost.total === 0) return null;

  return (
    <Panel>
      <Stack gap="lg">
        <Text weight="bold" size="lg">
          {t('stats.charts.insuranceCost')} — {insuranceCost.year}
        </Text>

        <Stack direction="row" gap="xl" justify="between">
          <Stack gap="xs">
            <Text size="sm" color="tertiary">
              {t('enums.documentType.INSURANCE_OC')}
            </Text>
            <Text size="lg" weight="bold">
              {insuranceCost.oc.toLocaleString()} {t('enums.currencyShort.PLN')}
            </Text>
          </Stack>

          <Stack gap="xs">
            <Text size="sm" color="tertiary">
              {t('enums.documentType.INSURANCE_AC')}
            </Text>
            <Text size="lg" weight="bold">
              {insuranceCost.ac.toLocaleString()} {t('enums.currencyShort.PLN')}
            </Text>
          </Stack>

          <Stack gap="xs">
            <Text size="sm" color="tertiary">
              {t('stats.charts.total')}
            </Text>
            <Text size="lg" weight="extraBold" color="accent">
              {insuranceCost.total.toLocaleString()} {t('enums.currencyShort.PLN')}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Panel>
  );
};
