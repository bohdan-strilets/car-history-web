import { Panel, Text } from '@shared/ui';

import type { SpecChipProps } from './vehicle-overview.types';

export const SpecChip = ({ label, value, color }: SpecChipProps) => {
  return (
    <Panel
      width="full"
      direction="column"
      align="start"
      justify="center"
      gap="xs"
      soft={color}
      p="lg"
    >
      <Text size="xs" color="secondary" transform="uppercase">
        {label}
      </Text>
      <Text weight="extraBold" size="lg">
        {value}
      </Text>
    </Panel>
  );
};
