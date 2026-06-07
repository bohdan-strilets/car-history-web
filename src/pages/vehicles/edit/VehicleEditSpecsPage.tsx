import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useVehicleParams, useVehicleQuery, VehicleSpecsFormSkeleton } from '@entities/vehicle';
import { useEditVehicleSpecsForm, VehicleSpecsForm } from '@features/vehicle';
import { ROUTES } from '@shared/config';
import { Stack, StateView } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

export const VehicleEditSpecsPage = () => {
  const { t } = useTranslation();
  const { workspaceId, vehicleId } = useVehicleParams();
  const navigate = useNavigate();

  const { data, isPending, isError } = useVehicleQuery(workspaceId, vehicleId);
  const vehicle = data?.data ?? null;

  const onSuccess = () => {
    navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId));
  };

  const form = useEditVehicleSpecsForm({ vehicle: vehicle!, onSuccess });
  const { control, handleSubmit, isPending: isSubmitting, errorMessage } = form;

  if (isPending) return <VehicleSpecsFormSkeleton />;
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
        title={t('vehicle.overview.sections.specs')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId))}
      />
      <VehicleSpecsForm
        control={control}
        handleSubmit={handleSubmit}
        isPending={isSubmitting}
        errorMessage={errorMessage}
      />
    </Stack>
  );
};
