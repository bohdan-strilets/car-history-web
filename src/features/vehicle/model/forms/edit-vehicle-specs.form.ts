import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUpdateVehicleSpecsMutation } from '@features/vehicle';
import { showToast, useFormErrors } from '@shared/lib';

import { editVehicleSpecsDefaultValues } from '../default-values';
import { createVehicleSpecsSchema, type VehicleSpecsValues } from '../schemes';

import type { EditVehicleSpecsFormParams } from '../types';

export const useEditVehicleSpecsForm = ({ vehicle, onSuccess }: EditVehicleSpecsFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createVehicleSpecsSchema(t));
  const defaultValues = editVehicleSpecsDefaultValues(vehicle);

  const form = useForm<VehicleSpecsValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const { mutate: update, isPending, error } = useUpdateVehicleSpecsMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: VehicleSpecsValues) => {
    update(
      { vehicleId: vehicle.id, workspaceId: vehicle.workspaceId, dto: data },
      {
        onSuccess: () => {
          showToast.success(t('vehicle.detail.editSuccess'));
          onSuccess?.();
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
