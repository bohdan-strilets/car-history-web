import { Box, Button, Icon, Stack } from '@shared/ui/primitives';
import clsx from 'clsx';

import { item } from './dropdown.css';
import type { DropdownItemProps } from './dropdown.types';

export const DropdownItem = ({
  leftIcon,
  rightIcon,
  label,
  onClick,
  danger,
  disabled,
  className,
}: DropdownItemProps) => {
  return (
    <Button
      variant="ghost"
      className={clsx(item, className)}
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
          {rightIcon && <Icon name={rightIcon} size="sm" color="inherit" />}
        </Stack>
      </Box>
    </Button>
  );
};
