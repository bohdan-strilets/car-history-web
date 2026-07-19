import { useMediaQuery } from '@shared/hooks';
import { Box, Button, Heading, Stack, Text, Tooltip } from '@shared/ui';

import type { PageHeaderProps } from './page-header.types';

export const PageHeader = ({
  title,
  onCreate,
  buttonLabel,
  buttonIcon,
  description,
  disabled,
  disabledReason,
}: PageHeaderProps) => {
  const isTablet = useMediaQuery('tablet', 'up');

  const tooltipLabel = disabled && disabledReason ? disabledReason : (buttonLabel ?? '');
  const isTooltipDisabled = !disabled && isTablet;

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
          {onCreate && isTablet ? (
            <Tooltip label={tooltipLabel} placement="left" disabled={isTooltipDisabled}>
              <Button
                leftIcon={buttonIcon}
                onClick={onCreate}
                size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
                disabled={disabled}
              >
                {buttonLabel}
              </Button>
            </Tooltip>
          ) : onCreate ? (
            <Tooltip label={tooltipLabel} placement="left">
              <Button
                leftIcon={buttonIcon}
                onClick={onCreate}
                size={{ mobile: 'sm', tablet: 'md', desktop: 'lg' }}
                iconOnly
                disabled={disabled}
              />
            </Tooltip>
          ) : null}
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
