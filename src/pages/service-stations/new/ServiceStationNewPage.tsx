import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { CreateServiceStationForm } from '@features/service-station';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

export const ServiceStationNewPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('serviceStation.new.title')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.SERVICE_STATIONS.ROOT)}
      />
      <CreateServiceStationForm onSuccess={() => navigate(ROUTES.SERVICE_STATIONS.ROOT)} />
    </Stack>
  );
};
