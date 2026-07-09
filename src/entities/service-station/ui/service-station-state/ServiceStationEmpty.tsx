import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { StateView } from '@shared/ui';

export const ServiceStationEmpty = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="mapPin"
      title={t('serviceStation.list.empty.title')}
      description={t('serviceStation.list.empty.description')}
      actionLabel={t('serviceStation.actions.add')}
      onAction={() => navigate(ROUTES.SERVICE_STATIONS.NEW)}
    />
  );
};
