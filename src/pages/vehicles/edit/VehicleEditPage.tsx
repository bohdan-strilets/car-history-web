import { useVehicleParams, useVehicleQuery, VehicleEditFormSkeleton } from '@entities/vehicle';
import { VehicleEditForm } from '@features/vehicle/ui';
import { ROUTES } from '@shared/config';
import { Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const VehicleEditPage = () => {
  const { t } = useTranslation();
  const { workspaceId, vehicleId } = useVehicleParams();
  const navigate = useNavigate();

  const { data, isPending, isError } = useVehicleQuery(workspaceId, vehicleId);
  const vehicle = data?.data ?? null;

  if (isPending) return <VehicleEditFormSkeleton />;
  if (isError || !vehicle) {
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('common.error.title')}
        description={t('common.error.description')}
        actionLabel={t('common.actions.back')}
        onAction={() => navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId))}
      />
    );
  }

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('vehicle.detail.edit')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId))}
      />

      <VehicleEditForm vehicle={vehicle} workspaceId={workspaceId} vehicleId={vehicleId} />
    </Stack>
  );
};
