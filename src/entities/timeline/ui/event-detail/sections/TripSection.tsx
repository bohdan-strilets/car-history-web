import { useTranslation } from 'react-i18next';

import { TRIP_PURPOSE_CONFIG } from '@entities/timeline';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { TripSectionProps } from './sections.types';

export const TripSection = ({ details }: TripSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, TRIP_PURPOSE_CONFIG, details.purpose);

  return (
    <InfoSection title={t('timeline.detail.sections.trip')}>
      <InfoRow
        label={t('timeline.fields.purpose')}
        icon={config?.icon}
        iconColor={config?.color || 'gray'}
        value={config?.label || t(`enums.tripPurpose.${details.purpose}`)}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.distanceKm')}
        icon="road"
        iconColor="teal"
        value={`${details.distanceKm} ${t('units.km')}`}
        bottomDivider
      />
      {details.startLocation && (
        <InfoRow
          label={t('timeline.fields.startLocation')}
          icon="mapPin"
          iconColor="green"
          value={details.startLocation}
          bottomDivider
        />
      )}
      {details.endLocation && (
        <InfoRow
          label={t('timeline.fields.endLocation')}
          icon="mapPin"
          iconColor="rose"
          value={details.endLocation}
          bottomDivider
        />
      )}
      <InfoRow
        label={t('timeline.fields.startMileage')}
        icon="road"
        iconColor="gray"
        value={`${details.startMileage.toLocaleString()} ${t('units.km')}`}
        bottomDivider
      />
      <InfoRow
        label={t('timeline.fields.endMileage')}
        icon="road"
        iconColor="gray"
        value={`${details.endMileage.toLocaleString()} ${t('units.km')}`}
      />
    </InfoSection>
  );
};
