import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useWorkspace } from '@entities/workspace';
import { VehicleForm } from '@features/vehicle';

import { StepSuccess } from './StepSuccess';

import type { VehicleStepProps } from '../model';
import type { Vehicle } from '@entities/vehicle';

export const VehicleStep = ({ onNext, onSkip }: VehicleStepProps) => {
  const { t } = useTranslation();
  const { activeWorkspaceId } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  if (!activeWorkspaceId) throw new Error('Active workspace ID is required');

  const handleSuccess = (_vehicle: Vehicle) => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <StepSuccess
        title={t('onboarding.steps.vehicle.success.title')}
        description={t('onboarding.steps.vehicle.success.description')}
        onDone={onNext}
      />
    );
  }

  return <VehicleForm workspaceId={activeWorkspaceId} onSuccess={handleSuccess} onSkip={onSkip} />;
};
