import { Divider, Icon, IconBox, Stack, Text } from '@shared/ui';

import { Panel } from '../panel';

import type { InfoRowProps } from './info-row.types';

export const InfoRow = ({
  label,
  description,
  value,
  icon,
  iconColor,
  onClick,
  upperDivider,
  bottomDivider,
}: InfoRowProps) => {
  const isClickable = !!onClick;
  const hasIcon = !!icon && !!iconColor;
  const hasDescription = !!description;

  return (
    <>
      {upperDivider && <Divider color="subtle" />}
      <Panel
        variant="base"
        direction="row"
        align="center"
        justify="between"
        gap="md"
        onClick={onClick}
        hoverable={isClickable}
        p={{ mobile: 'md', tablet: 'xl' }}
      >
        <Stack direction="row" align="center" gap="md">
          {hasIcon && (
            <IconBox
              name={icon ?? 'circleQuestionMark'}
              gradient={iconColor ?? 'gray'}
              size="md"
              radius="sm"
            />
          )}
          <Stack direction="column" align="start" gap="none">
            <Text color="secondary" weight="semibold" size={{ mobile: 'sm', tablet: 'md' }}>
              {label}
            </Text>
            {hasDescription && (
              <Text color="tertiary" size="sm">
                {description}
              </Text>
            )}
          </Stack>
        </Stack>

        <Stack direction="row" align="center" gap="xs" style={{ maxWidth: '40%' }}>
          <Text size={{ mobile: 'sm', tablet: 'md' }} truncate>
            {value ?? '—'}
          </Text>
          {isClickable && <Icon name="chevronRight" weight="bold" />}
        </Stack>
      </Panel>
      {bottomDivider && <Divider color="subtle" />}
    </>
  );
};
