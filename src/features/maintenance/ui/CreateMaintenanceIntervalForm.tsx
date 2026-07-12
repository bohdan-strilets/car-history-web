import { useEffect, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { MAINTENANCE_TYPE_CONFIG } from '@entities/maintenance';
import {
  Form,
  FormFieldCardSelect,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  Stack,
} from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import {
  generateMaintenanceTitle,
  useCreateMaintenanceIntervalForm,
  type CreateMaintenanceIntervalFormProps,
} from '../model';

export const CreateMaintenanceIntervalForm = ({
  workspaceId,
  vehicleId,
  currentMileage,
  onSuccess,
}: CreateMaintenanceIntervalFormProps) => {
  const { t } = useTranslation();
  const isTitleManual = useRef(false);

  const { control, handleSubmit, isPending, errorMessage, setValue } =
    useCreateMaintenanceIntervalForm({
      workspaceId,
      vehicleId,
      currentMileage,
      onSuccess,
    });

  const type = useWatch({ control, name: 'type' });
  const intervalKm = useWatch({ control, name: 'intervalKm' });
  const intervalMonths = useWatch({ control, name: 'intervalMonths' });

  useEffect(() => {
    if (isTitleManual.current) return;
    if (!type) return;

    const title = generateMaintenanceTitle(t, { type, intervalKm, intervalMonths });
    if (title) setValue('title', title, { shouldValidate: false, shouldDirty: false });
  }, [type, intervalKm, intervalMonths, t, setValue]);

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Stack gap="md">
        <FormFieldCardSelect
          control={control}
          name="type"
          options={translateCardSelectOptions(t, MAINTENANCE_TYPE_CONFIG)}
        />
        <FormFieldInput
          control={control}
          name="title"
          label={t('fields.title')}
          placeholder={t('maintenance.fields.titlePlaceholder')}
          size="lg"
          onChange={() => {
            isTitleManual.current = true;
          }}
          hint={t('maintenance.fields.titleHint')}
        />
        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="intervalKm"
            label={t('maintenance.fields.intervalKm')}
            placeholder={t('maintenance.fields.intervalKmPlaceholder')}
            unit={t('units.km')}
            size="lg"
            fullWidth
            hint={t('maintenance.fields.intervalKmHint')}
          />
          <FormFieldNumberInput
            control={control}
            name="intervalMonths"
            label={t('maintenance.fields.intervalMonths')}
            placeholder={t('maintenance.fields.intervalMonthsPlaceholder')}
            unit={t('units.months', { count: 1 })}
            size="lg"
            fullWidth
          />
        </Stack>
        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="lastServiceMileage"
            label={t('maintenance.fields.lastServiceMileage')}
            placeholder="0"
            unit={t('units.km')}
            size="lg"
            fullWidth
            hint={t('maintenance.fields.lastServiceMileageHint')}
          />
          <FormFieldDatePicker
            control={control}
            name="lastServiceDate"
            label={t('maintenance.fields.lastServiceDate')}
            maxDate={new Date()}
            size="lg"
            fullWidth
          />
        </Stack>
      </Stack>
    </Form>
  );
};
