import { useTranslation } from 'react-i18next';

import { PURCHASE_CONFIG } from '@entities/timeline';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { PurchaseSectionProps } from './sections.types';

export const PurchaseSection = ({ details }: PurchaseSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, PURCHASE_CONFIG, details.purchasedFrom);

  return (
    <InfoSection title={t('timeline.detail.sections.purchase')}>
      <InfoRow
        label={t('timeline.fields.purchasedFrom')}
        icon={config?.icon}
        iconColor={config?.color || 'gray'}
        value={config?.label || t(`enums.purchaseFrom.${details.purchasedFrom}`)}
        bottomDivider={!!details.country}
      />
      {details.country && (
        <InfoRow
          label={t('timeline.fields.country')}
          icon="globe"
          iconColor="blue"
          value={details.country}
        />
      )}
    </InfoSection>
  );
};
