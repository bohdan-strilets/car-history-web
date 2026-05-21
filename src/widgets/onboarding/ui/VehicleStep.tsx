import type { Vehicle } from '@entities/vehicle';
import { useWorkspace } from '@entities/workspace';
import { VehicleForm } from '@features/vehicle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StepSuccess } from './StepSuccess';

interface VehicleStepProps {
  onNext: () => void;
  onSkip?: () => void;
}

export const VehicleStep = ({ onNext, onSkip }: VehicleStepProps) => {
  const { t } = useTranslation();
  const { activeWorkspace } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  const workspaceId = activeWorkspace?.id;

  if (!workspaceId) {
    throw new Error('Workspace ID is required to render VehicleStep component.');
  }

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

  return <VehicleForm workspaceId={workspaceId} onSuccess={handleSuccess} onSkip={onSkip} />;
};
