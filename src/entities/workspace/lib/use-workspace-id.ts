import { useParams } from 'react-router-dom';

type WorkspaceIdParams = {
  workspaceId: string;
};

export const useWorkspaceId = (): string => {
  const { workspaceId = '' } = useParams<WorkspaceIdParams>();
  return workspaceId;
};
