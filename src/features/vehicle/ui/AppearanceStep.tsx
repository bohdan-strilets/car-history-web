import { ColorPicker, VEHICLE_COLORS_CONFIG } from '@entities/vehicle';
import { FormField } from '@shared/ui/components';
import { Textarea } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const AppearanceStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormField
        control={control}
        name="color"
        label={t('vehicle.form.color')}
        required
        render={(field) => (
          <ColorPicker
            options={VEHICLE_COLORS_CONFIG}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <FormField
        control={control}
        name="description"
        label={t('vehicle.form.description')}
        render={(field) => (
          <Textarea
            size="lg"
            placeholder={t('vehicle.form.descriptionPlaceholder')}
            rows={4}
            maxRows={10}
            {...field}
          />
        )}
      />
    </>
  );
};
