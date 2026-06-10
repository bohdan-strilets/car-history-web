import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE_CONFIG } from '@entities/timeline';
import { Grid, Icon, Panel, Stack, Text } from '@shared/ui';
import { translateConfigOptions } from '@shared/utils';

import type { EventTypeGridProps } from './event-type-grid.types';

export const EventTypeGrid = ({ onSelect }: EventTypeGridProps) => {
  const { t } = useTranslation();
  const config = translateConfigOptions(t, TIMELINE_EVENT_TYPE_CONFIG);

  return (
    <Grid columns={{ mobile: '2', tablet: '3' }} gap="md">
      {config.map(({ value, icon, color, label }) => (
        <Panel
          key={value}
          variant="neuRaised"
          radius="md"
          p="md"
          onClick={() => onSelect(value)}
          hoverable
        >
          <Stack align="center" gap="sm">
            <Icon name={icon ?? 'circleQuestionMark'} size="xl" color={color} />
            <Text size="sm" weight="medium" color="secondary" align="center">
              {label}
            </Text>
          </Stack>
        </Panel>
      ))}
    </Grid>
  );
};
