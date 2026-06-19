import { useTranslation } from 'react-i18next';

import { REFUEL_TYPE_CONFIG } from '@entities/vehicle';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { RefuelSectionProps } from './sections.types';

export const RefuelSection = ({ details }: RefuelSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, REFUEL_TYPE_CONFIG, details.fuelType);

  return (
    <InfoSection title={t('timeline.detail.sections.refuel')}>
      <InfoRow
        label={t('timeline.fields.liters')}
        icon="droplets"
        iconColor="blue"
        value={`${details.liters} ${t('units.liters')}`}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.pricePerLiter')}
        icon="tag"
        iconColor="amber"
        value={`${details.pricePerLiter} ${t('enums.currencyShort.PLN')}`}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.fuelType')}
        icon={config?.icon || 'fuel'}
        iconColor={config?.color || 'gray'}
        value={config?.label || t(`enums.fuelType.${details.fuelType}`)}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.isFullTank')}
        icon="gauge"
        iconColor="green"
        value={details.isFullTank ? t('common.state.yes') : t('common.state.no')}
      />
    </InfoSection>
  );
};
