import { useTranslation } from 'react-i18next';

import { CHARGE_TYPE_CONFIG } from '@entities/timeline';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { ChargeSectionProps } from './sections.types';

export const ChargeSection = ({ details }: ChargeSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, CHARGE_TYPE_CONFIG, details.chargeType);

  return (
    <InfoSection title={t('timeline.detail.sections.charge')}>
      <InfoRow
        label={t('timeline.fields.kWh')}
        icon="zap"
        iconColor="yellow"
        value={`${details.kWh} ${t('units.kwh')}`}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.pricePerKWh')}
        icon="tag"
        iconColor="amber"
        value={`${details.pricePerKWh} ${t('enums.currencyShort.PLN')}`}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.chargeType')}
        icon={config?.icon || 'plug'}
        iconColor={config?.color || 'gray'}
        value={config?.label || t(`enums.chargeType.${details.chargeType}`)}
        bottomDivider
      />
      {details.chargerNetwork && (
        <InfoRow
          label={t('timeline.fields.chargerNetwork')}
          icon="evCharger"
          iconColor="teal"
          value={details.chargerNetwork}
          bottomDivider
        />
      )}
      {details.batteryBefore !== null && (
        <InfoRow
          label={t('timeline.fields.batteryBefore')}
          icon="batteryLow"
          iconColor="orange"
          value={`${details.batteryBefore} ${t('units.percent')}`}
          bottomDivider
        />
      )}
      {details.batteryAfter !== null && (
        <InfoRow
          label={t('timeline.fields.batteryAfter')}
          icon="batteryFull"
          iconColor="green"
          value={`${details.batteryAfter} ${t('units.percent')}`}
        />
      )}
    </InfoSection>
  );
};
