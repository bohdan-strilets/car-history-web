import { useTranslation } from 'react-i18next';

import { useUpdateTimelineEventForm } from '@features/timeline';
import {
  Form,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Stack,
} from '@shared/ui';

import type { EditTimelineEventModalProps } from './edit-timeline-event-modal.types';

export const EditTimelineEventForm = ({
  workspaceId,
  vehicleId,
  eventId,
  defaultValues,
  onSuccess,
}: EditTimelineEventModalProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useUpdateTimelineEventForm({
    workspaceId,
    vehicleId,
    eventId,
    defaultValues,
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
        <FormFieldInput
          control={control}
          name="title"
          label={t('timeline.fields.title')}
          placeholder={t('timeline.fields.titlePlaceholder')}
          size="lg"
        />
        <FormFieldDatePicker
          control={control}
          name="eventDate"
          label={t('timeline.fields.eventDate')}
          maxDate={new Date()}
          size="lg"
        />
        <FormFieldNumberInput
          control={control}
          name="mileage"
          label={t('timeline.fields.mileage')}
          placeholder="0"
          unit={t('units.km')}
          size="lg"
        />
        <FormFieldNumberInput
          control={control}
          name="cost"
          label={t('timeline.fields.cost')}
          placeholder="0.00"
          size="lg"
          unit={t('enums.currencyShort.PLN')}
        />
        <FormFieldTextarea
          control={control}
          name="description"
          label={t('timeline.fields.description')}
          placeholder={t('timeline.fields.descriptionPlaceholder')}
          size="lg"
        />
      </Stack>
    </Form>
  );
};
