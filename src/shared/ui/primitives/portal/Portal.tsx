import { useState } from 'react';
import { createPortal } from 'react-dom';

import type { PortalProps } from './portal.types';
import { getPortalRoot } from './portal.utils';

export const Portal = ({ children, portalId }: PortalProps) => {
  const [el] = useState<HTMLElement>(() => getPortalRoot(portalId));

  return createPortal(children, el);
};
