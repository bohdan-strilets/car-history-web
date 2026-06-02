import {
  useVehicleQuery,
  useVehicleTab,
  VEHICLE_TABS,
  VehicleActions,
  VehicleOverview,
} from '@entities/vehicle';
import { ROUTES } from '@shared/config';
import { Stack, StateView, Tabs } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const VehicleDetailPage = () => {
  const { t } = useTranslation();
  const { workspaceId, vehicleId } = useParams<{ workspaceId: string; vehicleId: string }>();
  const navigate = useNavigate();
  const { activeTab, setTab } = useVehicleTab();

  const { data, isPending, isError } = useVehicleQuery(workspaceId ?? '', vehicleId ?? '');
  const vehicle = data?.data ?? null;

  const tabs = translateSegmentControlOptions(t, VEHICLE_TABS);

  if (isError || (!isPending && !vehicle)) {
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('vehicle.error.title')}
        description={t('vehicle.error.description')}
        actionLabel={t('common.back')}
        onAction={() => navigate(ROUTES.WORKSPACES.DETAIL(workspaceId ?? ''))}
      />
    );
  }

  return (
    <Stack gap="2xl">
      <PageHeader
        title={isPending ? '...' : `${vehicle?.brand} ${vehicle?.model}`}
        buttonLabel={t('common.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.DETAIL(workspaceId ?? ''))}
      />

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setTab} />

      {activeTab === 'overview' && vehicle && (
        <VehicleOverview
          vehicle={vehicle}
          actions={<VehicleActions vehicleId={vehicleId ?? ''} workspaceId={workspaceId ?? ''} />}
        />
      )}

      {activeTab === 'timeline' && <div>Timeline</div>}
      {activeTab === 'reminders' && <div>Reminders</div>}
      {activeTab === 'maintenance' && <div>Maintenance</div>}
      {activeTab === 'stats' && <div>Stats</div>}
      {activeTab === 'gallery' && <div>Gallery</div>}
      {activeTab === 'tires' && <div>Tires</div>}
    </Stack>
  );
};
