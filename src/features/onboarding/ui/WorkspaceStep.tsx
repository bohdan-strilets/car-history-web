import { useWorkspace, type Workspace } from '@entities/workspace';
import { WorkspaceForm } from '@features/workspace';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { WorkspaceStepProps } from '../model';

import { StepSuccess } from './StepSuccess';

export const WorkspaceStep = ({ onNext }: WorkspaceStepProps) => {
  const { t } = useTranslation();
  const { setActiveWorkspaceId, setActiveWorkspace } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = (workspace: Workspace) => {
    setActiveWorkspaceId(workspace.id);
    setActiveWorkspace(workspace);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <StepSuccess
        title={t('onboarding.workspace.success.title')}
        description={t('onboarding.workspace.success.description')}
        onDone={onNext}
      />
    );
  }

  return <WorkspaceForm onSuccess={handleSuccess} />;
};
