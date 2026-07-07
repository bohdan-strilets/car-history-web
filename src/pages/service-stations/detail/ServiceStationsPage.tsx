import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ServiceStationsList, useServiceStationsQuery } from '@entities/service-station';
import { useToggleFavoriteServiceStationMutation } from '@features/service-station';
import { ROUTES } from '@shared/config';
import { Center, Stack, StateView } from '@shared/ui';
import { PageHeader, PageHeaderSkeleton } from '@widgets/page-header';

export const ServiceStationsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data, isPending, isError } = useServiceStationsQuery();
  const toggleFavoriteMutation = useToggleFavoriteServiceStationMutation();

  const stations = data?.data ?? [];
  const isEmpty = !isPending && stations.length === 0;

  if (isPending) return <PageHeaderSkeleton />;

  if (isError)
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
        title={t('serviceStation.list.title')}
        buttonLabel={t('serviceStation.actions.add')}
        buttonIcon="plus"
        onCreate={() => navigate(ROUTES.SERVICE_STATIONS.NEW)}
      />

      {isEmpty ? (
        <Center style={{ flex: '1' }}>
          <StateView
            icon="mapPin"
            title={t('serviceStation.list.empty.title')}
            description={t('serviceStation.list.empty.description')}
            actionLabel={t('serviceStation.actions.add')}
            onAction={() => navigate(ROUTES.SERVICE_STATIONS.NEW)}
          />
        </Center>
      ) : (
        <ServiceStationsList
          stations={stations}
          onToggleFavorite={(station) => toggleFavoriteMutation.mutate(station.id)}
        />
      )}
    </Stack>
  );
};
