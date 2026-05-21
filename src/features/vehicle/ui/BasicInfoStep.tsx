import { getBrandOptions, getModelOptions, VEHICLE_POPULAR_BRANDS_CONFIG } from '@entities/vehicle';
import { CardSelect, Combobox, FormField, YearPicker } from '@shared/ui/components';
import { Input } from '@shared/ui/primitives';
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
      <FormField
        control={control}
        name="brand"
        label={t('vehicle.form.popularBrands')}
        render={(field) => (
          <CardSelect
            options={VEHICLE_POPULAR_BRANDS_CONFIG}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="brand"
        label={t('vehicle.form.brand')}
        required
        render={(field) => (
          <Combobox
            options={brandOptions}
            value={field.value}
            onChange={field.onChange}
            placeholder={t('vehicle.form.brandPlaceholder')}
            size="lg"
          />
        )}
      />

      <FormField
        control={control}
        name="model"
        label={t('vehicle.form.model')}
        required
        render={(field) => (
          <Combobox
            options={modelOptions}
            value={field.value}
            onChange={field.onChange}
            placeholder={t('vehicle.form.modelPlaceholder')}
            disabled={!selectedBrand}
            size="lg"
          />
        )}
      />

      <FormField
        control={control}
        name="year"
        label={t('vehicle.form.year')}
        required
        render={(field) => (
          <YearPicker value={field.value ?? null} onChange={field.onChange} min={1990} />
        )}
      />

      <FormField
        control={control}
        name="generation"
        label={t('vehicle.form.generation')}
        render={(field) => (
          <Input size="lg" placeholder={t('vehicle.form.generationPlaceholder')} {...field} />
        )}
      />

      <FormField
        control={control}
        name="nickname"
        label={t('vehicle.form.nickname')}
        render={(field) => (
          <Input size="lg" placeholder={t('vehicle.form.nicknamePlaceholder')} {...field} />
        )}
      />
    </>
  );
};
