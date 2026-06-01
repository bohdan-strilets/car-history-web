import { useMediaQuery } from '@shared/hooks';
import { Box, Button, Heading, Stack, Text, Tooltip } from '@shared/ui';

import type { PageHeaderProps } from './page-header.types';

export const PageHeader = ({
  title,
  onCreate,
  buttonLabel,
  buttonIcon,
  description,
}: PageHeaderProps) => {
  const isTablet = useMediaQuery('tablet', 'up');

  return (
    <Box p={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}>
      <Stack gap="md">
        <Stack
          direction={{ mobile: 'row', tablet: 'row' }}
          justify="between"
          align="center"
          gap="md"
        >
          <Heading size={{ mobile: 'xl', tablet: '2xl', desktop: '4xl' }} weight="bold">
            {title}
          </Heading>

          {isTablet ? (
            <Button
              leftIcon={buttonIcon}
              onClick={onCreate}
              size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
            >
              {buttonLabel}
            </Button>
          ) : (
            <Tooltip label={buttonLabel} placement="left">
              <Button
                leftIcon={buttonIcon}
                onClick={onCreate}
                size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
                iconOnly
              />
            </Tooltip>
          )}
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
