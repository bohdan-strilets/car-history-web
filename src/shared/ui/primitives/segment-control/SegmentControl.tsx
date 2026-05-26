import { Tooltip } from '@shared/ui/components';
import { clsx } from 'clsx';

import { Icon } from '../icon';

import { option, root } from './segment-control.css';
import type { SegmentControlProps } from './segment-control.types';

export const SegmentControl = <T extends string>({
  value,
  onChange,
  options,
  size = 'md',
  className,
  withTooltip,
}: SegmentControlProps<T>) => {
  return (
    <div className={clsx(root, className)} role="group">
      {options.map((opt) => {
        const button = (
          <button
            key={opt.value}
            type="button"
            className={option({ size, active: value === opt.value })}
            onClick={() => onChange(opt.value)}
            aria-label={opt.label ?? opt.value}
            aria-pressed={value === opt.value}
          >
            {opt.icon ? (
              <Icon name={opt.icon} size="sm" color="inherit" />
            ) : (
              <span>{opt.displayLabel ?? opt.value}</span>
            )}
          </button>
        );

        if (withTooltip && opt.label) {
          return (
            <Tooltip key={opt.value} label={opt.label} placement="top">
              {button}
            </Tooltip>
          );
        }

        return button;
      })}
    </div>
  );
};
