import { useTranslation } from 'react-i18next';

import { StateView } from '@shared/ui';

import type { ServiceStationErrorProps } from './service-station-state.types';

export const ServiceStationError = ({ onAction }: ServiceStationErrorProps) => {
  const { t } = useTranslation();

  return (
    <StateView
      icon="alertCircle"
      variant="error"
      title={t('common.error.title')}
      description={t('common.error.description')}
      actionLabel={t('common.actions.refresh')}
      onAction={onAction}
    />
  );
};
