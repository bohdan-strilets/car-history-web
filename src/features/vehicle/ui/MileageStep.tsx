import { useTranslation } from 'react-i18next';

import { FormFieldMileageInput } from '@entities/vehicle';
import { FormFieldNumberInput } from '@shared/ui';

import type { VehicleStepProps } from '../model';

export const MileageStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormFieldMileageInput
        control={control}
        name="currentMileage"
        label={t('vehicle.fields.currentMileage')}
        required
        hint={t('vehicle.fields.currentMileageHint')}
      />

      <FormFieldNumberInput
        control={control}
        name="engineDisplacementCc"
        label={t('vehicle.fields.engineDisplacementCc')}
        size="lg"
        min={0}
        placeholder="1600"
        required
        unit={t('units.cc')}
        hint={t('vehicle.fields.engineDisplacementCcHint')}
      />
    </>
  );
};
