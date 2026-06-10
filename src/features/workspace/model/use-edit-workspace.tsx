import { useTranslation } from 'react-i18next';

import type { Workspace } from '@entities/workspace';
import { EditWorkspaceModal } from '@features/workspace';
import { useModal } from '@shared/ui';

export const useEditWorkspace = () => {
  const { t } = useTranslation();
  const modal = useModal();

  const handleEditWorkspace = (workspace: Workspace) => {
    modal.open(<EditWorkspaceModal workspace={workspace} onSuccess={() => modal.closeLast()} />, {
      title: t('workspace.settings.title'),
    });
  };

  return { handleEditWorkspace };
};
