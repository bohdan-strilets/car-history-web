import { Box, Icon, Stack, Text, useInputClasses } from '@shared/ui/primitives';
import clsx from 'clsx';

import { chevron } from './select.css';
import type { SelectTriggerProps } from './select.types';

export const SelectTrigger = ({
  leftIcon,
  selected,
  placeholder,
  open,
  size,
  disabled,
  state,
}: SelectTriggerProps) => {
  const { rootClass, responsiveClasses } = useInputClasses({ size, state, disabled });

  return (
    <div className={clsx(rootClass, ...responsiveClasses)}>
      <Box width="full">
        <Stack direction="row" align="center" justify="between" gap="sm">
          {leftIcon && <Icon name={leftIcon} />}

          <Text as="span" color={selected ? 'primary' : 'tertiary'}>
            {selected ? selected.label : placeholder}
          </Text>

          <Icon name="chevronDown" className={chevron({ open })} />
        </Stack>
      </Box>
    </div>
  );
};
