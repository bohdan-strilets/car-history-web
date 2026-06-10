import { Button, Icon, Stack } from '@shared/ui';

import type { CalendarHeaderProps } from '../model';

export const CalendarHeader = ({
  children,
  onPrev,
  onNext,
  nextAriaLabel,
  prevAriaLabel,
}: CalendarHeaderProps) => {
  return (
    <Stack direction="row" align="center" justify="between" gap="xs">
      <Button type="button" onClick={onPrev} aria-label={prevAriaLabel} variant="soft" color="gray">
        <Icon name="chevronLeft" size="sm" />
      </Button>

      <Stack direction="row" align="center" justify="center" gap="xs">
        {children}
      </Stack>

      <Button type="button" onClick={onNext} aria-label={nextAriaLabel} variant="soft" color="gray">
        <Icon name="chevronRight" size="sm" />
      </Button>
    </Stack>
  );
};
