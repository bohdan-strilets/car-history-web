import { useTranslation } from 'react-i18next';

import { useFormatDate } from '@shared/hooks';
import { Badge, Button, Icon, Panel, Stack, Text } from '@shared/ui';

import { getDeviceIcon } from './session-row.utils';

import type { SessionRowProps } from './session-row.types';

export const SessionRow = ({ session, onRevoke }: SessionRowProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();

  const deviceIcon = getDeviceIcon(session.userAgent);

  return (
    <Panel
      direction="row"
      align="center"
      justify="between"
      gap="lg"
      p={{ mobile: 'sm', tablet: 'md' }}
    >
      <Stack direction="row" align="center" gap="md">
        <Icon name={deviceIcon} size="lg" />
        <Stack gap="none">
          <Stack direction="row" align="center" gap="sm">
            <Text weight="medium">{session.deviceName ?? t('user.sessions.unknownDevice')}</Text>
            {session.isCurrent && <Badge soft="green">{t('user.sessions.current')}</Badge>}
          </Stack>
          <Text size={{ mobile: 'xs', tablet: 'sm' }} color="tertiary">
            {session.ipAddress ?? t('user.sessions.unknownIp')}
            {session.lastActivityAt && ` · ${formatDate(session.lastActivityAt)}`}
          </Text>
        </Stack>
      </Stack>

      {!session.isCurrent && (
        <Button
          variant="ghost"
          color="danger"
          size="sm"
          iconOnly
          leftIcon="trash"
          onClick={() => onRevoke(session)}
        />
      )}
    </Panel>
  );
};
