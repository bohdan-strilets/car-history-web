import { useTranslation } from 'react-i18next';

import { CHARGE_TYPE_CONFIG } from '@entities/timeline';
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

export const ChargeForm = ({
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
          name="chargeType"
          options={translateCardSelectOptions(t, CHARGE_TYPE_CONFIG)}
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

        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="kWh"
            label={t('timeline.fields.kWh')}
            placeholder="0.00"
            unit={t('units.kwh')}
            size="lg"
            fullWidth
          />
          <FormFieldNumberInput
            control={control}
            name="pricePerKWh"
            label={t('timeline.fields.pricePerKWh')}
            placeholder="0.00"
            unit={t('enums.currencyShort.PLN')}
            size="lg"
            fullWidth
          />
        </Stack>

        <FormFieldInput
          control={control}
          name="chargerNetwork"
          label={t('timeline.fields.chargerNetwork')}
          placeholder={t('timeline.fields.chargerNetworkPlaceholder')}
          size="lg"
        />

        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="batteryBefore"
            label={t('timeline.fields.batteryBefore')}
            placeholder="0"
            unit="%"
            size="lg"
            fullWidth
          />
          <FormFieldNumberInput
            control={control}
            name="batteryAfter"
            label={t('timeline.fields.batteryAfter')}
            placeholder="100"
            unit="%"
            size="lg"
            fullWidth
          />
        </Stack>

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
