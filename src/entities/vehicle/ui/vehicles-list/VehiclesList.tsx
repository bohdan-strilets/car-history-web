import { Grid } from '@shared/ui';

import { VehicleCard } from '../vehicle-card';

import type { VehiclesListProps } from './vehicles-list.types';

export const VehiclesList = ({ vehicles, onSelect }: VehiclesListProps) => {
  return (
    <Grid columns={{ mobile: '1', laptop: '2' }} gap="2xl">
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
