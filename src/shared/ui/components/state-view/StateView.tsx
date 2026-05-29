import { Button, Heading, IconBox, Panel, Spacer, Stack, Text } from '@shared/ui';

import { content, iconWrapper, wrapper } from './state-view.css';
import type { StateViewProps } from './state-view.types';
import { resolvedIcon, resolvedVariant } from './state-view.utils';

export const StateView = ({
  icon,
  variant = 'default',
  title,
  description,
  actionLabel,
  onAction,
}: StateViewProps) => {
  return (
    <div className={wrapper}>
      <Panel align="center" justify="center" gap="xl" p="5xl" className={content} width="full">
        <Panel soft={resolvedVariant(variant)} p="lg" className={iconWrapper({ variant })}>
          <IconBox name={icon} size="4xl" solid={resolvedVariant(variant)} />
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
            leftIcon={resolvedIcon(variant)}
            onClick={onAction}
            color={resolvedVariant(variant)}
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
