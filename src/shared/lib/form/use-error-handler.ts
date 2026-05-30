import { getErrorCode } from '@shared/api';
import type { ParseKeys } from 'i18next';
import { useTranslation } from 'react-i18next';

import { showToast } from '../toast';

export const useErrorHandler = () => {
  const { t } = useTranslation();

  return (error: unknown) => {
    const errorCode = getErrorCode(error);
    const errorMessage = t(`errors.${errorCode}` as ParseKeys);
    showToast.error(errorMessage);
  };
};
