import { useEffect, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  Form,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Stack,
} from '@shared/ui';

import { useUpdateReminderForm, type EditReminderFormProps } from '../model';
import { generateReminderTitle } from '../model/generate-reminder-title';

export const EditReminderForm = ({
  workspaceId,
  vehicleId,
  reminder,
  onSuccess,
}: EditReminderFormProps) => {
  const { t } = useTranslation();
  const isTitleManual = useRef(true);

  const { control, handleSubmit, isPending, errorMessage, setValue } = useUpdateReminderForm({
    workspaceId,
    vehicleId,
    reminder,
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
