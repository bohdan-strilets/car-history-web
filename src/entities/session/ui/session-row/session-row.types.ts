import type { Session } from '../../model';

export interface SessionRowProps {
  session: Session;
  onRevoke: (session: Session) => void;
}
