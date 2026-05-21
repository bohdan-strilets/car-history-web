import { FormFieldMileageInput, FormFieldNumberInput } from '@shared/ui/components';
import { useTranslation } from 'react-i18next';

import type { VehicleStepProps } from '../model';

export const MileageStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormFieldMileageInput
        control={control}
        name="currentMileage"
        label={t('vehicle.form.currentMileage')}
        required
        hint={t('vehicle.form.currentMileageHint')}
      />

      <FormFieldNumberInput
        control={control}
        name="engineDisplacementCc"
        label={t('vehicle.form.engineDisplacementCc')}
        size="lg"
        min={0}
        placeholder="1600"
        unit={t('units.engineVolume')}
      />
    </>
  );
};
