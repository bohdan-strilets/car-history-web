import { useEffect, useMemo, useRef } from 'react';

import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { VEHICLE_POPULAR_BRANDS_CONFIG } from '@entities/vehicle';
import { APP_CONSTANTS } from '@shared/config';
import {
  FormFieldCardSelect,
  FormFieldCombobox,
  FormFieldInput,
  FormFieldYearPicker,
} from '@shared/ui';

import {
  getBrandOptions,
  getGenerationOptions,
  getGenerationYearRange,
  getModelOptions,
  type VehicleBasicInfoStepProps,
} from '../model';

export const BasicInfoStep = ({ control, setValue }: VehicleBasicInfoStepProps) => {
  const { t } = useTranslation();

  const selectedBrand = useWatch({ control, name: 'brand' });
  const selectedModel = useWatch({ control, name: 'model' });
  const selectedGeneration = useWatch({ control, name: 'generation' });
  const selectedYear = useWatch({ control, name: 'year' });

  const brandOptions = getBrandOptions();
  const modelOptions = getModelOptions(selectedBrand);
  const generationOptions = getGenerationOptions(selectedBrand, selectedModel);

  const { startYear, endYear } = useMemo(
    () => getGenerationYearRange(selectedGeneration),
    [selectedGeneration],
  );

  const isFirstBrandRender = useRef(true);
  const isFirstModelRender = useRef(true);

  useEffect(() => {
    if (isFirstBrandRender.current) {
      isFirstBrandRender.current = false;
      return;
    }

    setValue('model', '');
    setValue('generation', '');
    setValue('year', NaN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBrand]);

  useEffect(() => {
    if (isFirstModelRender.current) {
      isFirstModelRender.current = false;
      return;
    }

    setValue('generation', '');
    setValue('year', NaN);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModel]);

  useEffect(() => {
    if (startYear === null || endYear === null || Number.isNaN(selectedYear)) return;

    if (selectedYear < startYear || selectedYear > endYear) {
      setValue('year', NaN);
    }
  }, [startYear, endYear, selectedYear, setValue]);

  return (
    <>
      <FormFieldCardSelect
        control={control}
        name="brand"
        label={t('vehicle.form.popularBrands')}
        options={VEHICLE_POPULAR_BRANDS_CONFIG}
        hint={t('vehicle.fields.popularBrandsHint')}
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

      <FormFieldCombobox
        control={control}
        name="generation"
        label={t('vehicle.fields.generation')}
        required
        allowCustomValue
        options={generationOptions}
        placeholder={t('vehicle.fields.generationPlaceholder')}
        disabled={!selectedBrand || !selectedModel}
        size="lg"
        hint={t('vehicle.fields.generationHint')}
      />

      <FormFieldYearPicker
        control={control}
        name="year"
        label={t('vehicle.fields.year')}
        required
        min={startYear ?? 1990}
        max={endYear ?? APP_CONSTANTS.CURRENT_YEAR}
      />

      <FormFieldInput
        control={control}
        name="nickname"
        label={t('vehicle.fields.nickname')}
        size="lg"
        placeholder={t('vehicle.fields.nicknamePlaceholder')}
        hint={t('vehicle.fields.nicknameHint')}
      />
    </>
  );
};
