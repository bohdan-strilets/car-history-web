import clsx from 'clsx';

import { Box, Button, Icon, Stack } from '@shared/ui';

import { item } from './dropdown.css';

import type { DropdownItemProps } from './dropdown.types';

export const DropdownItem = ({
  leftIcon,
  rightIcon,
  label,
  onClick,
  danger,
  disabled,
  selected,
  className,
}: DropdownItemProps) => {
  return (
    <Button
      variant="ghost"
      className={clsx(item({ selected }), className)}
      color={danger ? 'danger' : 'gray'}
      disabled={disabled}
      onClick={onClick}
      fullWidth
    >
      <Box width="full">
        <Stack direction="row" align="center" justify="between">
          <Stack direction="row" align="center" gap="md">
            {leftIcon && <Icon name={leftIcon} size="sm" color="inherit" />}
            {label}
          </Stack>
          <Stack direction="row" align="center" gap="sm">
            {rightIcon && <Icon name={rightIcon} size="sm" color="inherit" />}
            {selected && <Icon name="check" size="sm" color="inherit" />}
          </Stack>
        </Stack>
      </Box>
    </Button>
  );
};
