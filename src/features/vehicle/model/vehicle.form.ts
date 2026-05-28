import {
  useCreateVehicleMutation,
  VEHICLE_FORM_TOTAL_STEPS,
  VEHICLE_STEP_FIELDS,
} from '@features/vehicle';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { createVehicleFormSchema, type VehicleFormValues } from './vehicle.schema';
import type { VehicleFormParams } from './vehicle.types';

export const useVehicleForm = ({ workspaceId, onSuccess }: VehicleFormParams) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  const { control, handleSubmit, trigger, setError } = useForm<VehicleFormValues>({
    resolver: zodResolver(createVehicleFormSchema(t)),
    defaultValues: {
      brand: '',
      model: '',
      year: undefined,
      generation: '',
      nickname: '',
      fuelType: [],
      bodyType: undefined,
      transmission: undefined,
      driveType: undefined,
      plateNumber: '',
      vin: '',
      countryOfOrigin: '',
      currentMileage: undefined,
      color: '',
      description: '',
    },
  });

  const { mutate: create, isPending, error } = useCreateVehicleMutation();
  const errorMessage = useFormErrors({ error, setError, t });

  const handleNext = async () => {
    const fields = VEHICLE_STEP_FIELDS[currentStep];
    const valid = await trigger(fields);
    if (valid) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data: VehicleFormValues) => {
    create({ workspaceId, dto: data }, { onSuccess: (vehicle) => onSuccess(vehicle.data) });
  };

  const isLastStep = currentStep === VEHICLE_FORM_TOTAL_STEPS;

  return {
    control,
    currentStep,
    isLastStep,
    isPending,
    handleNext,
    handleBack,
    handleSubmit: handleSubmit(onSubmit),
    errorMessage,
  };
};
