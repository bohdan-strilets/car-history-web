import {
  useWorkspaceSettingsForm,
  WorkspaceSettingsForm,
  type EditWorkspaceSettingsModalProps,
} from '@features/workspace';
import { useTranslation } from 'react-i18next';

export const EditWorkspaceSettingsModal = ({
  workspaceId,
  settings,
  onSuccess,
}: EditWorkspaceSettingsModalProps) => {
  const { t } = useTranslation();

  const form = useWorkspaceSettingsForm({ workspaceId, settings, onSuccess });
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
