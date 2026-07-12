import { useEffect, useMemo, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TIRE_CHANGE_TYPE, TIRE_CHANGE_TYPE_CONFIG, useTiresQuery } from '@entities/tire';
import { generateEventTitle, type TireChangeFormProps } from '@features/timeline';
import {
  Form,
  FormFieldCardSelect,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldSelect,
  Stack,
} from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

export const TireChangeForm = ({
  control,
  setValue,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
  workspaceId,
  vehicleId,
  currentMileage,
}: TireChangeFormProps) => {
  const { t } = useTranslation();
  const isTitleManual = useRef(false);

  const { data } = useTiresQuery(workspaceId, vehicleId);
  const tires = useMemo(() => data?.data ?? [], [data]);

  const tireOptions = tires.map((tire) => ({
    id: tire.id,
    value: tire.id,
    label: `${tire.brand} ${tire.model} (${tire.width}/${tire.aspectRatio} R${tire.rimDiameter})`,
  }));

  const changeType = useWatch({ control, name: 'changeType' });
  const tireId = useWatch({ control, name: 'tireId' });
  const installedMileage = useWatch({ control, name: 'installedMileage' });
  const removedMileage = useWatch({ control, name: 'removedMileage' });

  const isInstall = changeType === TIRE_CHANGE_TYPE.INSTALL;
  const isRemove = changeType === TIRE_CHANGE_TYPE.REMOVE;

  useEffect(() => {
    if (isInstall && installedMileage == null) {
      setValue('installedMileage', currentMileage, { shouldValidate: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInstall, currentMileage]);

  useEffect(() => {
    if (isInstall && installedMileage != null) {
      setValue('mileage', installedMileage);
    }
  }, [isInstall, installedMileage, setValue]);

  useEffect(() => {
    if (isRemove && removedMileage != null) {
      setValue('mileage', removedMileage);
    }
  }, [isRemove, removedMileage, setValue]);

  useEffect(() => {
    if (isTitleManual.current) return;

    const selectedTire = tires.find((tire) => tire.id === tireId);
    const tireLabel = selectedTire ? `${selectedTire.brand} ${selectedTire.model}` : undefined;

    const title = generateEventTitle(t, {
      type: 'TIRE_CHANGE',
      changeType,
      tireLabel,
    });
    if (title) setValue('title', title, { shouldValidate: false, shouldDirty: false });
  }, [changeType, tireId, tires, t, setValue]);

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
          onChange={() => {
            isTitleManual.current = true;
          }}
          hint={t('timeline.fields.titleHint')}
        />

        <FormFieldCardSelect
          control={control}
          name="changeType"
          options={translateCardSelectOptions(t, TIRE_CHANGE_TYPE_CONFIG)}
        />

        <FormFieldSelect
          control={control}
          name="tireId"
          label={t('timeline.fields.tireId')}
          options={tireOptions}
          placeholder={t('common.labels.noOptions')}
          size="lg"
          fullWidth
          hint={t('timeline.fields.tireIdHint')}
        />

        <FormFieldDatePicker
          control={control}
          name="eventDate"
          label={t('timeline.fields.eventDate')}
          maxDate={new Date()}
          size="lg"
        />

        {isInstall && (
          <FormFieldNumberInput
            control={control}
            name="installedMileage"
            label={t('timeline.fields.installedMileage')}
            hint={t('timeline.fields.installedMileageHint')}
            placeholder="0"
            unit={t('units.km')}
            format="mileage"
            size="lg"
          />
        )}

        {isRemove && (
          <>
            <FormFieldNumberInput
              control={control}
              name="removedMileage"
              label={t('timeline.fields.removedMileage')}
              hint={t('timeline.fields.removedMileageHint')}
              placeholder="0"
              unit={t('units.km')}
              format="mileage"
              size="lg"
            />
            <FormFieldDatePicker
              control={control}
              name="removedDate"
              label={t('timeline.fields.removedDate')}
              maxDate={new Date()}
              size="lg"
            />
          </>
        )}
      </Stack>
    </Form>
  );
};
