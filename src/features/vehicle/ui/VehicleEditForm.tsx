import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { showToast } from '@shared/lib';
import { Form, Stack } from '@shared/ui';

import { useEditVehicleForm, type VehicleEditFormProps } from '../model';

import { AppearanceStep } from './AppearanceStep';
import { BasicInfoStep } from './BasicInfoStep';
import { MileageStep } from './MileageStep';
import { RegistrationStep } from './RegistrationStep';
import { TypeStep } from './TypeStep';

export const VehicleEditForm = ({ vehicle, workspaceId, vehicleId }: VehicleEditFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSuccess = () => {
    showToast.success(t('vehicle.detail.editSuccess'));
    navigate(ROUTES.WORKSPACES.VEHICLES.DETAIL(workspaceId, vehicleId));
  };

  const form = useEditVehicleForm({ vehicle, workspaceId, onSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
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
