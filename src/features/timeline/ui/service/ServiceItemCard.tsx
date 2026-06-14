import { Box, Button, Panel, Stack, Text } from '@shared/ui';

import type { ServiceItemCardProps } from './service.types';

export const ServiceItemCard = ({
  name,
  price,
  description,
  quantity,
  unit,
  onRemove,
}: ServiceItemCardProps) => {
  const isQuantity = quantity != null && quantity > 1;

  return (
    <Panel variant="sunken" p="md" gap="sm" direction="row" align="center" justify="between">
      <Box width="full">
        <Stack gap="xs" direction="row" align="center" justify="between">
          <Stack gap="none">
            <Text size="sm">
              {name}
              {isQuantity ? ` ×${quantity}` : ''}
            </Text>
            {description && (
              <Text size="xs" color="tertiary">
                {description}
              </Text>
            )}
          </Stack>
          <Text size="sm" weight="semibold">
            {price} {unit}
          </Text>
        </Stack>
      </Box>

      <Button
        type="button"
        iconOnly
        leftIcon="trash"
        size="sm"
        variant="ghost"
        color="danger"
        onClick={onRemove}
      />
    </Panel>
  );
};
