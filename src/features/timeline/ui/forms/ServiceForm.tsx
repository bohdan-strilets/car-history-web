import { useState } from 'react';

import { useFieldArray, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { SERVICE_CATEGORY_CONFIG } from '@entities/timeline';
import type { TimelineEventFormProps } from '@features/timeline';
import {
  Button,
  Form,
  FormFieldCardSelect,
  FormFieldDatePicker,
  FormFieldInput,
  FormFieldNumberInput,
  FormFieldTextarea,
  Stack,
  Text,
} from '@shared/ui';
import { translateCardSelectOptions } from '@shared/utils';

import { PartDraftForm, ServiceItemCard, WorkDraftForm } from '../service';

export const ServiceForm = ({
  control,
  setValue,
  handleSubmit,
  isPending,
  errorMessage,
  submitLabel,
}: TimelineEventFormProps) => {
  const { t } = useTranslation();

  const worksArray = useFieldArray({ control, name: 'works' });
  const partsArray = useFieldArray({ control, name: 'parts' });

  const [isWorkFormOpen, setIsWorkFormOpen] = useState(false);
  const [isPartFormOpen, setIsPartFormOpen] = useState(false);

  const works = useWatch({ control, name: 'works' }) ?? [];
  const parts = useWatch({ control, name: 'parts' }) ?? [];

  const recalculateCost = (nextWorks: typeof works, nextParts: typeof parts) => {
    const worksSum = nextWorks.reduce((sum, w) => sum + (w.price ?? 0), 0);
    const partsSum = nextParts.reduce((sum, p) => sum + (p.price ?? 0) * (p.quantity ?? 1), 0);
    setValue('cost', worksSum + partsSum);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={submitLabel}
      isLoading={isPending}
      error={errorMessage}
    >
      <Stack gap="md">
        <FormFieldInput
          control={control}
          name="title"
          label={t('timeline.fields.title')}
          placeholder={t('timeline.fields.titlePlaceholder')}
          size="lg"
        />

        <FormFieldCardSelect
          control={control}
          name="serviceCategory"
          options={translateCardSelectOptions(t, SERVICE_CATEGORY_CONFIG)}
        />

        <FormFieldDatePicker
          control={control}
          name="eventDate"
          label={t('timeline.fields.eventDate')}
          maxDate={new Date()}
          size="lg"
        />

        <FormFieldNumberInput
          control={control}
          name="mileage"
          label={t('timeline.fields.mileage')}
          placeholder="0"
          unit={t('units.km')}
          size="lg"
        />

        {/* WORKS */}
        <Stack gap="sm">
          <Text weight="bold">
            {t('timeline.labels.works')} ({worksArray.fields.length})
          </Text>

          {worksArray.fields.map((field, index) => (
            <ServiceItemCard
              key={field.id}
              name={field.name}
              price={field.price}
              description={field.description}
              unit={t('enums.currencyShort.PLN')}
              onRemove={() => {
                worksArray.remove(index);
                const nextWorks = works.filter((_, i) => i !== index);
                recalculateCost(nextWorks, parts);
              }}
            />
          ))}

          {isWorkFormOpen && (
            <WorkDraftForm
              onAdd={(values) => {
                worksArray.append(values);
                setIsWorkFormOpen(false);
                recalculateCost([...works, values], parts);
              }}
            />
          )}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            leftIcon={isWorkFormOpen ? 'close' : 'plus'}
            onClick={() => setIsWorkFormOpen((prev) => !prev)}
            fullWidth
          >
            {isWorkFormOpen ? t('common.actions.cancel') : t('timeline.actions.addWork')}
          </Button>
        </Stack>

        {/* PARTS */}
        <Stack gap="sm">
          <Text weight="bold">
            {t('timeline.labels.parts')} ({partsArray.fields.length})
          </Text>

          {partsArray.fields.map((field, index) => (
            <ServiceItemCard
              key={field.id}
              name={field.name}
              price={field.price}
              quantity={field.quantity}
              description={field.description}
              unit={t('enums.currencyShort.PLN')}
              onRemove={() => {
                partsArray.remove(index);
                const nextParts = parts.filter((_, i) => i !== index);
                recalculateCost(works, nextParts);
              }}
            />
          ))}

          {isPartFormOpen && (
            <PartDraftForm
              onAdd={(values) => {
                partsArray.append(values);
                setIsPartFormOpen(false);
                recalculateCost(works, [...parts, values]);
              }}
            />
          )}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            leftIcon={isPartFormOpen ? 'close' : 'plus'}
            onClick={() => setIsPartFormOpen((prev) => !prev)}
            fullWidth
          >
            {isPartFormOpen ? t('common.actions.cancel') : t('timeline.actions.addPart')}
          </Button>
        </Stack>

        <FormFieldNumberInput
          control={control}
          name="cost"
          label={t('timeline.fields.cost')}
          placeholder="0.00"
          size="lg"
          unit={t('enums.currencyShort.PLN')}
        />

        <FormFieldTextarea
          control={control}
          name="description"
          label={t('timeline.fields.description')}
          placeholder={t('timeline.fields.descriptionPlaceholder')}
          size="lg"
        />
      </Stack>
    </Form>
  );
};
