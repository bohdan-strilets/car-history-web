import type { WorkspaceSettings } from '@entities/workspace';
import { useModal } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { EditWorkspaceSettingsModal } from '../ui';

export const useEditWorkspaceSettings = () => {
  const { t } = useTranslation();
  const modal = useModal();

  const handleEditSettings = (workspaceId: string, settings?: WorkspaceSettings | null) => {
    if (!settings) return;

    modal.open(
      <EditWorkspaceSettingsModal
        workspaceId={workspaceId}
        settings={settings}
        onSuccess={() => modal.closeLast()}
      />,
      { title: t('workspace.settings.title') },
    );
  };

  return { handleEditSettings };
};
