import clsx from 'clsx';

import { Icon, Text } from '@shared/ui';

import { fab } from './fab.css';

import type { FabProps } from './fab.types';

export const Fab = ({
  onClick,
  icon,
  label,
  size = 'md',
  visible = true,
  disabled,
  className,
}: FabProps) => {
  const extended = Boolean(label);
  const sizeMap = size === 'lg' ? 'lg' : 'md';

  return (
    <button
      type="button"
      disabled={disabled}
      aria-label={label}
      className={clsx(fab({ size, extended, visible }), className)}
      onClick={onClick}
    >
      <Icon name={icon} size={sizeMap} color="inherit" weight="bold" />
      {label && (
        <Text size={sizeMap} weight="semibold" lineHeight="tight" color="inherit">
          {label}
        </Text>
      )}
    </button>
  );
};
