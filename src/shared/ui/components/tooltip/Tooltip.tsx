import { useEffect, useRef, useState } from 'react';

import { Portal } from '@shared/ui';

import { tooltip } from './tooltip.css';
import { getPosition } from './tooltip.utils';

import type { TooltipProps } from './tooltip.types';

export const Tooltip = ({ label, children, placement = 'top', disabled }: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleShow = (e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setStyle(getPosition(rect, placement));
    setOpen(true);
  };

  const handleHide = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <div
        ref={triggerRef}
        style={{ display: 'inline-block' }}
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onFocus={handleShow}
        onBlur={handleHide}
      >
        {children}
      </div>

      {open && (
        <Portal portalId="tooltip-root">
          <div className={tooltip} style={style} role="tooltip">
            {label}
          </div>
        </Portal>
      )}
    </>
  );
};
