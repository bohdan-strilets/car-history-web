import {
  CURRENCY_CONFIG,
  DATE_FORMAT_CONFIG,
  DISTANCE_UNIT_CONFIG,
  FUEL_UNIT_CONFIG,
  TIMEZONE_CONFIG,
} from '@entities/workspace';
import { useUpdateWorkspaceSettingsMutation } from '@features/workspace';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardSelect, Combobox, Form, FormField } from '@shared/ui/components';
import { translateCardSelectOptions } from '@shared/utils';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import {
  createWorkspaceSettingsSchema,
  type WorkspaceSettingsFormProps,
  type WorkspaceSettingsValues,
} from '../model';

export const WorkspaceSettingsForm = ({
  workspaceId,
  onSuccess,
  onSkip,
}: WorkspaceSettingsFormProps) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createWorkspaceSettingsSchema(t));

  const { control, handleSubmit, setError } = useForm<WorkspaceSettingsValues>({
    resolver,
    defaultValues: {
      currency: 'PLN',
      timezone: 'Europe/Warsaw',
      distanceUnit: 'KM',
      fuelUnit: 'L',
      dateFormat: 'DD_MM_YYYY',
    },
  });

  const { mutate: update, isPending, error } = useUpdateWorkspaceSettingsMutation();

  const onSubmit = (data: WorkspaceSettingsValues) => {
    update({ id: workspaceId, dto: data }, { onSuccess: (settings) => onSuccess(settings.data) });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} submitLabel={t('common.next')} isLoading={isPending}>
      <FormField
        control={control}
        name="timezone"
        label={t('workspace.timezone')}
        render={(field) => (
          <Combobox
            options={TIMEZONE_CONFIG}
            value={field.value}
            onChange={field.onChange}
            placeholder={t('workspace.fields.timezonePlaceholder')}
            size="lg"
          />
        )}
      />

      <FormField
        control={control}
        name="currency"
        label={t('workspace.fields.currency')}
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, CURRENCY_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="distanceUnit"
        label={t('workspace.fields.distanceUnit')}
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, DISTANCE_UNIT_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="fuelUnit"
        label={t('workspace.fields.fuelUnit')}
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, FUEL_UNIT_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />

      <FormField
        control={control}
        name="dateFormat"
        label={t('workspace.fields.dateFormat')}
        render={(field) => (
          <CardSelect
            options={translateCardSelectOptions(t, DATE_FORMAT_CONFIG)}
            value={field.value ? [field.value] : []}
            onChange={(val) => field.onChange(val[0] ?? '')}
            maxSelect={1}
          />
        )}
      />
    </Form>
  );
};
