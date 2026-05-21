import { FormField } from '@shared/ui/components';
import { Input } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const RegistrationStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormField
        control={control}
        name="plateNumber"
        label={t('vehicle.form.plateNumber')}
        required
        render={(field) => (
          <Input size="lg" placeholder={t('vehicle.form.plateNumberPlaceholder')} {...field} />
        )}
      />

      <FormField
        control={control}
        name="vin"
        label={t('vehicle.form.vin')}
        render={(field) => (
          <Input size="lg" placeholder={t('vehicle.form.vinPlaceholder')} {...field} />
        )}
      />

      <FormField
        control={control}
        name="countryOfOrigin"
        label={t('vehicle.form.countryOfOrigin')}
        render={(field) => (
          <Input size="lg" placeholder={t('vehicle.form.countryOfOriginPlaceholder')} {...field} />
        )}
      />
    </>
  );
};
