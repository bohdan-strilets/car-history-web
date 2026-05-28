import { Panel, Tooltip } from '@shared/ui/components';

import { Icon } from '../icon';
import { Stack } from '../stack';
import { Text } from '../text';

import type { SegmentControlProps } from './segment-control.types';

export const SegmentControl = <T extends string>({
  value,
  onChange,
  options,
  size = 'md',
  withTooltip,
  withLabel,
  className,
}: SegmentControlProps<T>) => {
  return (
    <Panel direction="row" variant="neuInsetSm" p={size} radius="md" className={className}>
      {options.map((opt) => {
        const displayLabel = opt.displayLabel ?? opt.value;
        const ariaLabel = withLabel ? undefined : (opt.label ?? opt.value);
        const isActive = value === opt.value;
        const tooltipLabel = withLabel && opt.label ? opt.label : undefined;

        const control = (
          <Panel
            key={opt.value}
            variant={isActive ? 'neuRaised' : 'base'}
            p={'sm'}
            radius="sm"
            hoverable
            onClick={() => onChange(opt.value)}
            aria-label={ariaLabel}
            aria-pressed={isActive}
          >
            {opt.icon ? (
              <Stack direction="row" gap="md" align="center">
                <Icon name={opt.icon} size="sm" color="inherit" />
                {withLabel && opt.label && (
                  <Text transform="uppercase" letterSpacing="wider" size="xs">
                    {opt.label}
                  </Text>
                )}
              </Stack>
            ) : (
              <Text>{displayLabel}</Text>
            )}
          </Panel>
        );

        if (withTooltip && tooltipLabel) {
          return (
            <Tooltip key={opt.value} label={tooltipLabel} placement="top">
              {control}
            </Tooltip>
          );
        }

        return control;
      })}
    </Panel>
  );
};
