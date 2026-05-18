import { Portal } from '@shared/ui/primitives';
import { useState } from 'react';

import { tooltip } from './tooltip.css';
import type { TooltipProps } from './tooltip.types';
import { getPosition } from './tooltip.utils';

export const Tooltip = ({ label, children, placement = 'top', disabled }: TooltipProps) => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleShow = (e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setStyle(getPosition(rect, placement));
    setOpen(true);
  };

  const handleHide = () => setOpen(false);

  return (
    <>
      <div
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
