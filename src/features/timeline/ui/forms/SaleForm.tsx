import { useEffect, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { PURCHASE_CONFIG } from '@entities/timeline';
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

export const SaleForm = ({
  control,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
  setValue,
}: TimelineEventFormProps) => {
  const { t } = useTranslation();

  const soldTo = useWatch({ control, name: 'soldTo' });
  const cost = useWatch({ control, name: 'cost' });
  const isTitleManual = useRef(false);

  useEffect(() => {
    if (isTitleManual.current) return;
    const title = generateEventTitle(t, { type: 'SALE', soldTo, cost });
    if (title) setValue('title', title, { shouldValidate: false, shouldDirty: false });
  }, [soldTo, cost, t, setValue]);

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
          name="soldTo"
          options={translateCardSelectOptions(t, PURCHASE_CONFIG)}
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
          format="mileage"
          size="lg"
        />

        <FormFieldNumberInput
          control={control}
          name="cost"
          label={t('timeline.fields.salePrice')}
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
