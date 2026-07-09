import { useTranslation } from 'react-i18next';

import { Center, StateView } from '@shared/ui';

import type { TimelineEmptyProps } from './vehicle-state.types';

export const TimelineEmpty = ({ isSold, onAction }: TimelineEmptyProps) => {
  const { t } = useTranslation();

  return (
    <Center style={{ flex: '1' }}>
      <StateView
        icon="clock"
        title={t('timeline.empty.title')}
        description={t('timeline.empty.description')}
        actionLabel={t('timeline.actions.addEvent')}
        onAction={isSold ? undefined : onAction}
      />
    </Center>
  );
};
