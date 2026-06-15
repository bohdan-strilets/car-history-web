import { useTranslation } from 'react-i18next';

import {
  useWorkspaceSettingsForm,
  WorkspaceSettingsForm,
  type EditWorkspaceSettingsModalProps,
} from '@features/workspace';
import { showToast } from '@shared/lib';

export const EditWorkspaceSettingsModal = ({
  workspaceId,
  settings,
  onSuccess,
}: EditWorkspaceSettingsModalProps) => {
  const { t } = useTranslation();

  const handleSuccess = () => {
    onSuccess();
    showToast.success(t('workspace.settings.updateSuccess'));
  };

  const form = useWorkspaceSettingsForm({ workspaceId, settings, onSuccess: handleSuccess });
  const { control, handleSubmit, isPending, errorMessage } = form;

  return (
    <WorkspaceSettingsForm
      control={control}
      handleSubmit={handleSubmit}
      isPending={isPending}
      errorMessage={errorMessage}
      submitLabel={t('common.actions.save')}
    />
  );
};
