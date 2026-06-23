import type { FieldValues } from 'react-hook-form';

import {
  ColorPicker,
  MileageInput,
  type ColorPickerProps,
  type MileageInputProps,
} from '@entities/vehicle';
import {
  Checkbox,
  DatePicker,
  Input,
  NumberInput,
  PasswordInput,
  Textarea,
  type DatePickerProps,
  type InputProps,
  type NumberInputProps,
  type PasswordInputProps,
  type TextareaProps,
} from '@shared/ui';

import { CardSelect } from '../card-select';
import { Combobox, type ComboboxProps } from '../combobox';
import { Select, type SelectProps } from '../select';
import { YearPicker, type YearPickerProps } from '../year-picker';

import { FormField } from './FormField';

import type { FormFieldProps } from './form-field.types';
import type { CardSelectProps } from '../card-select/card-select.types';

type BaseProps<T extends FieldValues> = Omit<FormFieldProps<T>, 'render'>;

export const FormFieldInput = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...inputProps
}: BaseProps<T> & Omit<InputProps, 'name'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <Input {...field} {...inputProps} />}
  />
);

export const FormFieldPasswordInput = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<PasswordInputProps, 'name'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <PasswordInput {...field} {...props} />}
  />
);

export const FormFieldNumberInput = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<NumberInputProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => (
      <NumberInput
        value={field.value !== undefined ? Number(field.value) : undefined}
        onChange={field.onChange}
        {...props}
      />
    )}
  />
);

export const FormFieldTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<TextareaProps, 'name'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <Textarea {...field} {...props} />}
  />
);

export const FormFieldCombobox = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<ComboboxProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <Combobox value={field.value} onChange={field.onChange} {...props} />}
  />
);

export const FormFieldSelect = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<SelectProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <Select value={field.value} onChange={field.onChange} {...props} />}
  />
);

export const FormFieldCardSelect = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  multi = false,
  ...props
}: BaseProps<T> & Omit<CardSelectProps, 'value' | 'onChange'> & { multi?: boolean }) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => (
      <CardSelect
        value={multi ? (field.value ?? []) : field.value ? [field.value] : []}
        onChange={(val) => (multi ? field.onChange(val) : field.onChange(val[0] ?? ''))}
        {...props}
      />
    )}
  />
);

export const FormFieldYearPicker = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<YearPickerProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => (
      <YearPicker value={field.value ?? null} onChange={field.onChange} {...props} />
    )}
  />
);

export const FormFieldCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<React.ComponentProps<typeof Checkbox>, 'checked' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <Checkbox checked={field.value} onChange={field.onChange} {...props} />}
  />
);

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

export const FormFieldColorPicker = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<ColorPickerProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => <ColorPicker value={field.value} onChange={field.onChange} {...props} />}
  />
);

export const FormFieldDatePicker = <T extends FieldValues>({
  control,
  name,
  label,
  hint,
  required,
  ...props
}: BaseProps<T> & Omit<DatePickerProps, 'value' | 'onChange'>) => (
  <FormField
    control={control}
    name={name}
    label={label}
    hint={hint}
    required={required}
    render={(field) => (
      <DatePicker
        value={field.value ? new Date(field.value) : undefined}
        onChange={(date) => {
          if (!date) return field.onChange(undefined);
          const y = date.getFullYear();
          const m = String(date.getMonth() + 1).padStart(2, '0');
          const d = String(date.getDate()).padStart(2, '0');
          field.onChange(`${y}-${m}-${d}`);
        }}
        {...props}
      />
    )}
  />
);
