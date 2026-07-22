import { useEffect } from 'react';

import type { FieldValues, Path } from 'react-hook-form';

import { isHttpError, isValidationError } from '@shared/api';

import type { FormErrorsParams } from './form-errors.types';

export const useFormErrors = <T extends FieldValues>({
  error,
  setError,
  t,
}: FormErrorsParams<T>): string | undefined => {
  useEffect(() => {
    if (isValidationError(error)) {
      Object.entries(error.fields).forEach(([field, code]) => {
        setError(field as Path<T>, {
          message: t(`validation.${code}` as never),
        });
      });
    }
  }, [error, setError, t]);

  if (!error) return undefined;
  if (isValidationError(error)) return undefined;

  if (isHttpError(error)) {
    return t(`errors.${error.errorCode}` as never);
  }

  return t('errors.UNKNOWN_ERROR' as never);
};
