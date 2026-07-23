import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE_CONFIG, type TimelineEventType } from '@entities/timeline';
import { Icon, Panel, ScrollView, Text } from '@shared/ui';
import { translateConfigOptions } from '@shared/utils';

import type { TimelineFilterProps } from './timeline-filter.types';

export const TimelineFilter = ({ value, onChange }: TimelineFilterProps) => {
  const { t } = useTranslation();

  const options = translateConfigOptions(t, TIMELINE_EVENT_TYPE_CONFIG);

  const toggle = (type: TimelineEventType) => {
    if (value.includes(type)) {
      onChange(value.filter((t) => t !== type));
    } else {
      onChange([...value, type]);
    }
  };

  const clearAll = () => onChange([]);

  return (
    <ScrollView>
      <Panel
        direction="row"
        align="center"
        gap="sm"
        p="md"
        variant="base"
        style={{ width: '100%', minWidth: 'max-content' }}
      >
        {value.length > 0 && (
          <Panel onClick={clearAll} hoverable direction="row" align="center" gap="sm" p="md">
            <Icon name="close" size="sm" />
            <Text size="sm">{t('common.actions.clear')}</Text>
          </Panel>
        )}

        {options.map((option) => {
          const isActive = value.includes(option.value);
          const handleClick = () => toggle(option.value);

          return (
            <Panel
              key={option.id}
              onClick={handleClick}
              hoverable
              direction="row"
              align="center"
              gap="sm"
              p="md"
              solid={isActive ? option.color : undefined}
            >
              <Icon
                name={option.icon ?? 'circleQuestionMark'}
                size="sm"
                color={isActive ? 'onColor' : option.color}
                weight="bold"
              />
              <Text
                size="sm"
                color={isActive ? 'onColor' : option.color}
                style={{ textWrap: 'nowrap' }}
              >
                {option.label}
              </Text>
            </Panel>
          );
        })}
      </Panel>
    </ScrollView>
  );
};
