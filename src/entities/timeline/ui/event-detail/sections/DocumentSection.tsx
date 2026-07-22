import { useTranslation } from 'react-i18next';

import { DOCUMENT_TYPE_CONFIG } from '@entities/timeline';
import { useFormatDate } from '@entities/workspace';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { DocumentSectionProps } from './sections.types';

export const DocumentSection = ({ details }: DocumentSectionProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const config = getConfigOption(t, DOCUMENT_TYPE_CONFIG, details.documentType);

  return (
    <InfoSection title={t('timeline.detail.sections.document')}>
      <InfoRow
        label={t('timeline.fields.documentType')}
        icon={config?.icon || 'fileText'}
        iconColor={config?.color || 'gray'}
        value={config?.label || t(`enums.documentType.${details.documentType}`)}
        bottomDivider
      />
      {details.documentNumber && (
        <InfoRow
          label={t('timeline.fields.documentNumber')}
          icon="hash"
          iconColor="blue"
          value={details.documentNumber}
          bottomDivider
        />
      )}
      {details.issuedBy && (
        <InfoRow
          label={t('timeline.fields.issuedBy')}
          icon="building"
          iconColor="gray"
          value={details.issuedBy}
          bottomDivider
        />
      )}
      {details.issueDate && (
        <InfoRow
          label={t('timeline.fields.issueDate')}
          icon="calendar"
          iconColor="teal"
          value={formatDate(details.issueDate)}
          bottomDivider
        />
      )}
      {details.expireDate && (
        <InfoRow
          label={t('timeline.fields.expireDate')}
          icon="calendarClock"
          iconColor="orange"
          value={formatDate(details.expireDate)}
        />
      )}
    </InfoSection>
  );
};
