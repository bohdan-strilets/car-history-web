import { useTranslation } from 'react-i18next';

import { EditWorkspaceModal } from '@features/workspace';
import { useModal } from '@shared/ui';

import type { Workspace } from '@entities/workspace';

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
