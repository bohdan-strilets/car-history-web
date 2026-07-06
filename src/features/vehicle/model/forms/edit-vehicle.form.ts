import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUpdateVehicleMutation } from '@features/vehicle';
import { useFormErrors } from '@shared/lib';

import { editVehicleFormDefaultValues } from '../default-values';
import { createVehicleFormSchema, type VehicleFormValues } from '../schemes';

import type { EditVehicleFormParams } from '../types';

export const useEditVehicleForm = ({ vehicle, workspaceId, onSuccess }: EditVehicleFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createVehicleFormSchema(t));
  const defaultValues = editVehicleFormDefaultValues(vehicle);

  const form = useForm<VehicleFormValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError, setValue } = form;

  const { mutate: update, isPending, error } = useUpdateVehicleMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: VehicleFormValues) => {
    update({ vehicleId: vehicle.id, workspaceId, dto: data }, { onSuccess });
  };

  return {
    control,
    setValue,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
