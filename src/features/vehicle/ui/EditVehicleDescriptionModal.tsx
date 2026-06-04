import { Form, FormFieldTextarea } from '@shared/ui';
import { useTranslation } from 'react-i18next';

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
      submitLabel={t('common.save')}
      isLoading={isPending}
      error={errorMessage}
    >
      <FormFieldTextarea
        control={control}
        name="description"
        label={t('vehicle.form.description')}
        size="lg"
        placeholder={t('vehicle.form.descriptionPlaceholder')}
        rows={4}
        maxRows={10}
      />
    </Form>
  );
};
