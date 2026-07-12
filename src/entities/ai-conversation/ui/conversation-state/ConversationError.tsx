import { useTranslation } from 'react-i18next';

import { StateView } from '@shared/ui';

import type { ConversationErrorProps } from './conversation-state.types';

export const ConversationError = ({ retry }: ConversationErrorProps) => {
  const { t } = useTranslation();

  return (
    <StateView
      icon="wifiOff"
      variant="error"
      title={t('errors.UNKNOWN_ERROR')}
      description={t('errors.INTERNAL_SERVER_ERROR')}
      actionLabel={t('common.actions.retry')}
      onAction={retry}
    />
  );
};
