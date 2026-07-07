import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { useServiceStationQuery } from '@entities/service-station';
import { UpdateServiceStationForm } from '@features/service-station';
import { ROUTES } from '@shared/config';
import { Center, Stack, StateView } from '@shared/ui';
import { PageHeader, PageHeaderSkeleton } from '@widgets/page-header';

export const ServiceStationEditPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, isPending, isError } = useServiceStationQuery(id ?? '');
  const station = data?.data;

  if (isPending) return <PageHeaderSkeleton />;

  if (isError || !station)
    return (
      <Center style={{ flex: '1' }}>
        <StateView
          icon="alertCircle"
          variant="error"
          title={t('common.error.title')}
          description={t('common.error.description')}
        />
      </Center>
    );

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('serviceStation.edit.title')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.SERVICE_STATIONS.DETAIL(station.id))}
      />
      <UpdateServiceStationForm
        station={station}
        onSuccess={() => navigate(ROUTES.SERVICE_STATIONS.DETAIL(station.id))}
      />
    </Stack>
  );
};
