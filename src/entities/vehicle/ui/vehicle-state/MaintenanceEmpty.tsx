import { useTranslation } from 'react-i18next';

import { Center, StateView } from '@shared/ui';

import type { MaintenanceEmptyProps } from './vehicle-state.types';

export const MaintenanceEmpty = ({ onAction, isSold }: MaintenanceEmptyProps) => {
  const { t } = useTranslation();

  return (
    <Center style={{ flex: '1' }}>
      <StateView
        icon="wrench"
        title={t('maintenance.empty.title')}
        description={t('maintenance.empty.description')}
        actionLabel={t('maintenance.empty.action')}
        onAction={isSold ? undefined : onAction}
      />
    </Center>
  );
};
