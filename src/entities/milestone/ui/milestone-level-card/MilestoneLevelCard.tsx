import { useTranslation } from 'react-i18next';

import { MILESTONE_LEVEL_GROUP_CONFIG } from '@entities/milestone';
import { IconBox, Panel, ProgressBar, Stack, Text } from '@shared/ui';

import { getTierGradient } from './milestone-level-card.utils';

import type { MilestoneLevelCardProps } from './milestone-level-card.types';
import type { ParseKeys } from 'i18next';

export const MilestoneLevelCard = ({ level }: MilestoneLevelCardProps) => {
  const { t } = useTranslation();
  const config = MILESTONE_LEVEL_GROUP_CONFIG[level.group];
  const isMaxed = level.levelIndex >= level.totalLevels && level.totalLevels > 0;
  const tierGradient = getTierGradient(level.levelIndex, level.totalLevels);

  return (
    <Panel gap="md" p="lg">
      <Stack direction="row" align="center" gap="md">
        <IconBox name={config.icon} gradient={tierGradient} size="lg" radius="md" />
        <Stack gap="none">
          <Text weight="bold" size="md">
            {t(config.titleKey as ParseKeys)}
          </Text>
          <Text color="tertiary" size="sm">
            {level.currentLevel
              ? t(`milestone.definitions.${level.currentLevel.code}.title` as ParseKeys)
              : t('milestone.levels.notStarted' as ParseKeys)}
          </Text>
        </Stack>
      </Stack>

      <Stack direction="row" align="center" justify="between">
        <Text size="xs" color="secondary">
          {t('milestone.levels.levelOf' as ParseKeys, {
            current: level.levelIndex,
            total: level.totalLevels,
          })}
        </Text>
        <Text size="xs" color="secondary">
          {isMaxed
            ? t('milestone.levels.maxed' as ParseKeys)
            : config.formatValue(level.currentValue, t)}
        </Text>
      </Stack>

      {!isMaxed && (
        <>
          <ProgressBar value={level.progressPercent} color={tierGradient} />
          {level.nextLevel && (
            <Text size="xs" color="tertiary">
              {t('milestone.levels.toNext' as ParseKeys, {
                title: t(`milestone.definitions.${level.nextLevel.code}.title` as ParseKeys),
                value: config.formatValue(level.nextLevel.value, t),
              })}
            </Text>
          )}
        </>
      )}
    </Panel>
  );
};
