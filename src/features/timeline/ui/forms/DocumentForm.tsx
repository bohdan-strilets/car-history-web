import { useTranslation } from 'react-i18next';

import { DOCUMENT_TYPE_CONFIG } from '@entities/timeline';
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

export const DocumentForm = ({
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
          name="documentType"
          options={translateCardSelectOptions(t, DOCUMENT_TYPE_CONFIG)}
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

        <Stack direction="row" gap="md">
          <FormFieldDatePicker
            control={control}
            name="issueDate"
            label={t('timeline.fields.issueDate')}
            maxDate={new Date()}
            size="lg"
            fullWidth
          />
          <FormFieldDatePicker
            control={control}
            name="expireDate"
            label={t('timeline.fields.expireDate')}
            size="lg"
            fullWidth
          />
        </Stack>

        <FormFieldInput
          control={control}
          name="documentNumber"
          label={t('timeline.fields.documentNumber')}
          placeholder={t('timeline.fields.documentNumberPlaceholder')}
          size="lg"
        />

        <FormFieldInput
          control={control}
          name="issuedBy"
          label={t('timeline.fields.issuedBy')}
          placeholder={t('timeline.fields.issuedByPlaceholder')}
          size="lg"
        />

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
