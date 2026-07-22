import type { FieldValues } from 'react-hook-form';

import { FormField, type FormFieldProps } from '@shared/ui';

import { MileageInput } from './MileageInput';

import type { MileageInputProps } from './mileage-input.types';

type BaseProps<T extends FieldValues> = Omit<FormFieldProps<T>, 'render'>;

export const FormFieldMileageInput = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<MileageInputProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    required={required}
    render={(field) => (
      <MileageInput value={field.value} onChange={field.onChange} hint={hint} {...props} />
    )}
  />
);
