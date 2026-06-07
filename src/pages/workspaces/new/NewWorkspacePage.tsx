import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useWorkspace, type Workspace } from '@entities/workspace';
import { useWorkspaceForm, WorkspaceForm } from '@features/workspace';
import { ROUTES } from '@shared/config';
import { showToast } from '@shared/lib';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';

export const NewWorkspacePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setActiveWorkspace, setActiveWorkspaceId } = useWorkspace();

  const handleSuccess = (workspace: Workspace) => {
    setActiveWorkspaceId(workspace.id);
    setActiveWorkspace(workspace);
    showToast.success(t('workspace.new.success'));
    navigate(ROUTES.WORKSPACES.DETAIL(workspace.id));
  };

  const form = useWorkspaceForm({ onSuccess: handleSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <Stack gap="3xl">
      <PageHeader
        title={t('workspace.new.title')}
        buttonLabel={t('common.actions.back')}
        buttonIcon="arrowLeft"
        onCreate={() => navigate(ROUTES.WORKSPACES.ROOT)}
      />

      <WorkspaceForm
        control={control}
        handleSubmit={handleSubmit}
        isPending={isPending}
        errorMessage={errorMessage}
        submitLabel={t('common.actions.create')}
      />
    </Stack>
  );
};
