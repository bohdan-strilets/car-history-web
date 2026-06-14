import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { workDraftSchema, type WorkDraftValues } from '@features/timeline';
import {
  Button,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Panel,
  Stack,
} from '@shared/ui';

import type { WorkDraftFormProps } from './service.types';

export const WorkDraftForm = ({ onAdd }: WorkDraftFormProps) => {
  const { t } = useTranslation();

  const resolver = zodResolver(workDraftSchema(t));
  const defaultValues: WorkDraftValues = {
    name: '',
    price: 0,
    description: '',
  };

  const form = useForm<WorkDraftValues>({ resolver, defaultValues });
  const { control, handleSubmit, reset } = form;

  const onSubmit = (values: WorkDraftValues) => {
    onAdd(values);
    reset();
  };

  return (
    <Panel variant="neuRaised" p="md" gap="md">
      <Stack gap="md">
        <FormFieldInput
          control={control}
          name="name"
          label={t('timeline.fields.workName')}
          placeholder={t('timeline.fields.workNamePlaceholder')}
          size="lg"
        />
        <FormFieldNumberInput
          control={control}
          name="price"
          label={t('timeline.fields.price')}
          placeholder="0.00"
          unit={t('enums.currencyShort.PLN')}
          size="lg"
        />
        <FormFieldTextarea
          control={control}
          name="description"
          label={t('timeline.fields.description')}
          placeholder={t('timeline.fields.descriptionPlaceholder')}
          size="lg"
        />
        <Button type="button" size="lg" onClick={handleSubmit(onSubmit)} fullWidth>
          {t('common.actions.add')}
        </Button>
      </Stack>
    </Panel>
  );
};
