import { useTranslation } from 'react-i18next';

import { SERVICE_CATEGORY_CONFIG } from '@entities/timeline';
import { InfoRow, Stack } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { ServiceSectionProps } from './sections.types';

export const ServiceSection = ({ details }: ServiceSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, SERVICE_CATEGORY_CONFIG, details.category);

  const hasWorks = details.works.length > 0;
  const hasParts = details.parts.length > 0;

  return (
    <Stack gap="3xl">
      <InfoSection title={t('timeline.detail.sections.service')}>
        <InfoRow
          label={t('timeline.fields.serviceCategory')}
          icon={config?.icon}
          iconColor={config?.color}
          value={config?.label}
        />
      </InfoSection>

      {hasWorks && (
        <InfoSection title={t('timeline.fields.works')}>
          {details.works.map((work, index) => (
            <InfoRow
              key={index}
              label={work.name}
              value={work.price}
              description={work?.description}
              bottomDivider={index !== details.works.length - 1}
            />
          ))}
        </InfoSection>
      )}

      {hasParts && (
        <InfoSection title={t('timeline.fields.parts')}>
          {details.parts.map((part, index) => (
            <InfoRow
              key={index}
              label={part.name}
              value={part.price}
              description={part?.description}
              bottomDivider={index !== details.parts.length - 1}
            />
          ))}
        </InfoSection>
      )}
    </Stack>
  );
};
