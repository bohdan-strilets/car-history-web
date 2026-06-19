import { useTranslation } from 'react-i18next';

import { useFormatDate } from '@shared/hooks';
import { InfoRow } from '@shared/ui';
import { InfoSection } from '@widgets/info-section';

import type { GeneralSectionProps } from './sections.types';

export const GeneralSection = ({ event }: GeneralSectionProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  return (
    <InfoSection title={t('timeline.detail.sections.general')}>
      <InfoRow
        label={t('fields.date')}
        icon="calendar"
        iconColor="blue"
        value={formatDate(event.eventDate)}
        bottomDivider
      />
      <InfoRow
        label={t('fields.mileage')}
        icon="road"
        iconColor="teal"
        value={`${event.mileage.toLocaleString()} ${t('units.km')}`}
        bottomDivider
      />
      {event.cost && (
        <InfoRow
          label={t('fields.cost')}
          icon="banknote"
          iconColor="green"
          value={`${event.cost} ${t('enums.currencyShort.PLN')}`}
          bottomDivider={!!event.serviceStation || !!event.description}
        />
      )}
      {event.serviceStation && (
        <InfoRow
          label={t('fields.serviceStation')}
          icon="mapPin"
          iconColor="orange"
          value={event.serviceStation.name}
          bottomDivider={!!event.description}
        />
      )}
      {event.description && (
        <InfoRow
          label={t('fields.description')}
          icon="fileText"
          iconColor="gray"
          value={event.description}
        />
      )}
    </InfoSection>
  );
};
