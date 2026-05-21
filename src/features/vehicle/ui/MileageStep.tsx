import { MileageInput } from '@entities/vehicle';
import { FormField } from '@shared/ui/components';
import { NumberInput } from '@shared/ui/primitives';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const MileageStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormField
        control={control}
        name="currentMileage"
        label={t('vehicle.form.currentMileage')}
        required
        render={(field) => (
          <MileageInput
            value={field.value}
            onChange={field.onChange}
            hint={t('vehicle.form.currentMileageHint')}
          />
        )}
      />

      <FormField
        control={control}
        name="engineDisplacementCc"
        label={t('vehicle.form.engineDisplacementCc')}
        render={(field) => (
          <NumberInput
            size="lg"
            min={0}
            placeholder="1600"
            unit={t('units.engineVolume')}
            value={field.value !== undefined ? Number(field.value) : undefined}
            onChange={field.onChange}
          />
        )}
      />
    </>
  );
};
