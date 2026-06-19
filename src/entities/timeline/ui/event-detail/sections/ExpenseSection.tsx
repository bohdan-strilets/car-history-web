import { useTranslation } from 'react-i18next';

import { EXPENSE_CATEGORY_CONFIG } from '@entities/timeline';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section';

import type { ExpenseSectionProps } from './sections.types';

export const ExpenseSection = ({ details }: ExpenseSectionProps) => {
  const { t } = useTranslation();
  const config = getConfigOption(t, EXPENSE_CATEGORY_CONFIG, details.expenseCategory);

  return (
    <InfoSection title={t('timeline.detail.sections.expense')}>
      <InfoRow
        label={t('timeline.fields.expenseCategory')}
        icon={config?.icon}
        iconColor={config?.color || 'gray'}
        value={config?.label || t(`enums.expenseCategory.${details.expenseCategory}`)}
      />
    </InfoSection>
  );
};
