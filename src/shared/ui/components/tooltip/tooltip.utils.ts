import type { TooltipPlacement } from './tooltip.types';

export const getPosition = (rect: DOMRect, placement: TooltipPlacement): React.CSSProperties => {
  switch (placement) {
    case 'top':
      return {
        top: rect.top - 8,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, -100%)',
      };
    case 'bottom':
      return {
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
        transform: 'translate(-50%, 0)',
      };
    case 'left':
      return {
        top: rect.top + rect.height / 2,
        left: rect.left - 8,
        transform: 'translate(-100%, -50%)',
      };
    case 'right':
      return {
        top: rect.top + rect.height / 2,
        left: rect.right + 8,
        transform: 'translate(0, -50%)',
      };
  }
};
