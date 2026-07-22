import { useTranslation } from 'react-i18next';

import { TIRE_CHANGE_TYPE_CONFIG } from '@entities/tire';
import { useFormatDate } from '@entities/workspace';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { TireChangeSectionProps } from './sections.types';

export const TireChangeSection = ({ details }: TireChangeSectionProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  const changeTypeConfig = details.changeType
    ? getConfigOption(t, TIRE_CHANGE_TYPE_CONFIG, details.changeType)
    : undefined;

  return (
    <InfoSection title={t('timeline.detail.sections.tireChange')}>
      {changeTypeConfig && (
        <InfoRow
          label={t('fields.type')}
          icon={changeTypeConfig.icon ?? 'circle'}
          iconColor={changeTypeConfig.color}
          value={changeTypeConfig.label}
          bottomDivider
        />
      )}
      {details.installedMileage != null && (
        <InfoRow
          label={t('timeline.fields.installedMileage')}
          icon="road"
          iconColor="green"
          value={`${details.installedMileage.toLocaleString()} ${t('units.km')}`}
          bottomDivider={!!(details.removedMileage != null || details.removedDate)}
        />
      )}
      {details.removedMileage != null && (
        <InfoRow
          label={t('timeline.fields.removedMileage')}
          icon="road"
          iconColor="rose"
          value={`${details.removedMileage.toLocaleString()} ${t('units.km')}`}
          bottomDivider={!!details.removedDate}
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
