import { Box, Button, Icon, Stack } from '@shared/ui/primitives';

import { item } from './dropdown.css';
import type { DropdownItemProps } from './dropdown.types';

export const DropdownItem = ({ icon, label, onClick, danger, disabled }: DropdownItemProps) => {
  return (
    <Button
      variant="ghost"
      className={item}
      color={danger ? 'danger' : 'gray'}
      disabled={disabled}
      onClick={onClick}
      fullWidth
    >
      <Box width="full">
        <Stack direction="row" align="center" gap="md">
          {icon && <Icon name={icon} size="sm" color="inherit" />}
          {label}
        </Stack>
      </Box>
    </Button>
  );
};
