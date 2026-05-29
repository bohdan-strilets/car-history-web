import { WORKSPACE_ROLE_CONFIG } from '@entities/workspace/model';
import { canEditMember, canRemoveMember } from '@entities/workspace/utils';
import { Avatar, Badge, Button, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { useTranslation } from 'react-i18next';

import type { MemberRowProps } from './member-row.types';

export const MemberRow = ({
  member,
  currentUserRole,
  isCurrentUser,
  onEdit,
  onRemove,
}: MemberRowProps) => {
  const { t } = useTranslation();

  const roleConfig = getConfigOption(t, WORKSPACE_ROLE_CONFIG, member.role);
  const canEdit = canEditMember(currentUserRole, member.role, isCurrentUser);
  const canRemove = canRemoveMember(currentUserRole, member.role, isCurrentUser);

  return (
    <Panel direction="row" align="center" justify="between" gap="lg">
      <Stack direction="row" align="center" gap="md">
        <Avatar
          firstName={member.user.firstName}
          lastName={member.user.lastName}
          avatarUrl={member.user.avatarUrl}
          size="lg"
          shape="circle"
        />
        <Stack gap="none">
          <Stack direction="row" align="center" gap="sm">
            <Text weight="medium">{`${member.user.firstName} ${member.user.lastName}`}</Text>
            {isCurrentUser && (
              <Text size="xs" color="tertiary">
                ({t('common.you')})
              </Text>
            )}
          </Stack>
          <Text size="sm" color="tertiary">
            {member.user.email}
          </Text>
        </Stack>
      </Stack>

      <Stack direction="row" align="center" gap="md">
        <Badge soft={roleConfig?.color}>{roleConfig?.label}</Badge>
        {canEdit && (
          <Button
            variant="ghost"
            color="gray"
            size="sm"
            iconOnly
            leftIcon="edit"
            onClick={() => onEdit(member)}
          />
        )}
        {canRemove && (
          <Button
            variant="ghost"
            color="danger"
            size="sm"
            iconOnly
            leftIcon="trash"
            onClick={() => onRemove(member)}
          />
        )}
      </Stack>
    </Panel>
  );
};
