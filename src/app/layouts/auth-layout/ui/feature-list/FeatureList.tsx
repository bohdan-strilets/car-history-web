import { Icon, Stack, Text } from '@shared/ui';

import type { FeatureListProps } from './feature-list.types';

export const FeatureList = ({ features }: FeatureListProps) => {
  return (
    <Stack as="ul" gap="md">
      {features.map((feature) => {
        return (
          <Stack as="li" key={feature.icon} direction="row" align="center" gap="sm">
            <Icon name={feature.icon} color="accent" weight="bold" />
            <Text size="sm" weight="medium" color="secondary">
              {feature.text}
            </Text>
          </Stack>
        );
      })}
    </Stack>
  );
};
