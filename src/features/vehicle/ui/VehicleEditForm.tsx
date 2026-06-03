import { ROUTES } from '@shared/config';
import { showToast } from '@shared/lib/toast';
import { Form, Stack } from '@shared/ui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useEditVehicleForm, type VehicleEditFormProps } from '../model';

import { AppearanceStep } from './AppearanceStep';
import { BasicInfoStep } from './BasicInfoStep';
import { MileageStep } from './MileageStep';
import { RegistrationStep } from './RegistrationStep';
import { TypeStep } from './TypeStep';

export const VehicleEditForm = ({ vehicle, workspaceId, vehicleId }: VehicleEditFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { control, handleSubmit, isPending, errorMessage } = useEditVehicleForm({
    vehicle,
    workspaceId,
    onSuccess: () => {
      showToast.success(t('vehicle.detail.editSuccess'));
      navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId));
    },
  });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Stack gap="3xl">
        <BasicInfoStep control={control} />
        <TypeStep control={control} />
        <RegistrationStep control={control} />
        <MileageStep control={control} />
        <AppearanceStep control={control} />
      </Stack>
    </Form>
  );
};
