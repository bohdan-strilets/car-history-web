import { useTranslation } from 'react-i18next';

import { Center, StateView } from '@shared/ui';

import type { TiresEmptyProps } from './vehicle-state.types';

export const TiresEmpty = ({ onAction, isSold }: TiresEmptyProps) => {
  const { t } = useTranslation();

  return (
    <Center style={{ flex: '1' }}>
      <StateView
        icon="circle"
        title={t('tire.empty.title')}
        description={t('tire.empty.description')}
        actionLabel={t('tire.empty.action')}
        onAction={isSold ? undefined : onAction}
      />
    </Center>
  );
};
