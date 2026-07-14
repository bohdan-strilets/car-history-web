import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

import * as Sentry from '@sentry/react';

import { StateView } from '../state-view';

export const ErrorFallback = () => {
  const { t } = useTranslation();
  const error = useRouteError();

  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <StateView
      icon="alertTriangle"
      variant="error"
      title={t('common.errorBoundary.title')}
      description={t('common.errorBoundary.description')}
      actionLabel={t('common.actions.retry')}
      onAction={() => window.location.reload()}
    />
  );
};
