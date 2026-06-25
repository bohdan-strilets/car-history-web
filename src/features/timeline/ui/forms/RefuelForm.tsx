import { useTranslation } from 'react-i18next';

import { REFUEL_TYPE_CONFIG } from '@entities/vehicle';
import type { TimelineEventFormProps } from '@features/timeline';
import {
  Form,
  FormFieldCardSelect,
  FormFieldCheckbox,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Stack,
} from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

export const RefuelForm = ({
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
          name="fuelType"
          options={translateCardSelectOptions(t, REFUEL_TYPE_CONFIG)}
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
          <FormFieldNumberInput
            control={control}
            name="liters"
            label={t('timeline.fields.liters')}
            placeholder="0.00"
            size="lg"
            unit={t('units.liters')}
            format="decimal"
            fullWidth
          />

          <FormFieldNumberInput
            control={control}
            name="pricePerLiter"
            label={t('timeline.fields.pricePerLiter')}
            placeholder="0.000"
            size="lg"
            unit={t('enums.currency.UAH')}
            format="decimal"
            fullWidth
          />
        </Stack>

        <FormFieldNumberInput
          control={control}
          name="cost"
          label={t('timeline.fields.cost')}
          placeholder="0.00"
          size="lg"
          unit={t('enums.currency.UAH')}
          format="decimal"
        />

        <FormFieldCheckbox
          control={control}
          name="isFullTank"
          label={t('timeline.fields.isFullTank')}
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
