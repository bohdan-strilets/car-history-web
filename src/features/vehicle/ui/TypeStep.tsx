import {
  BODY_TYPE_CONFIG,
  DRIVE_TYPE_CONFIG,
  FUEL_TYPE_CONFIG,
  TRANSMISSION_CONFIG,
} from '@entities/vehicle';
import { FormFieldCardSelect } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const TypeStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormFieldCardSelect
        control={control}
        name="fuelType"
        label={t('vehicle.form.fuelType')}
        required
        options={translateCardSelectOptions(t, FUEL_TYPE_CONFIG)}
        maxSelect={2}
        multi
      />

      <FormFieldCardSelect
        control={control}
        name="bodyType"
        label={t('vehicle.form.bodyType')}
        required
        options={translateCardSelectOptions(t, BODY_TYPE_CONFIG)}
        maxSelect={1}
      />

      <FormFieldCardSelect
        control={control}
        name="transmission"
        label={t('vehicle.form.transmission')}
        required
        options={translateCardSelectOptions(t, TRANSMISSION_CONFIG)}
        maxSelect={1}
      />

      <FormFieldCardSelect
        control={control}
        name="driveType"
        label={t('vehicle.form.driveType')}
        required
        options={translateCardSelectOptions(t, DRIVE_TYPE_CONFIG)}
        maxSelect={1}
      />
    </>
  );
};
