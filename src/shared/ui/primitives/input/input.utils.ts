import { resolveResponsive } from '@shared/lib/primitives';

import { iconSlot, responsiveStyles, root } from './input.css';
import type { InputClassesParams } from './input.types';

export const useInputClasses = ({
  size,
  state,
  disabled,
  hasLeftIcon,
  hasRightIcon,
}: InputClassesParams) => {
  const resolvedState = disabled ? 'disabled' : (state ?? 'default');

  const rootClass = root({
    size: typeof size === 'string' ? size : size?.mobile,
    state: resolvedState,
    hasLeftIcon,
    hasRightIcon,
  });

  const iconClass = iconSlot({
    size: typeof size === 'string' ? size : size?.mobile,
  });

  const responsiveClasses = [
    ...resolveResponsive(responsiveStyles.sizeHeight, size),
    ...resolveResponsive(responsiveStyles.sizeFontSize, size),
  ];

  return { rootClass, iconClass, responsiveClasses };
};
