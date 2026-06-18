import { useTranslation } from 'react-i18next';

import { FormFieldCombobox, FormFieldInput } from '@shared/ui';

import { getCountryOptions, type VehicleStepProps } from '../model';

export const RegistrationStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();
  const countryOptions = getCountryOptions();

  return (
    <>
      <FormFieldInput
        control={control}
        name="plateNumber"
        label={t('vehicle.fields.plateNumber')}
        required
        size="lg"
        placeholder={t('vehicle.fields.plateNumberPlaceholder')}
      />

      <FormFieldInput
        control={control}
        name="vin"
        label={t('vehicle.fields.vin')}
        size="lg"
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
