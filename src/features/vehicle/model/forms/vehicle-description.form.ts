import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUpdateVehicleMutation } from '@features/vehicle';
import { showToast, useFormErrors } from '@shared/lib';

import { editVehicleDescriptionDefaultValues } from '../default-values';
import { createVehicleDescriptionSchema, type DescriptionValues } from '../schemes';

import type { EditVehicleDescriptionParams } from '../types';

export const useEditVehicleDescriptionForm = ({
  vehicle,
  onSuccess,
}: EditVehicleDescriptionParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createVehicleDescriptionSchema(t));
  const defaultValues = editVehicleDescriptionDefaultValues(vehicle);

  const form = useForm<DescriptionValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const { mutate: update, isPending, error } = useUpdateVehicleMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: DescriptionValues) => {
    update(
      { vehicleId: vehicle.id, workspaceId: vehicle.workspaceId, dto: data },
      {
        onSuccess: () => {
          showToast.success(t('vehicle.detail.editSuccess'));
          onSuccess();
        },
      },
    );
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
