import type { Vehicle } from '@entities/vehicle';
import { useWorkspace } from '@entities/workspace';
import { VehicleForm } from '@features/vehicle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

import { StepSuccess } from './StepSuccess';

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
        title={t('onboarding.vehicle.success.title')}
        description={t('onboarding.vehicle.success.description')}
        onDone={onNext}
      />
    );
  }

  return <VehicleForm workspaceId={activeWorkspaceId} onSuccess={handleSuccess} onSkip={onSkip} />;
};
