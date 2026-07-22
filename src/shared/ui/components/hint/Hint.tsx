import { Icon, Text } from '@shared/ui';

import { root } from './hint.css';
import { HINT_ICON_COLOR_MAP, HINT_ICON_MAP, HINT_TEXT_COLOR_MAP } from './hint.utils';

import type { HintProps } from './hint.types';

export const Hint = ({ message, variant = 'default', fullWidth }: HintProps) => {
  const icon = HINT_ICON_MAP[variant];
  const iconColor = HINT_ICON_COLOR_MAP[variant];
  const textColor = HINT_TEXT_COLOR_MAP[variant];

  return (
    <div
      className={root({ variant })}
      style={fullWidth ? { width: '100%' } : undefined}
      role={variant === 'danger' ? 'alert' : undefined}
    >
      <Icon name={icon} size="sm" color={iconColor} />
      <Text size="md" color={textColor}>
        {message}
      </Text>
    </div>
  );
};
