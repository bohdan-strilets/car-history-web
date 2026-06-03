import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useUpdateVehicleMutation } from '../api';

import { createVehicleFormSchema, type VehicleFormValues } from './vehicle.schema';
import type { EditVehicleFormParams } from './vehicle.types';

export const useEditVehicleForm = ({ vehicle, workspaceId, onSuccess }: EditVehicleFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createVehicleFormSchema(t));

  const defaultValues: VehicleFormValues = {
    brand: vehicle.brand,
    model: vehicle.model,
    year: vehicle.year,
    generation: vehicle.generation ?? undefined,
    nickname: vehicle.nickname ?? undefined,
    fuelType: vehicle.fuelType,
    bodyType: vehicle.bodyType,
    transmission: vehicle.transmission,
    driveType: vehicle.driveType,
    plateNumber: vehicle.plateNumber,
    vin: vehicle.vin ?? undefined,
    countryOfOrigin: vehicle.countryOfOrigin ?? undefined,
    currentMileage: vehicle.currentMileage,
    engineDisplacementCc: vehicle.engineDisplacementCc,
    color: vehicle.color,
    description: vehicle.description ?? undefined,
  };

  const form = useForm<VehicleFormValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const { mutate: update, isPending, error } = useUpdateVehicleMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: VehicleFormValues) => {
    update({ id: vehicle.id, workspaceId, dto: data }, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
