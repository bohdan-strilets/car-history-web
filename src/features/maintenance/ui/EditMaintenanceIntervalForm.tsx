import { useTranslation } from 'react-i18next';

import { Form, FormFieldDatePicker, FormFieldInput, FormFieldNumberInput } from '@shared/ui';

import { useEditMaintenanceIntervalForm, type EditMaintenanceIntervalFormProps } from '../model';

export const EditMaintenanceIntervalForm = ({
  workspaceId,
  vehicleId,
  interval,
  onSuccess,
}: EditMaintenanceIntervalFormProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useEditMaintenanceIntervalForm({
    workspaceId,
    vehicleId,
    interval,
    onSuccess,
  });

  return (
    <Form
      onSubmit={handleSubmit}
      isLoading={isPending}
      error={errorMessage}
      submitLabel={t('common.actions.save')}
    >
      <FormFieldInput control={control} name="title" label={t('maintenance.fields.title')} />
      <FormFieldNumberInput
        control={control}
        name="intervalKm"
        label={t('maintenance.fields.intervalKm')}
        unit={t('units.km')}
      />
      <FormFieldNumberInput
        control={control}
        name="intervalMonths"
        label={t('maintenance.fields.intervalMonths')}
        unit={t('units.months', { count: 1 })}
      />
      <FormFieldNumberInput
        control={control}
        name="lastServiceMileage"
        label={t('maintenance.fields.lastServiceMileage')}
        unit={t('units.km')}
      />
      <FormFieldDatePicker
        control={control}
        name="lastServiceDate"
        label={t('maintenance.fields.lastServiceDate')}
      />
    </Form>
  );
};
