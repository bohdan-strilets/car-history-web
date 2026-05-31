import { Grid } from '@shared/ui';

import { VehicleCard } from '../vehicle-card';

import type { VehiclesListProps } from './vehicles-list.types';

export const VehiclesList = ({ vehicles, onSelect }: VehiclesListProps) => {
  return (
    <Grid columns={{ mobile: '1', tablet: '2', desktop: '3' }} gap="2xl">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onClick={onSelect ? () => onSelect(vehicle) : undefined}
        />
      ))}
    </Grid>
  );
};
