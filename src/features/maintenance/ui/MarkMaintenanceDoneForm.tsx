import { useTranslation } from 'react-i18next';

import type { MaintenanceId } from '@entities/maintenance';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { Form, FormFieldDatePicker, FormFieldNumberInput } from '@shared/ui';

import { useMarkMaintenanceDoneForm } from '../model';

interface MarkMaintenanceDoneFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  maintenanceId: MaintenanceId;
  currentMileage: number;
  onSuccess?: () => void;
}

export const MarkMaintenanceDoneForm = ({
  workspaceId,
  vehicleId,
  maintenanceId,
  currentMileage,
  onSuccess,
}: MarkMaintenanceDoneFormProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useMarkMaintenanceDoneForm({
    workspaceId,
    vehicleId,
    maintenanceId,
    currentMileage,
    onSuccess,
  });

  return (
    <Form
      onSubmit={handleSubmit}
      isLoading={isPending}
      error={errorMessage}
      submitLabel={t('maintenance.actions.markDone')}
    >
      <FormFieldNumberInput
        control={control}
        name="mileage"
        label={t('maintenance.fields.mileage')}
        unit={t('units.km')}
      />
      <FormFieldDatePicker control={control} name="date" label={t('maintenance.fields.date')} />
    </Form>
  );
};
