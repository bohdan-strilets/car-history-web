import { StateView } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { WorkspaceErrorProps } from './workspace-state.types';

export const WorkspaceError = ({ retry }: WorkspaceErrorProps) => {
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
