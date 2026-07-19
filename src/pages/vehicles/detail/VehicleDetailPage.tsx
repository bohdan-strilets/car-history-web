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
  StatsTab,
  TimelineTab,
  TiresTab,
  useVehicleParams,
  useVehicleQuery,
  useVehicleTab,
  VEHICLE_TABS,
  VehicleDetailSkeleton,
  VehicleError,
} from '@entities/vehicle';
import { useWorkspaceQuery } from '@entities/workspace';
import { ROUTES } from '@shared/config';
import { Stack, Tabs } from '@shared/ui';
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

  const { data: workspaceData } = useWorkspaceQuery(workspaceId);
  const role = workspaceData?.data?.role ?? 'MEMBER';

  const canEdit = canEditVehicle(role);
  const canDelete = canDeleteVehicle(role);

  const refuelType = getRefuelType(vehicle?.fuelType ?? []);
  const isSold = vehicle?.status === 'ARCHIVE';

  if (isPending) return <VehicleDetailSkeleton />;
  if (isError || !vehicle) return <VehicleError workspaceId={workspaceId} />;

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
          isSold={isSold}
        />
      )}

      {activeTab === 'stats' && (
        <StatsTab workspaceId={workspaceId} vehicleId={vehicleId} isSold={isSold} />
      )}

      {activeTab === 'gallery' && (
        <GalleryTab workspaceId={workspaceId} vehicleId={vehicleId} isSold={isSold} />
      )}

      {activeTab === 'tires' && (
        <TiresTab workspaceId={workspaceId} vehicleId={vehicleId} isSold={isSold} />
      )}
    </Stack>
  );
};
