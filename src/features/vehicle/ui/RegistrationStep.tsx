import { FormFieldInput } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const RegistrationStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormFieldInput
        control={control}
        name="plateNumber"
        label={t('vehicle.form.plateNumber')}
        required
        size="lg"
        placeholder={t('vehicle.form.plateNumberPlaceholder')}
      />

      <FormFieldInput
        control={control}
        name="vin"
        label={t('vehicle.form.vin')}
        size="lg"
        placeholder={t('vehicle.form.vinPlaceholder')}
      />

      <FormFieldInput
        control={control}
        name="countryOfOrigin"
        label={t('vehicle.form.countryOfOrigin')}
        size="lg"
        placeholder={t('vehicle.form.countryOfOriginPlaceholder')}
      />
    </>
  );
};
