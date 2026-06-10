import type { FieldValues, UseFormSetError } from 'react-hook-form';

import type { TFunction } from 'i18next';

export interface FormErrorsParams<T extends FieldValues> {
  error: unknown;
  setError: UseFormSetError<T>;
  t: TFunction;
}
