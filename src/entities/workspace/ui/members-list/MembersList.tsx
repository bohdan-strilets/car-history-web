import { Stack } from '@shared/ui';

import { MemberRow } from '../member-row';

import type { MembersListProps } from './members-list.types';

export const MembersList = ({
  members,
  currentUserId,
  currentUserRole,
  onEdit,
  onRemove,
}: MembersListProps) => {
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
    </Stack>
  );
};
