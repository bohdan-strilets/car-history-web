import { useTranslation } from 'react-i18next';

import { getErrorCode } from '@shared/api';

import { showToast } from '../toast';

import type { ParseKeys } from 'i18next';

export const useErrorHandler = () => {
  const { t } = useTranslation();

  return (error: unknown) => {
    const errorCode = getErrorCode(error);
    const errorMessage = t(`errors.${errorCode}` as ParseKeys);
    showToast.error(errorMessage);
  };
};
