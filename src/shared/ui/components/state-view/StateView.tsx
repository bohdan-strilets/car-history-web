import { Button, Heading, IconBox, Panel, Spacer, Stack, Text } from '@shared/ui';

import { content, iconWrapper, wrapper } from './state-view.css';
import type { StateViewProps } from './state-view.types';

export const StateView = ({
  icon,
  variant = 'default',
  title,
  description,
  actionLabel,
  onAction,
}: StateViewProps) => {
  const isDefault = variant === 'default';

  return (
    <div className={wrapper}>
      <Panel align="center" justify="center" gap="xl" p="5xl" className={content} width="full">
        <Panel soft={isDefault ? 'accent' : 'danger'} p="lg" className={iconWrapper({ variant })}>
          <IconBox name={icon} size="4xl" solid={isDefault ? 'accent' : 'danger'} />
        </Panel>

        <Stack align="center" gap="sm">
          <Heading size="3xl">{title}</Heading>
          {description && (
            <Text color="secondary" align="center">
              {description}
            </Text>
          )}
        </Stack>

        <Spacer />

        {actionLabel && onAction && (
          <Button
            leftIcon={isDefault ? 'plus' : 'refresh'}
            onClick={onAction}
            color={isDefault ? 'accent' : 'danger'}
            size="xl"
            fullWidth
          >
            {actionLabel}
          </Button>
        )}
      </Panel>
    </div>
  );
};
