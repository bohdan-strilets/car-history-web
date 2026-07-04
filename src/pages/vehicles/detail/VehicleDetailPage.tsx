import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  canDeleteVehicle,
  canEditVehicle,
  GalleryTab,
  getRefuelType,
  MaintenanceTab,
  OverviewTab,
  RemindersTab,
  TimelineTab,
  useVehicleParams,
  useVehicleQuery,
  useVehicleTab,
  VEHICLE_TABS,
  VehicleDetailSkeleton,
  VehicleStatsTab,
} from '@entities/vehicle';
import { useWorkspace, useWorkspaceQuery } from '@entities/workspace';
import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store';
import { Stack, StateView, Tabs } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';

export const VehicleDetailPage = () => {
  const { t } = useTranslation();
  const { activeTab, setTab } = useVehicleTab();
  const { workspaceId, vehicleId } = useVehicleParams();
  const navigate = useNavigate();

  const { data, isPending, isError } = useVehicleQuery(workspaceId, vehicleId);
  const vehicle = data?.data ?? null;

  const tabs = translateSegmentControlOptions(t, VEHICLE_TABS);

  const { user } = useAuth();

  const { activeWorkspaceId } = useWorkspace();
  const { data: workspaceData } = useWorkspaceQuery(activeWorkspaceId ?? '');

  const activeWorkspace = activeWorkspaceId === workspaceId ? workspaceData?.data : null;

  const role = activeWorkspace?.role ?? 'MEMBER';
  const userId = user?.id ?? '';
  const ownerId = vehicle?.ownerId ?? '';

  const canEdit = canEditVehicle(role, ownerId, userId);
  const canDelete = canDeleteVehicle(role, ownerId, userId);

  const refuelType = getRefuelType(vehicle?.fuelType ?? []);
  const isSold = vehicle?.status === 'ARCHIVE';

  if (isPending) return <VehicleDetailSkeleton />;

  if (isError || !vehicle) {
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('common.error.title')}
        description={t('common.error.description')}
        actionLabel={t('common.actions.back')}
        onAction={() => navigate(ROUTES.WORKSPACES.DETAIL(workspaceId))}
      />
    );
  }

  return (
    <Stack gap="2xl" style={{ minHeight: '100%' }}>
      <PageHeader
        title={`${vehicle?.brand} ${vehicle?.model}`}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.DETAIL(workspaceId))}
      />

      <Tabs tabs={tabs} activeTab={activeTab} onChange={setTab} />

      {activeTab === 'overview' && vehicle && (
        <OverviewTab
          vehicle={vehicle}
          workspaceId={workspaceId}
          vehicleId={vehicleId}
          canEdit={canEdit}
          canDelete={canDelete}
        />
      )}

      {activeTab === 'timeline' && (
        <TimelineTab
          workspaceId={workspaceId}
          vehicleId={vehicleId}
          currentMileage={vehicle?.currentMileage ?? 0}
          fuelType={refuelType}
          vehicleFuelType={vehicle.fuelType}
          isSold={isSold}
        />
      )}

      {activeTab === 'reminders' && (
        <RemindersTab
          workspaceId={workspaceId}
          vehicleId={vehicleId}
          currentMileage={vehicle?.currentMileage ?? 0}
          isSold={isSold}
        />
      )}

      {activeTab === 'maintenance' && (
        <MaintenanceTab
          workspaceId={workspaceId}
          vehicleId={vehicleId}
          currentMileage={vehicle?.currentMileage ?? 0}
        />
      )}

      {activeTab === 'stats' && <VehicleStatsTab workspaceId={workspaceId} vehicleId={vehicleId} />}

      {activeTab === 'gallery' && <GalleryTab workspaceId={workspaceId} vehicleId={vehicleId} />}

      {activeTab === 'tires' && <div>Tires</div>}
    </Stack>
  );
};
