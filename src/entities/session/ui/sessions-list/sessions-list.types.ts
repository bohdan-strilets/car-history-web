import type { Session } from '../../model';

export interface SessionsListProps {
  sessions: Session[];
  onRevoke: (session: Session) => void;
}
