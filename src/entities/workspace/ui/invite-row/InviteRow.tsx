import { Avatar, Badge, Button, Panel, Stack, Text } from '@shared/ui';
import { useTranslation } from 'react-i18next';

import type { InviteRowProps } from './invite-row.types';

export const InviteRow = ({ invite, onCancel }: InviteRowProps) => {
  const { t } = useTranslation();

  return (
    <Panel direction="row" align="center" justify="between" gap="lg">
      <Stack direction="row" align="center" gap="md">
        <Avatar
          firstName={invite.email}
          lastName=""
          avatarUrl={null}
          size="lg"
          shape="circle"
          variant="default"
        />
        <Stack gap="none">
          <Text weight="medium">{invite.email}</Text>
        </Stack>
      </Stack>

      <Stack direction="row" align="center" gap="md">
        <Badge soft="gray">{t('common.state.pending')}</Badge>
        <Button
          variant="ghost"
          color="danger"
          size="sm"
          iconOnly
          leftIcon="trash"
          onClick={() => onCancel(invite)}
        />
      </Stack>
    </Panel>
  );
};
