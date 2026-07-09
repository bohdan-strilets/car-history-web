import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  ServiceStationEmpty,
  ServiceStationError,
  ServiceStationsList,
  ServiceStationsListSkeleton,
  ServiceStationsMap,
  useServiceStationsQuery,
} from '@entities/service-station';
import { useToggleFavoriteServiceStationMutation } from '@features/service-station';
import { ROUTES } from '@shared/config';
import { Stack, Tabs } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

const VIEW_TABS = [
  { label: 'serviceStation.view.list', icon: 'list', value: 'list' },
  { label: 'serviceStation.view.map', icon: 'mapPin', value: 'map' },
] as const;

type ViewMode = (typeof VIEW_TABS)[number]['value'];

export const ServiceStationsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [view, setView] = useState<ViewMode>('list');

  const { data, isPending, isError, refetch } = useServiceStationsQuery();
  const toggleFavoriteMutation = useToggleFavoriteServiceStationMutation();

  const stations = data?.data ?? [];
  const isEmpty = !isPending && stations.length === 0;

  const tabs = VIEW_TABS.map((tab) => ({ ...tab, label: t(tab.label) }));

  if (isPending) return <ServiceStationsListSkeleton />;
  if (isEmpty) return <ServiceStationEmpty />;
  if (isError) return <ServiceStationError onAction={refetch} />;

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('serviceStation.list.title')}
        buttonLabel={t('serviceStation.actions.add')}
        buttonIcon="plus"
        onCreate={() => navigate(ROUTES.SERVICE_STATIONS.NEW)}
      />
      {!isEmpty && <Tabs tabs={tabs} activeTab={view} onChange={setView} />}
      {view === 'list' ? (
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
