// use-dropdown.ts

import { useCallback, useEffect, useRef, useState } from 'react';

import { vars } from '@shared/styles';

import type { Coords, DropdownParams } from './dropdown.types';

const GAP = 8;

export const useDropdown = ({ open, align, direction, fullWidth, menuRef }: DropdownParams) => {
  const defaultCoords: Coords = { top: 0, bottom: 0, left: 0, right: 0, width: 0 };

  const rootRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<Coords>(defaultCoords);

  const updateCoords = useCallback(() => {
    if (!rootRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    setCoords({
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: window.innerWidth - rect.right,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    if (!open) return;

    updateCoords();

    window.addEventListener('scroll', updateCoords, true);
    window.addEventListener('resize', updateCoords);

    return () => {
      window.removeEventListener('scroll', updateCoords, true);
      window.removeEventListener('resize', updateCoords);
    };
  }, [open, updateCoords]);

  const getPortalStyle = (): React.CSSProperties => {
    const menuHeight = menuRef.current?.offsetHeight ?? 0;

    const base: React.CSSProperties = {
      position: 'fixed',
      zIndex: vars.zIndex.dropdown,
      width: fullWidth ? coords.width : undefined,
    };

    if (direction === 'top') {
      return {
        ...base,
        bottom: window.innerHeight - coords.top + GAP,
        left: align === 'end' ? 'auto' : coords.left,
        right: align === 'end' ? coords.right : 'auto',
      };
    }

    if (direction === 'right') {
      const spaceBelow = window.innerHeight - coords.top;
      const flipped = menuHeight > 0 && spaceBelow < menuHeight;

      return {
        ...base,
        top: flipped ? coords.bottom - menuHeight : coords.top,
        left: coords.left + coords.width + GAP,
      };
    }

    const spaceBelow = window.innerHeight - coords.bottom - GAP;
    const flipped = menuHeight > 0 && spaceBelow < menuHeight;

    return {
      ...base,
      top: flipped ? 'auto' : coords.bottom + GAP,
      bottom: flipped ? window.innerHeight - coords.top + GAP : 'auto',
      left: align === 'end' ? 'auto' : coords.left,
      right: align === 'end' ? coords.right : 'auto',
    };
  };

  return { rootRef, getPortalStyle };
};
