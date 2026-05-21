import type { Vehicle } from '@entities/vehicle';
import {
  AppearanceStep,
  createVehicleFormSchema,
  RegistrationStep,
  TypeStep,
  useCreateVehicleMutation,
  VEHICLE_FORM_TOTAL_STEPS,
  VEHICLE_STEP_FIELDS,
  type VehicleFormValues,
} from '@features/vehicle';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, Stack, Stepper } from '@shared/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { BasicInfoStep } from './BasicInfoStep';
import { MileageStep } from './MileageStep';

interface VehicleFormProps {
  workspaceId: string;
  onSuccess: (vehicle: Vehicle) => void;
  onSkip?: () => void;
}

export const VehicleForm = ({ workspaceId, onSuccess, onSkip }: VehicleFormProps) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  const { control, handleSubmit, trigger } = useForm<VehicleFormValues>({
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

  const { mutate: create, isPending } = useCreateVehicleMutation();

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

  const renderFields = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep control={control} />;
      case 2:
        return <TypeStep control={control} />;
      case 3:
        return <RegistrationStep control={control} />;
      case 4:
        return <MileageStep control={control} />;
      case 5:
        return <AppearanceStep control={control} />;
    }
  };

  const isLastStep = currentStep === VEHICLE_FORM_TOTAL_STEPS;

  return (
    <Stack gap="xl">
      <Stepper currentStep={currentStep} totalSteps={VEHICLE_FORM_TOTAL_STEPS} color="gray" />

      <Form
        onSubmit={
          isLastStep
            ? handleSubmit(onSubmit)
            : (e) => {
                e.preventDefault();
                handleNext();
              }
        }
        submitLabel={isLastStep ? t('common.save') : t('common.next')}
        onBack={currentStep > 1 ? handleBack : undefined}
        isLoading={isPending}
      >
        {renderFields()}
      </Form>
    </Stack>
  );
};
