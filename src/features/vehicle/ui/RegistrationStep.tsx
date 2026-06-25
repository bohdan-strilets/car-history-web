import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LicensePlate } from '@entities/vehicle';
import { FormFieldCombobox, FormFieldInput } from '@shared/ui';
import { getCountryOptions } from '@shared/utils';

import { type VehicleStepProps } from '../model';

export const RegistrationStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();
  const countryOptions = getCountryOptions();
  const plateNumber = useWatch({ control, name: 'plateNumber' });

  return (
    <>
      <FormFieldInput
        control={control}
        name="plateNumber"
        label={t('vehicle.fields.plateNumber')}
        required
        size="lg"
        transform="uppercase"
        placeholder={t('vehicle.fields.plateNumberPlaceholder')}
      />

      {plateNumber && <LicensePlate plateNumber={plateNumber} />}

      <FormFieldInput
        control={control}
        name="vin"
        label={t('vehicle.fields.vin')}
        size="lg"
        transform="uppercase"
        placeholder={t('vehicle.fields.vinPlaceholder')}
      />

      <FormFieldCombobox
        control={control}
        name="countryOfOrigin"
        label={t('vehicle.fields.countryOfOrigin')}
        options={countryOptions}
        placeholder={t('vehicle.fields.countryOfOriginPlaceholder')}
        size="lg"
      />
    </>
  );
};
