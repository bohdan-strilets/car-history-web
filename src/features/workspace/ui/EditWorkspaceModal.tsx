import { useTranslation } from 'react-i18next';

import { useEditWorkspaceForm, type EditWorkspaceModalProps } from '../model';

import { WorkspaceForm } from './WorkspaceForm';

export const EditWorkspaceModal = ({ workspace, onSuccess }: EditWorkspaceModalProps) => {
  const { t } = useTranslation();

  const { control, handleSubmit, isPending, errorMessage } = useEditWorkspaceForm({
    workspace,
    onSuccess,
  });

  return (
    <WorkspaceForm
      control={control}
      handleSubmit={handleSubmit}
      isPending={isPending}
      errorMessage={errorMessage}
      submitLabel={t('common.actions.save')}
    />
  );
};
