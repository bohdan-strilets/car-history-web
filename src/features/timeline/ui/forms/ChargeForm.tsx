import { useEffect, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CHARGE_TYPE_CONFIG } from '@entities/timeline';
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

export const ChargeForm = ({
  control,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
  setValue,
}: TimelineEventFormProps) => {
  const { t } = useTranslation();

  const kWh = useWatch({ control, name: 'kWh' });
  const pricePerKWh = useWatch({ control, name: 'pricePerKWh' });
  const chargeType = useWatch({ control, name: 'chargeType' });
  const cost = useWatch({ control, name: 'cost' });
  const chargerNetwork = useWatch({ control, name: 'chargerNetwork' });
  const batteryAfter = useWatch({ control, name: 'batteryAfter' });
  const isTitleManual = useRef(false);

  // Auto-calculate cost
  useEffect(() => {
    if (kWh == null || pricePerKWh == null) return;
    const calculated = parseFloat((kWh * pricePerKWh).toFixed(2));
    setValue('cost', calculated, { shouldValidate: false, shouldDirty: false });
  }, [kWh, pricePerKWh, setValue]);

  // Auto-generate title
  useEffect(() => {
    if (isTitleManual.current) return;
    const title = generateEventTitle(t, {
      type: 'CHARGE',
      chargeType,
      kWh,
      cost,
      chargerNetwork,
      batteryAfter,
    });
    if (title) setValue('title', title, { shouldValidate: false, shouldDirty: false });
  }, [chargeType, kWh, cost, chargerNetwork, batteryAfter, t, setValue]);

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
          hint={t('timeline.fields.titleHint')}
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
          format="mileage"
          size="lg"
        />

        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="kWh"
            label={t('timeline.fields.kWh')}
            placeholder="0.00"
            unit={t('units.kwh')}
            format="decimal"
            size="lg"
            fullWidth
          />
          <FormFieldNumberInput
            control={control}
            name="pricePerKWh"
            label={t('timeline.fields.pricePerKWh')}
            placeholder="0.00"
            unit={t('enums.currencyShort.PLN')}
            format="decimal"
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
          hint={t('timeline.fields.chargerNetworkHint')}
        />

        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="batteryBefore"
            label={t('timeline.fields.batteryBefore')}
            placeholder="0"
            unit="%"
            format="decimal"
            size="lg"
            fullWidth
          />
          <FormFieldNumberInput
            control={control}
            name="batteryAfter"
            label={t('timeline.fields.batteryAfter')}
            placeholder="100"
            unit="%"
            format="decimal"
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
          format="decimal"
          hint={t('timeline.fields.costHintCharge')}
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
