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

import { useCreateReminderForm, type CreateReminderFormProps } from '../model';

export const CreateReminderForm = ({
  workspaceId,
  vehicleId,
  currentMileage,
  onSuccess,
}: CreateReminderFormProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useCreateReminderForm({
    workspaceId,
    vehicleId,
    currentMileage,
    onSuccess,
  });

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
          label={t('fields.type')}
          options={translateCardSelectOptions(t, REMINDER_TYPE_CONFIG)}
        />
        <FormFieldInput
          control={control}
          name="title"
          label={t('fields.title')}
          placeholder={t('maintenance.fields.titlePlaceholder')}
          size="lg"
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
