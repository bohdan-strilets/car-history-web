import { useTranslation } from 'react-i18next';

import { TIRE_TYPE_CONFIG } from '@entities/tire';
import type { VehicleId } from '@entities/vehicle';
import type { WorkspaceId } from '@entities/workspace';
import { Form, FormFieldCardSelect, FormFieldInput, FormFieldNumberInput, Stack } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import { useCreateTireForm } from '../model';

interface CreateTireFormProps {
  workspaceId: WorkspaceId;
  vehicleId: VehicleId;
  onSuccess?: () => void;
}

export const CreateTireForm = ({ workspaceId, vehicleId, onSuccess }: CreateTireFormProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useCreateTireForm({
    workspaceId,
    vehicleId,
    onSuccess,
  });

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <Stack gap="md">
        <FormFieldCardSelect
          control={control}
          name="type"
          options={translateCardSelectOptions(t, TIRE_TYPE_CONFIG)}
        />
        <FormFieldInput
          control={control}
          name="brand"
          label={t('tire.fields.brand')}
          placeholder={t('tire.fields.brandPlaceholder')}
          size="lg"
        />
        <FormFieldInput
          control={control}
          name="model"
          label={t('tire.fields.model')}
          placeholder={t('tire.fields.modelPlaceholder')}
          size="lg"
        />
        <Stack direction="row" gap="sm">
          <FormFieldNumberInput
            control={control}
            name="width"
            label={t('tire.fields.width')}
            unit="mm"
            size="lg"
          />
          <FormFieldNumberInput
            control={control}
            name="aspectRatio"
            label={t('tire.fields.aspectRatio')}
            unit="%"
            size="lg"
          />
          <FormFieldNumberInput
            control={control}
            name="rimDiameter"
            label={t('tire.fields.rimDiameter')}
            unit={'"'}
            size="lg"
          />
        </Stack>
        <FormFieldNumberInput
          control={control}
          name="price"
          label={t('fields.price')}
          unit={t('enums.currencyShort.PLN')}
          size="lg"
        />
        <FormFieldInput
          control={control}
          name="storageLocation"
          label={t('tire.fields.storageLocation')}
          placeholder={t('tire.fields.storageLocationPlaceholder')}
          size="lg"
        />
      </Stack>
    </Form>
  );
};
