import type { WorkspaceSettings } from '@entities/workspace';
import { useWorkspaceSettingsForm, WorkspaceSettingsForm } from '@features/workspace';
import { useTranslation } from 'react-i18next';

interface EditWorkspaceSettingsModalProps {
  workspaceId: string;
  settings?: WorkspaceSettings | null;
  onSuccess: () => void;
}

export const EditWorkspaceSettingsModal = ({
  workspaceId,
  settings,
  onSuccess,
}: EditWorkspaceSettingsModalProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useWorkspaceSettingsForm({
    workspaceId,
    settings,
    onSuccess: () => onSuccess(),
  });

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
