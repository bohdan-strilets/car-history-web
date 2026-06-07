import { useTranslation } from 'react-i18next';

import {
  AppearanceStep,
  RegistrationStep,
  TypeStep,
  useVehicleForm,
  VEHICLE_FORM_TOTAL_STEPS,
  type VehicleFormProps,
} from '@features/vehicle';
import { Form, Stack, Stepper } from '@shared/ui';

import { BasicInfoStep } from './BasicInfoStep';
import { MileageStep } from './MileageStep';

export const VehicleForm = ({ workspaceId, onSuccess, onSkip }: VehicleFormProps) => {
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

  const showBack = currentStep > 1 ? handleBack : undefined;
  const showSkip = currentStep === 1 ? onSkip : undefined;

  return (
    <Stack gap="xl">
      <Stepper currentStep={currentStep} totalSteps={VEHICLE_FORM_TOTAL_STEPS} color="gray" />

      <Form
        onSubmit={isLastStep ? handleSubmit : handleNext}
        submitLabel={isLastStep ? t('common.actions.save') : t('common.actions.next')}
        onBack={showBack}
        onSkip={showSkip}
        isLoading={isPending}
        error={errorMessage}
      >
        {renderFields()}
      </Form>
    </Stack>
  );
};
