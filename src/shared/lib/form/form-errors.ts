import { isHttpError, isValidationError } from '@shared/api';
import type { FieldValues, Path } from 'react-hook-form';

import type { FormErrorsParams } from './form-errors.types';

export const useFormErrors = <T extends FieldValues>({
  error,
  setError,
  t,
}: FormErrorsParams<T>): string | undefined => {
  if (!error) return undefined;

  if (isValidationError(error)) {
    Object.entries(error.fields).forEach(([field, code]) => {
      setError(field as Path<T>, {
        message: t(`validation.${code}`),
      });
    });

    return undefined;
  }

  if (isHttpError(error)) {
    return t(`errors.${error.errorCode}`);
  }

  return t('errors.UNKNOWN_ERROR');
};
