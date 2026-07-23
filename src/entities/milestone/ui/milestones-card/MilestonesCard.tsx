import { useTranslation } from 'react-i18next';

import { MILESTONE_CATEGORY_CONFIG } from '@entities/milestone';
import { useFormatDate } from '@entities/workspace';
import { useMediaQuery } from '@shared/hooks';
import { Icon, IconBox, Panel, Stack, Text } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import { formatMilestoneValue } from './milestone-card.utils';

import type { MilestonesCardProps } from './milestones-card.types';

export const MilestonesCard = ({ milestone }: MilestonesCardProps) => {
  const { t } = useTranslation();
  const formatDate = useFormatDate();
  const isTabletUp = useMediaQuery('tablet', 'up');

  const { milestoneDefinition: def, value, achievedAt } = milestone;

  const config = getConfigOption(t, MILESTONE_CATEGORY_CONFIG, def.category);
  const formattedValue = formatMilestoneValue(value, def.category, t);

  return (
    <Panel
      direction="row"
      align="center"
      justify="between"
      p="2xl"
      soft={config?.color}
      shadow={config?.color}
    >
      <Stack direction="row" align="start" gap="xl">
        <IconBox
          name={config?.icon ?? 'circleQuestionMark'}
          weight="bold"
          gradient={config?.color}
          size={isTabletUp ? '3xl' : '2xl'}
          shadow={config?.color}
        />
        <Stack gap="sm">
          <Stack direction="row" align="center" gap="sm">
            <Icon name="star" weight="bold" color={config?.color} />
            <Text
              weight="bold"
              transform="uppercase"
              color={config?.color}
              size={isTabletUp ? 'md' : 'sm'}
            >
              {t('milestone.label')}
            </Text>
          </Stack>

          <Text weight="bold" size={isTabletUp ? 'xl' : 'md'}>
            {t(`milestone.definitions.${def.code}.title`)}
          </Text>

          <Text
            weight="bold"
            size={isTabletUp ? '2xl' : 'xl'}
            color={config?.color}
            family="heading"
          >
            {formattedValue}
          </Text>

          <Text color="tertiary" size="sm">
            {t(`milestone.definitions.${def.code}.description`)}
          </Text>

          <Stack direction="row" align="center" gap="xl">
            <Stack direction="row" align="center" gap="sm">
              <Icon name="calendar" size="sm" weight="bold" />
              <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                {formatDate(achievedAt)}
              </Text>
            </Stack>
            <Stack direction="row" align="center" gap="sm">
              <Icon name="road" size="sm" weight="bold" />
              <Text weight="bold" size={isTabletUp ? 'md' : 'sm'}>
                {milestone.mileage.toLocaleString()} {t('units.km')}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Panel>
  );
};
