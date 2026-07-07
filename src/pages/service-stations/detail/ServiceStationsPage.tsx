import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  ServiceStationsList,
  ServiceStationsMap,
  useServiceStationsQuery,
} from '@entities/service-station';
import { useToggleFavoriteServiceStationMutation } from '@features/service-station';
import { ROUTES } from '@shared/config';
import { Center, Stack, StateView, Tabs } from '@shared/ui';
import { PageHeader, PageHeaderSkeleton } from '@widgets/page-header';

const VIEW_TABS = [
  { label: 'serviceStation.view.list', icon: 'list', value: 'list' },
  { label: 'serviceStation.view.map', icon: 'mapPin', value: 'map' },
] as const;

type ViewMode = (typeof VIEW_TABS)[number]['value'];

export const ServiceStationsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [view, setView] = useState<ViewMode>('list');

  const { data, isPending, isError } = useServiceStationsQuery();
  const toggleFavoriteMutation = useToggleFavoriteServiceStationMutation();

  const stations = data?.data ?? [];
  const isEmpty = !isPending && stations.length === 0;

  const tabs = VIEW_TABS.map((tab) => ({ ...tab, label: t(tab.label) }));

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

      {!isEmpty && <Tabs tabs={tabs} activeTab={view} onChange={setView} />}

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
      ) : view === 'list' ? (
        <ServiceStationsList
          stations={stations}
          onToggleFavorite={(station) => toggleFavoriteMutation.mutate(station.id)}
        />
      ) : (
        <ServiceStationsMap
          stations={stations}
          onStationClick={(station) => navigate(ROUTES.SERVICE_STATIONS.DETAIL(station.id))}
        />
      )}
    </Stack>
  );
};
