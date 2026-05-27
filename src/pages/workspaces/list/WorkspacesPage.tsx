import {
  useWorkspacesQuery,
  WorkspaceEmpty,
  WorkspaceError,
  WorkspacesList,
  WorkspacesListSkeleton,
} from '@entities/workspace';
import { ROUTES } from '@shared/config';
import { Stack } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const WorkspacesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data, refetch, isPending, isError } = useWorkspacesQuery();

  const workspaceList = data?.data ?? [];
  const workspaceCount = workspaceList.length ?? 0;
  const isEmpty = !isPending && workspaceCount === 0;

  if (isPending) return <WorkspacesListSkeleton />;
  if (isError) return <WorkspaceError retry={refetch} />;
  if (isEmpty) return <WorkspaceEmpty />;

  return (
    <Stack gap="3xl">
      <PageHeader
        title={t('workspace.list.title')}
        onCreate={() => navigate(ROUTES.WORKSPACES.NEW)}
        buttonLabel={t('workspace.list.create')}
        description={t('workspace.list.count', { count: workspaceCount })}
      />

      <WorkspacesList workspaces={workspaceList} />
    </Stack>
  );
};
