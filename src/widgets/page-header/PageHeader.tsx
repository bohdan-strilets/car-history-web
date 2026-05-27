import { Box, Button, Heading, Stack, Text } from '@shared/ui';

import type { PageHeaderProps } from './page-header.types';

export const PageHeader = ({
  title,
  onCreate,
  buttonLabel,
  buttonIcon,
  description,
}: PageHeaderProps) => {
  return (
    <Box p="lg">
      <Stack gap="md">
        <Stack
          direction={{ mobile: 'column', tablet: 'row' }}
          justify="between"
          align="center"
          gap="md"
        >
          <Heading size={{ mobile: '2xl', tablet: '4xl' }} weight="extraBold">
            {title}
          </Heading>
          <Button leftIcon={buttonIcon} onClick={onCreate} size={{ mobile: 'md', tablet: 'lg' }}>
            {buttonLabel}
          </Button>
        </Stack>

        {description && (
          <Text size="sm" color="tertiary">
            {description}
          </Text>
        )}
      </Stack>
    </Box>
  );
};
