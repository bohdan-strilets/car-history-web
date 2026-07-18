import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useVehicle, type Vehicle } from '@entities/vehicle';
import { useActiveWorkspace } from '@entities/workspace';
import { VehicleForm } from '@features/vehicle';

import { StepSuccess } from './StepSuccess';

import type { VehicleStepProps } from '../model';

export const VehicleStep = ({ onNext, onSkip }: VehicleStepProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { t } = useTranslation();
  const { activeWorkspaceId } = useActiveWorkspace();
  const { setActiveVehicleId } = useVehicle();

  if (!activeWorkspaceId) throw new Error('Active workspace ID is required');

  const handleSuccess = (vehicle: Vehicle) => {
    setActiveVehicleId(vehicle.id);
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
