import { getBrandOptions, getModelOptions, VEHICLE_POPULAR_BRANDS_CONFIG } from '@entities/vehicle';
import {
  FormFieldCardSelect,
  FormFieldCombobox,
  FormFieldInput,
  FormFieldYearPicker,
} from '@shared/ui';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { type VehicleStepProps } from '../model';

export const BasicInfoStep = ({ control }: VehicleStepProps) => {
  const { t } = useTranslation();

  const selectedBrand = useWatch({ control, name: 'brand' });
  const brandOptions = getBrandOptions();
  const modelOptions = getModelOptions(selectedBrand);

  return (
    <>
      <FormFieldCardSelect
        control={control}
        name="brand"
        label={t('vehicle.form.popularBrands')}
        options={VEHICLE_POPULAR_BRANDS_CONFIG}
      />

      <FormFieldCombobox
        control={control}
        name="brand"
        label={t('vehicle.form.brand')}
        required
        options={brandOptions}
        placeholder={t('vehicle.form.brandPlaceholder')}
        size="lg"
      />

      <FormFieldCombobox
        control={control}
        name="model"
        label={t('vehicle.form.model')}
        required
        options={modelOptions}
        placeholder={t('vehicle.form.modelPlaceholder')}
        disabled={!selectedBrand}
        size="lg"
      />

      <FormFieldYearPicker
        control={control}
        name="year"
        label={t('vehicle.form.year')}
        required
        min={1990}
      />

      <FormFieldInput
        control={control}
        name="generation"
        label={t('vehicle.form.generation')}
        size="lg"
        placeholder={t('vehicle.form.generationPlaceholder')}
      />

      <FormFieldInput
        control={control}
        name="nickname"
        label={t('vehicle.form.nickname')}
        size="lg"
        placeholder={t('vehicle.form.nicknamePlaceholder')}
      />
    </>
  );
};
