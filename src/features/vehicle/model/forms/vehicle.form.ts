import {
  createVehicleFormSchema,
  useCreateVehicleMutation,
  VEHICLE_FORM_TOTAL_STEPS,
  VEHICLE_STEP_FIELDS,
  type VehicleFormParams,
  type VehicleFormValues,
} from '@features/vehicle';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export const useVehicleForm = ({ workspaceId, onSuccess }: VehicleFormParams) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { t } = useTranslation();

  const resolver = zodResolver(createVehicleFormSchema(t));

  const form = useForm<VehicleFormValues>({
    resolver,
    defaultValues: {
      brand: '',
      model: '',
      year: NaN,
      generation: '',
      nickname: '',
      fuelType: [],
      bodyType: undefined,
      transmission: undefined,
      driveType: undefined,
      plateNumber: '',
      vin: '',
      countryOfOrigin: '',
      currentMileage: NaN,
      color: '',
      description: '',
    },
  });
  const { control, handleSubmit, setError, trigger } = form;

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
