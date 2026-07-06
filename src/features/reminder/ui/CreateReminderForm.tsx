import { useEffect, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { REMINDER_TYPE_CONFIG } from '@entities/reminder';
import {
  Form,
  FormFieldCardSelect,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Stack,
} from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import {
  generateReminderTitle,
  useCreateReminderForm,
  type CreateReminderFormProps,
} from '../model';

export const CreateReminderForm = ({
  workspaceId,
  vehicleId,
  currentMileage,
  onSuccess,
}: CreateReminderFormProps) => {
  const { t } = useTranslation();
  const isTitleManual = useRef(false);

  const { control, handleSubmit, isPending, errorMessage, setValue } = useCreateReminderForm({
    workspaceId,
    vehicleId,
    currentMileage,
    onSuccess,
  });

  const type = useWatch({ control, name: 'type' });
  const dueDate = useWatch({ control, name: 'dueDate' });
  const dueMileage = useWatch({ control, name: 'dueMileage' });

  useEffect(() => {
    if (isTitleManual.current) return;
    if (!type) return;

    const title = generateReminderTitle(t, { type, dueDate, dueMileage });
    if (title) setValue('title', title, { shouldValidate: false, shouldDirty: false });
  }, [type, dueDate, dueMileage, t, setValue]);

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
          options={translateCardSelectOptions(t, REMINDER_TYPE_CONFIG)}
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
        />
        <FormFieldDatePicker
          control={control}
          name="dueDate"
          label={t('fields.dueDate')}
          hint={t('fields.dueDateHint')}
          size="lg"
        />
        <FormFieldNumberInput
          control={control}
          name="dueMileage"
          label={t('fields.dueMileage')}
          hint={t('fields.dueMileageHint')}
          placeholder="0"
          unit={t('units.km')}
          size="lg"
        />
        <FormFieldTextarea
          control={control}
          name="description"
          label={t('fields.description')}
          placeholder={t('fields.descriptionPlaceholder')}
          size="lg"
        />
      </Stack>
    </Form>
  );
};
