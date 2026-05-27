import type { Workspace } from '@entities/workspace';
import { WorkspaceForm } from '@features/workspace';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const NewWorkspacePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSuccess = (workspace: Workspace) => {
    navigate(ROUTES.WORKSPACES.DETAIL(workspace.id));
  };

  return (
    <Stack gap="3xl">
      <PageHeader
        title={t('workspace.new.title')}
        buttonLabel={t('common.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />

      <WorkspaceForm onSuccess={handleSuccess} submitLabel={t('common.create')} />
    </Stack>
  );
};
