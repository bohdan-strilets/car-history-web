import { useTranslation } from 'react-i18next';

import { Grid, Text } from '@shared/ui';

import { getWeekdayNames } from '../model';

export const Weekdays = () => {
  const { t } = useTranslation();
  const weekdayNames = getWeekdayNames(t);

  return (
    <Grid columns="7" gap="sm">
      {weekdayNames.map((day) => (
        <Text
          key={day}
          align="center"
          size="xs"
          weight="semibold"
          color="tertiary"
          letterSpacing="wide"
        >
          {day}
        </Text>
      ))}
    </Grid>
  );
};
