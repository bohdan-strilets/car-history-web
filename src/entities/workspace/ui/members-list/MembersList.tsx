import { Spacer, Stack, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import { InviteRow } from '../invite-row';
import { MemberRow } from '../member-row';

import type { MembersListProps } from './members-list.types';

export const MembersList = ({
  members,
  invites,
  currentUserId,
  currentUserRole,
  onEdit,
  onRemove,
  onCancelInvite,
}: MembersListProps) => {
  const { t } = useTranslation();
  const isInvitesEmpty = invites.length === 0;

  return (
    <Stack gap="xl">
      {members.map((member) => (
        <MemberRow
          key={member.id}
          member={member}
          currentUserRole={currentUserRole}
          isCurrentUser={member.userId === currentUserId}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}

      {!isInvitesEmpty && (
        <>
          <Spacer size="xs" />
          <Text weight="semibold" size="lg">
            {t('workspace.members.pendingInvites')}
          </Text>
          {invites.map((invite) => (
            <InviteRow key={invite.id} invite={invite} onCancel={onCancelInvite} />
          ))}
        </>
      )}
    </Stack>
  );
};
