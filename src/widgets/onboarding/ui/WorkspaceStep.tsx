import { useWorkspace, type Workspace } from '@entities/workspace';
import { WorkspaceForm } from '@features/workspace';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StepSuccess } from './StepSuccess';

interface WorkspaceStepProps {
  onNext: () => void;
}

export const WorkspaceStep = ({ onNext }: WorkspaceStepProps) => {
  const { t } = useTranslation();
  const { setActiveWorkspace } = useWorkspace();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSuccess = (workspace: Workspace) => {
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
