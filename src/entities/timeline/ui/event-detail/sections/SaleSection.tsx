import { useTranslation } from 'react-i18next';

import { PURCHASE_CONFIG } from '@entities/timeline';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { SaleSectionProps } from './sections.types';

export const SaleSection = ({ details }: SaleSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, PURCHASE_CONFIG, details.soldTo);

  return (
    <InfoSection title={t('timeline.detail.sections.sale')}>
      <InfoRow
        label={config?.label || t(`enums.purchaseFrom.${details.soldTo}`)}
        icon={config?.icon}
        iconColor={config?.color || 'gray'}
        value={t(`enums.purchaseFrom.${details.soldTo}`)}
      />
    </InfoSection>
  );
};
