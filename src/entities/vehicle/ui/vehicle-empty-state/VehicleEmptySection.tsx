import { Button, Heading, IconBox, Panel, Stack, Text } from '@shared/ui';

import type { VehicleEmptySectionProps } from './vehicle-empty-state.types';

export const VehicleEmptySection = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: VehicleEmptySectionProps) => {
  return (
    <Panel variant="base" p="xl" align="center" justify="center">
      <Stack gap="md" align="center">
        <IconBox name={icon} gradient="accentSolid" size="2xl" />
        <Stack gap="xs" align="center">
          <Heading size="md" align="center">
            {title}
          </Heading>
          <Text color="secondary" align="center" size="sm">
            {description}
          </Text>
        </Stack>
        <Button size="md" onClick={onAction}>
          {actionLabel}
        </Button>
      </Stack>
    </Panel>
  );
};
