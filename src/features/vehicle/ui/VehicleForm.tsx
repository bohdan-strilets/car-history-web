import {
  AppearanceStep,
  RegistrationStep,
  TypeStep,
  useVehicleForm,
  VEHICLE_FORM_TOTAL_STEPS,
  type VehicleFormProps,
} from '@features/vehicle';
import { Form, Stack, Stepper } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { BasicInfoStep } from './BasicInfoStep';
import { MileageStep } from './MileageStep';

export const VehicleForm = ({ workspaceId, onSuccess }: VehicleFormProps) => {
  const { t } = useTranslation();

  const {
    control,
    currentStep,
    isLastStep,
    isPending,
    handleNext,
    handleBack,
    handleSubmit,
    errorMessage,
  } = useVehicleForm({ workspaceId, onSuccess });

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

  return (
    <Stack gap="xl">
      <Stepper currentStep={currentStep} totalSteps={VEHICLE_FORM_TOTAL_STEPS} color="gray" />

      <Form
        onSubmit={
          isLastStep
            ? handleSubmit
            : (e) => {
                e.preventDefault();
                handleNext();
              }
        }
        submitLabel={isLastStep ? t('common.save') : t('common.next')}
        onBack={currentStep > 1 ? handleBack : undefined}
        isLoading={isPending}
        error={errorMessage}
      >
        {renderFields()}
      </Form>
    </Stack>
  );
};
