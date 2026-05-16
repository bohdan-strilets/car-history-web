import { Heading, Stack, Text } from '@shared/ui';

import type { AuthHeaderProps } from './auth-header.types';

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <Stack gap="xs">
      <Heading as="h1" size="3xl" weight="extraBold">
        {title}
      </Heading>
      <Text color="tertiary">{subtitle}</Text>
    </Stack>
  );
};
