import {
  EditMemberRoleModal,
  InviteForm,
  useCancelInvite,
  useRemoveMember,
} from '@features/workspace';
import { Stack, useModal } from '@shared/ui';
import { PageHeader } from '@widgets/page-header';
import { useTranslation } from 'react-i18next';

import { MembersList, MembersListSkeleton } from '../members-list';

import type { MembersTabProps } from './workspace-tabs.types';

export const MembersTab = ({
  workspaceId,
  members,
  invites,
  currentUserId,
  currentUserRole,
  isPending,
}: MembersTabProps) => {
  const { t } = useTranslation();
  const modal = useModal();

  const { handleRemoveMember } = useRemoveMember(workspaceId);
  const { handleCancelInvite } = useCancelInvite(workspaceId);

  if (isPending) return <MembersListSkeleton />;

  return (
    <Stack gap="xl">
      <PageHeader
        title={t('workspace.members.title')}
        buttonLabel={t('workspace.members.invite')}
        buttonIcon="userPlus"
        onCreate={() =>
          modal.open(<InviteForm workspaceId={workspaceId} onSuccess={() => modal.closeLast()} />, {
            title: t('workspace.invite.title'),
          })
        }
      />

      <MembersList
        members={members}
        invites={invites}
        currentUserId={currentUserId}
        currentUserRole={currentUserRole}
        onEdit={(member) =>
          modal.open(
            <EditMemberRoleModal
              workspaceId={workspaceId}
              member={member}
              onSuccess={() => modal.closeLast()}
            />,
            { title: t('workspace.members.editRole') },
          )
        }
        onRemove={handleRemoveMember}
        onCancelInvite={handleCancelInvite}
      />
    </Stack>
  );
};
