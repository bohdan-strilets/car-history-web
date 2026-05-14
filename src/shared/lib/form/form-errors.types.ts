import type { TFunction } from 'i18next';
import type { FieldValues, UseFormSetError } from 'react-hook-form';

export interface FormErrorsParams<T extends FieldValues> {
  error: unknown;
  setError: UseFormSetError<T>;
  t: TFunction;
}
