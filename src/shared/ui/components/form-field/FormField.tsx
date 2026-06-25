import { Controller, type FieldValues } from 'react-hook-form';

import { Field } from '../field';

import type { FormFieldProps } from './form-field.types';

export const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  fullWidth,
  direction,
  render,
}: FormFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field
          label={label}
          hint={hint}
          required={required}
          error={fieldState.error?.message}
          htmlFor={name}
          fullWidth={fullWidth}
          direction={direction}
        >
          {render(field)}
        </Field>
      )}
    />
  );
};
