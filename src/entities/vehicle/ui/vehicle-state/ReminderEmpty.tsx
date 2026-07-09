import { useTranslation } from 'react-i18next';

import { Center, StateView } from '@shared/ui';

import type { ReminderEmptyProps } from './vehicle-state.types';

export const ReminderEmpty = ({ isSold, onAction }: ReminderEmptyProps) => {
  const { t } = useTranslation();

  return (
    <Center style={{ flex: '1' }}>
      <StateView
        icon="bell"
        title={t('reminder.empty.title')}
        description={t('reminder.empty.description')}
        actionLabel={t('reminder.empty.action')}
        onAction={isSold ? undefined : onAction}
      />
    </Center>
  );
};
