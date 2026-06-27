import { useEffect, useRef, useState } from 'react';

import { vars } from '@shared/styles';

import type { Coords, DropdownParams } from './dropdown.types';

const DROPDOWN_ITEM_HEIGHT = 40;
const DROPDOWN_PADDING = 8;

export const useDropdown = ({ open, align, direction, fullWidth }: DropdownParams) => {
  const defaultCoords: Coords = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
  };

  const rootRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<Coords>(defaultCoords);

  useEffect(() => {
    if (open && rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: window.innerWidth - rect.right,
        width: rect.width,
      });
    }
  }, [open]);

  const getPortalStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'fixed',
      zIndex: vars.zIndex.dropdown,
      width: fullWidth ? coords.width : undefined,
    };

    if (direction === 'top') {
      return {
        ...base,
        bottom: window.innerHeight - coords.top + 8,
        left: align === 'end' ? 'auto' : coords.left,
        right: align === 'end' ? coords.right : 'auto',
      };
    }

    if (direction === 'right') {
      const estimatedHeight = DROPDOWN_ITEM_HEIGHT * 2 + DROPDOWN_PADDING * 2;
      const spaceBelow = window.innerHeight - coords.top;
      const topPos = spaceBelow < estimatedHeight ? coords.bottom - estimatedHeight : coords.top;

      return {
        position: 'fixed',
        top: topPos,
        left: coords.left + coords.width + 8,
        zIndex: vars.zIndex.dropdown,
      };
    }

    return {
      ...base,
      top: coords.bottom + 8,
      left: align === 'end' ? 'auto' : coords.left,
      right: align === 'end' ? coords.right : 'auto',
    };
  };

  return { rootRef, getPortalStyle };
};
