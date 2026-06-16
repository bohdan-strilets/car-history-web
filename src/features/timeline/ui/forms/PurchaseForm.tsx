import { useTranslation } from 'react-i18next';

import { PURCHASE_CONFIG } from '@entities/timeline';
import type { TimelineEventFormProps } from '@features/timeline';
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

export const PurchaseForm = ({
  control,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
}: TimelineEventFormProps) => {
  const { t } = useTranslation();

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
          name="purchasedFrom"
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
          size="lg"
        />

        <FormFieldNumberInput
          control={control}
          name="cost"
          label={t('timeline.fields.purchasePrice')}
          placeholder="0.00"
          size="lg"
          unit={t('enums.currencyShort.PLN')}
        />

        <FormFieldInput
          control={control}
          name="country"
          label={t('timeline.fields.country')}
          placeholder={t('timeline.fields.countryPlaceholder')}
          size="lg"
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
