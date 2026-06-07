import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';
import { StateView } from '@shared/ui';

export const WorkspaceEmpty = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <StateView
      icon="boxes"
      variant="default"
      title={t('workspace.list.empty.title')}
      description={t('workspace.list.empty.description')}
      actionLabel={t('workspace.list.create')}
      onAction={() => navigate(ROUTES.WORKSPACES.NEW)}
    />
  );
};
