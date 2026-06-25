import { useEffect, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TRIP_PURPOSE_CONFIG } from '@entities/timeline';
import { generateEventTitle, type TimelineEventFormProps } from '@features/timeline';
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

export const TripForm = ({
  control,
  setValue,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
}: TimelineEventFormProps) => {
  const { t } = useTranslation();

  const startMileage = useWatch({ control, name: 'startMileage' });
  const endMileage = useWatch({ control, name: 'endMileage' });
  const purpose = useWatch({ control, name: 'purpose' });
  const startLocation = useWatch({ control, name: 'startLocation' });
  const endLocation = useWatch({ control, name: 'endLocation' });
  const distanceKm = useWatch({ control, name: 'distanceKm' });
  const isTitleManual = useRef(false);

  useEffect(() => {
    if (startMileage != null && endMileage != null && endMileage > startMileage) {
      const distance = endMileage - startMileage;
      setValue('distanceKm', distance);
      setValue('mileage', endMileage);
    }
  }, [startMileage, endMileage, setValue]);

  useEffect(() => {
    if (isTitleManual.current) return;
    const title = generateEventTitle(t, {
      type: 'TRIP',
      purpose,
      startLocation,
      endLocation,
      distanceKm,
    });
    if (title) setValue('title', title, { shouldValidate: false, shouldDirty: false });
  }, [purpose, startLocation, endLocation, distanceKm, t, setValue]);

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={submitLabel}
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

        <FormFieldCardSelect
          control={control}
          name="purpose"
          options={translateCardSelectOptions(t, TRIP_PURPOSE_CONFIG)}
        />

        <FormFieldDatePicker
          control={control}
          name="eventDate"
          label={t('timeline.fields.eventDate')}
          maxDate={new Date()}
          size="lg"
        />

        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="startMileage"
            label={t('timeline.fields.startMileage')}
            placeholder="0"
            unit={t('units.km')}
            format="mileage"
            size="lg"
          />
          <FormFieldNumberInput
            control={control}
            name="endMileage"
            label={t('timeline.fields.endMileage')}
            placeholder="0"
            unit={t('units.km')}
            format="mileage"
            size="lg"
          />
        </Stack>

        <FormFieldNumberInput
          control={control}
          name="distanceKm"
          label={t('timeline.fields.distanceKm')}
          placeholder="0"
          unit={t('units.km')}
          format="mileage"
          size="lg"
        />

        <Stack direction="row" gap="md">
          <FormFieldInput
            control={control}
            name="startLocation"
            label={t('timeline.fields.startLocation')}
            placeholder={t('timeline.fields.startLocationPlaceholder')}
            size="lg"
          />
          <FormFieldInput
            control={control}
            name="endLocation"
            label={t('timeline.fields.endLocation')}
            placeholder={t('timeline.fields.endLocationPlaceholder')}
            size="lg"
          />
        </Stack>

        <FormFieldNumberInput
          control={control}
          name="cost"
          label={t('timeline.fields.cost')}
          placeholder="0.00"
          size="lg"
          unit={t('enums.currencyShort.PLN')}
          format="decimal"
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
