import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@shared/config';

import { ServiceStationCard } from '../service-station-card';

import * as styles from './service-stations-list.css';

import type { ServiceStationsListProps } from './service-stations-list.types';

export const ServiceStationsList = ({
  stations,
  onStationClick,
  onToggleFavorite,
}: ServiceStationsListProps) => {
  const navigate = useNavigate();

  const handleClick = (station: (typeof stations)[number]) => {
    if (onStationClick) return onStationClick(station);
    navigate(ROUTES.SERVICE_STATIONS.DETAIL(station.id));
  };

  return (
    <div className={styles.grid}>
      {stations.map((station) => (
        <ServiceStationCard
          key={station.id}
          station={station}
          onClick={() => handleClick(station)}
          onToggleFavorite={onToggleFavorite ? () => onToggleFavorite(station) : undefined}
        />
      ))}
    </div>
  );
};
