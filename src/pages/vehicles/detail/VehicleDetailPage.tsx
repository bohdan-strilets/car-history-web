import {
  canDeleteVehicle,
  canEditVehicle,
  useVehicleQuery,
  useVehicleTab,
  VEHICLE_TABS,
  VehicleActions,
  VehicleOverview,
} from '@entities/vehicle';
import { useWorkspace } from '@entities/workspace';
import { EditVehicleDescriptionModal } from '@features/vehicle';
import { ROUTES } from '@shared/config';
import { useAuth } from '@shared/store/auth';
import { Stack, StateView, Tabs, useModal } from '@shared/ui';
import { translateSegmentControlOptions } from '@shared/utils';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const VehicleDetailPage = () => {
  const { t } = useTranslation();
  const { workspaceId, vehicleId } = useParams<{ workspaceId: string; vehicleId: string }>();
  const navigate = useNavigate();
  const { activeTab, setTab } = useVehicleTab();
  const modal = useModal();

  const { data, isPending, isError } = useVehicleQuery(workspaceId ?? '', vehicleId ?? '');
  const vehicle = data?.data ?? null;

  const tabs = translateSegmentControlOptions(t, VEHICLE_TABS);

  const { user } = useAuth();
  const { activeWorkspace } = useWorkspace();

  const role = activeWorkspace?.role ?? 'MEMBER';
  const userId = user?.id ?? '';
  const ownerId = vehicle?.ownerId ?? '';

  const canEdit = canEditVehicle(role, ownerId, userId);
  const canDelete = canDeleteVehicle(role, ownerId, userId);

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
          actions={
            <VehicleActions
              vehicleId={vehicleId ?? ''}
              workspaceId={workspaceId ?? ''}
              canEdit={canEdit}
              canDelete={canDelete}
            />
          }
          onEditDescription={() =>
            modal.open(
              <EditVehicleDescriptionModal vehicle={vehicle} onSuccess={() => modal.closeLast()} />,
              { title: t('vehicle.overview.description') },
            )
          }
          onAddPurchase={() =>
            navigate(
              `${ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId ?? '', vehicleId ?? '')}?tab=timeline&action=purchase`,
            )
          }
          onAddSale={() =>
            navigate(
              `${ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId ?? '', vehicleId ?? '')}?tab=timeline&action=sale`,
            )
          }
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
