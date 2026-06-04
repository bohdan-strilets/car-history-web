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

      <FormFieldInput
        control={control}
        name="countryOfOrigin"
        label={t('vehicle.fields.countryOfOrigin')}
        size="lg"
        placeholder={t('vehicle.fields.countryOfOriginPlaceholder')}
      />
    </>
  );
};
