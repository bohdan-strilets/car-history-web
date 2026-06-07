import { useTranslation } from 'react-i18next';

import { Form, FormFieldTextarea } from '@shared/ui';

import { useEditVehicleDescriptionForm, type EditVehicleDescriptionModalProps } from '../model';

export const EditVehicleDescriptionModal = ({
  vehicle,
  onSuccess,
}: EditVehicleDescriptionModalProps) => {
  const { t } = useTranslation();

  const form = useEditVehicleDescriptionForm({ vehicle, onSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={t('common.actions.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldTextarea
        control={control}
        name="description"
        label={t('vehicle.fields.description')}
        size="lg"
        placeholder={t('vehicle.fields.descriptionPlaceholder')}
        rows={4}
        maxRows={10}
      />
    </Form>
  );
};
