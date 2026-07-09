import { useTranslation } from 'react-i18next';

import { Center, StateView } from '@shared/ui';

import type { TabsErrorProps } from './vehicle-state.types';

export const TabsError = ({ onAction }: TabsErrorProps) => {
  const { t } = useTranslation();

  return (
    <Center style={{ flex: '1' }}>
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('common.error.title')}
        description={t('common.error.description')}
        actionLabel={t('common.actions.refresh')}
        onAction={onAction}
      />
    </Center>
  );
};
