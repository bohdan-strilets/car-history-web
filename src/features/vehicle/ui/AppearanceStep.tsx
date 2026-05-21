import { VEHICLE_COLORS_CONFIG } from '@entities/vehicle';
import { FormFieldColorPicker, FormFieldTextarea } from '@shared/ui/components';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const AppearanceStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormFieldColorPicker
        control={control}
        name="color"
        label={t('vehicle.form.color')}
        required
        options={VEHICLE_COLORS_CONFIG}
      />

      <FormFieldTextarea
        control={control}
        name="description"
        label={t('vehicle.form.description')}
        size="lg"
        placeholder={t('vehicle.form.descriptionPlaceholder')}
        rows={4}
        maxRows={10}
      />
    </>
  );
};
