import { useVehicleQuery } from '@entities/vehicle';
import { VehicleEditForm } from '@features/vehicle/ui';
import { ROUTES } from '@shared/config';
import { Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export const VehicleEditPage = () => {
  const { t } = useTranslation();
  const { workspaceId, vehicleId } = useParams<{ workspaceId: string; vehicleId: string }>();
  const navigate = useNavigate();

  const { data, isPending, isError } = useVehicleQuery(workspaceId ?? '', vehicleId ?? '');
  const vehicle = data?.data ?? null;

  if (isError || (!isPending && !vehicle)) {
    return (
      <StateView
        icon="alertCircle"
        variant="error"
        title={t('vehicle.error.title')}
        description={t('vehicle.error.description')}
        actionLabel={t('common.back')}
        onAction={() =>
          navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId ?? '', vehicleId ?? ''))
        }
      />
    );
  }

  if (isPending || !vehicle) return null;

  return (
    <Stack gap="2xl">
      <PageHeader
        title={t('vehicle.detail.edit')}
        buttonLabel={t('common.back')}
        buttonIcon="arrowLeft"
        onCreate={() =>
          navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId ?? '', vehicleId ?? ''))
        }
      />

      <VehicleEditForm
        vehicle={vehicle}
        workspaceId={workspaceId ?? ''}
        vehicleId={vehicleId ?? ''}
      />
    </Stack>
  );
};
