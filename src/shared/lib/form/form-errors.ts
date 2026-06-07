import { useEffect } from 'react';

import i18next from 'i18next';

import { isHttpError, isValidationError } from '@shared/api';

import type { FormErrorsParams } from './form-errors.types';
import type { FieldValues, Path } from 'react-hook-form';

export const useFormErrors = <T extends FieldValues>({
  error,
  setError,
  t,
}: FormErrorsParams<T>): string | undefined => {
  useEffect(() => {
    if (isValidationError(error)) {
      Object.entries(error.fields).forEach(([field, code]) => {
        setError(field as Path<T>, {
          message: i18next.t(`validation.${code}` as never),
        });
      });
    }
  }, [error, setError, t]);

  if (!error) return undefined;
  if (isValidationError(error)) return undefined;

  if (isHttpError(error)) {
    return i18next.t(`errors.${error.errorCode}` as never);
  }

  return i18next.t('errors.UNKNOWN_ERROR' as never);
};
