import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE } from '@entities/timeline';
import { useVehicle, useVehicleQuery } from '@entities/vehicle';
import { useWorkspace } from '@entities/workspace';
import { SelectedTypeForm } from '@features/timeline';
import { Button, Spinner, Stack } from '@shared/ui';

import type { TimelineStepProps } from '../model';

export const TimelineStep = ({ onNext, onSkip }: TimelineStepProps) => {
  const { t } = useTranslation();
  const { activeWorkspaceId } = useWorkspace();
  const { activeVehicleId } = useVehicle();

  const query = useVehicleQuery(activeWorkspaceId ?? '', activeVehicleId ?? '');
  const { data, isLoading } = query;
  const vehicle = data?.data;

  if (!activeWorkspaceId || !activeVehicleId) {
    onNext();
    return null;
  }

  if (isLoading || !vehicle) {
    return <Spinner />;
  }

  return (
    <Stack gap="lg">
      <SelectedTypeForm
        type={TIMELINE_EVENT_TYPE.PURCHASE}
        workspaceId={activeWorkspaceId}
        vehicleId={activeVehicleId}
        currentMileage={vehicle.currentMileage}
        onSuccess={onNext}
      />
      <Button variant="ghost" onClick={onSkip} color="gray" fullWidth>
        {t('common.actions.skip')}
      </Button>
    </Stack>
  );
};
