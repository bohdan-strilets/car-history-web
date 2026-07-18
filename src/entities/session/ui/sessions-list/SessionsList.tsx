import { Stack } from '@shared/ui';

import { SessionRow } from '../session-row';

import type { SessionsListProps } from './sessions-list.types';

export const SessionsList = ({ sessions, onRevoke }: SessionsListProps) => {
  return (
    <Stack gap="xl">
      {sessions.map((session) => (
        <SessionRow key={session.id} session={session} onRevoke={onRevoke} />
      ))}
    </Stack>
  );
};
