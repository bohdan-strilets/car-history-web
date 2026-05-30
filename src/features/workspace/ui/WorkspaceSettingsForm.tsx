import {
  CURRENCY_CONFIG,
  DATE_FORMAT_CONFIG,
  DISTANCE_UNIT_CONFIG,
  FUEL_UNIT_CONFIG,
} from '@entities/workspace';
import { TIMEZONE_OPTIONS, type WorkspaceSettingsFormProps } from '@features/workspace/model';
import { Form, FormFieldCardSelect, FormFieldCombobox } from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';
import { useTranslation } from 'react-i18next';

export const WorkspaceSettingsForm = ({
  control,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
  onSkip,
}: WorkspaceSettingsFormProps) => {
  const { t } = useTranslation();

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={submitLabel}
      isLoading={isPending}
      error={errorMessage}
      onSkip={onSkip}
    >
      <FormFieldCombobox
        control={control}
        name="timezone"
        label={t('workspace.timezone')}
        options={TIMEZONE_OPTIONS}
        placeholder={t('workspace.fields.timezonePlaceholder')}
        size="lg"
      />
      <FormFieldCardSelect
        control={control}
        name="currency"
        label={t('workspace.fields.currency')}
        options={translateCardSelectOptions(t, CURRENCY_CONFIG)}
      />
      <FormFieldCardSelect
        control={control}
        name="distanceUnit"
        label={t('workspace.fields.distanceUnit')}
        options={translateCardSelectOptions(t, DISTANCE_UNIT_CONFIG)}
      />
      <FormFieldCardSelect
        control={control}
        name="fuelUnit"
        label={t('workspace.fields.fuelUnit')}
        options={translateCardSelectOptions(t, FUEL_UNIT_CONFIG)}
      />
      <FormFieldCardSelect
        control={control}
        name="dateFormat"
        label={t('workspace.fields.dateFormat')}
        options={translateCardSelectOptions(t, DATE_FORMAT_CONFIG)}
      />
    </Form>
  );
};
