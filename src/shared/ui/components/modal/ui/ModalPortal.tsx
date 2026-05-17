import { Portal } from '@shared/ui/primitives';

import type { ModalPortalProps } from '../model';

export const MODAL_PORTAL_ID = 'modal-root';

export const ModalPortal = ({ children }: ModalPortalProps) => {
  return <Portal portalId={MODAL_PORTAL_ID}>{children}</Portal>;
};
