import { useState } from 'react';

import { createPortal } from 'react-dom';

import { getPortalRoot } from './portal.utils';

import type { PortalProps } from './portal.types';

export const Portal = ({ children, portalId }: PortalProps) => {
  const [el] = useState<HTMLElement>(() => getPortalRoot(portalId));
  return createPortal(children, el);
};
