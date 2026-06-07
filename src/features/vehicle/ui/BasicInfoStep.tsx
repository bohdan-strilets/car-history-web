import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { VEHICLE_POPULAR_BRANDS_CONFIG } from '@entities/vehicle';
import {
  FormFieldCardSelect,
  FormFieldCombobox,
  FormFieldInput,
  FormFieldYearPicker,
} from '@shared/ui';

import { getBrandOptions, getModelOptions, type VehicleStepProps } from '../model';

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
        label={t('vehicle.fields.brand')}
        required
        options={brandOptions}
        placeholder={t('vehicle.fields.brandPlaceholder')}
        size="lg"
      />

      <FormFieldCombobox
        control={control}
        name="model"
        label={t('vehicle.fields.model')}
        required
        options={modelOptions}
        placeholder={t('vehicle.fields.modelPlaceholder')}
        disabled={!selectedBrand}
        size="lg"
      />

      <FormFieldYearPicker
        control={control}
        name="year"
        label={t('vehicle.fields.year')}
        required
        min={1990}
      />

      <FormFieldInput
        control={control}
        name="generation"
        label={t('vehicle.fields.generation')}
        size="lg"
        placeholder={t('vehicle.fields.generationPlaceholder')}
      />

      <FormFieldInput
        control={control}
        name="nickname"
        label={t('vehicle.fields.nickname')}
        size="lg"
        placeholder={t('vehicle.fields.nicknamePlaceholder')}
      />
    </>
  );
};
