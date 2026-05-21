import {
  BODY_TYPE_CONFIG,
  DRIVE_TYPE_CONFIG,
  FUEL_TYPE_CONFIG,
  TRANSMISSION_CONFIG,
} from '@entities/vehicle';
import { CardSelect, FormField } from '@shared/ui/components';
import { translateCardSelectOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const TypeStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormField
        control={control}
        name="fuelType"
        label={t('vehicle.form.fuelType')}
        required
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, FUEL_TYPE_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={2}
          />
        )}
      />

      <FormField
        control={control}
        name="bodyType"
        label={t('vehicle.form.bodyType')}
        required
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, BODY_TYPE_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="transmission"
        label={t('vehicle.form.transmission')}
        required
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, TRANSMISSION_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="driveType"
        label={t('vehicle.form.driveType')}
        required
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, DRIVE_TYPE_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />
    </>
  );
};
