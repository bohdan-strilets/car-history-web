import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { partDraftSchema, type PartDraftValues } from '@features/timeline';
import {
  Button,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Panel,
  Stack,
} from '@shared/ui';

import type { PartDraftFormProps } from './service.types';

export const PartDraftForm = ({ onAdd }: PartDraftFormProps) => {
  const { t } = useTranslation();

  const resolver = zodResolver(partDraftSchema(t));
  const defaultValues: PartDraftValues = {
    name: '',
    price: 0,
    quantity: 1,
    description: '',
  };

  const form = useForm<PartDraftValues>({ resolver, defaultValues });
  const { control, handleSubmit, reset } = form;

  const onSubmit = (values: PartDraftValues) => {
    onAdd(values);
    reset();
  };

  return (
    <Panel variant="neuRaised" p="md" gap="md">
      <Stack gap="md">
        <FormFieldInput
          control={control}
          name="name"
          label={t('timeline.fields.partName')}
          placeholder={t('timeline.fields.partNamePlaceholder')}
          size="lg"
        />
        <Stack direction="row" gap="md">
          <FormFieldNumberInput
            control={control}
            name="price"
            label={t('timeline.fields.price')}
            placeholder="0.00"
            unit={t('enums.currencyShort.PLN')}
            size="lg"
            fullWidth
          />
          <FormFieldNumberInput
            control={control}
            name="quantity"
            label={t('timeline.fields.quantity')}
            placeholder="1"
            size="lg"
            fullWidth
          />
        </Stack>
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
