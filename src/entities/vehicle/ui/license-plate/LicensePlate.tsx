import { Text } from '@shared/ui';

import { EuStrip } from './EuStrip';
import { countryArea, numberArea, root } from './license-plate.css';
import { parsePlate } from './license-plate.utils';

import type { LicensePlateProps } from './license-plate.types';

export const LicensePlate = ({ plateNumber }: LicensePlateProps) => {
  const [prefix, suffix] = parsePlate(plateNumber);

  return (
    <div className={root}>
      <div className={countryArea}>
        <EuStrip />
      </div>
      <div className={numberArea}>
        <Text size="3xl" weight="bold" family="heading" color="inherit">
          {prefix}
        </Text>
        <Text size="3xl" weight="bold" family="heading" color="inherit">
          ·
        </Text>
        <Text size="3xl" weight="bold" family="heading" color="inherit">
          {suffix}
        </Text>
      </div>
    </div>
  );
};
