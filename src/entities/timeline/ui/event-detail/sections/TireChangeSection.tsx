import { useTranslation } from 'react-i18next';

import { useFormatDate } from '@shared/hooks';
import { InfoRow } from '@shared/ui';
import { InfoSection } from '@widgets/info-section';

import type { TireChangeSectionProps } from './sections.types';

export const TireChangeSection = ({ details }: TireChangeSectionProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  return (
    <InfoSection title={t('timeline.detail.sections.tireChange')}>
      {details.installedMileage !== null && (
        <InfoRow
          label={t('timeline.fields.installedMileage')}
          icon="road"
          iconColor="green"
          value={`${details.installedMileage.toLocaleString()} ${t('units.km')}`}
          bottomDivider
        />
      )}
      {details.removedMileage !== null && (
        <InfoRow
          label={t('timeline.fields.removedMileage')}
          icon="road"
          iconColor="rose"
          value={`${details.removedMileage.toLocaleString()} ${t('units.km')}`}
          bottomDivider
        />
      )}
      {details.removedDate && (
        <InfoRow
          label={t('timeline.fields.removedDate')}
          icon="calendar"
          iconColor="orange"
          value={formatDate(details.removedDate)}
        />
      )}
    </InfoSection>
  );
};
