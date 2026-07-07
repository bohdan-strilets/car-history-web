import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';

import { env } from '@config/env';
import { Button, Heading, Text } from '@shared/ui';

import { getServiceStationPinColor, type ServiceStation } from '../../model';

import * as styles from './service-stations-map.css';

import type { ServiceStationsMapProps } from './service-stations-map.types';

const DEFAULT_CENTER = { lat: 52.2297, lng: 21.0122 }; // Warsaw

export const ServiceStationsMap = ({ stations, onStationClick }: ServiceStationsMapProps) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<ServiceStation | null>(null);

  const stationsWithCoords = stations.filter((s) => s.latitude != null && s.longitude != null);

  const center =
    stationsWithCoords.length > 0
      ? { lat: stationsWithCoords[0].latitude!, lng: stationsWithCoords[0].longitude! }
      : DEFAULT_CENTER;

  return (
    <APIProvider apiKey={env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className={styles.mapContainer}>
        <Map
          mapId={env.VITE_GOOGLE_MAPS_MAP_ID}
          defaultCenter={center}
          defaultZoom={stationsWithCoords.length > 0 ? 12 : 6}
          gestureHandling="greedy"
          disableDefaultUI={false}
        >
          {stationsWithCoords.map((station) => (
            <AdvancedMarker
              key={station.id}
              position={{ lat: station.latitude!, lng: station.longitude! }}
              onClick={() => setSelected(station)}
            >
              <Pin
                background={getServiceStationPinColor(station.type)}
                borderColor="#ffffff"
                glyphColor="#ffffff"
              />
            </AdvancedMarker>
          ))}

          {selected && selected.latitude != null && selected.longitude != null && (
            <InfoWindow
              position={{ lat: selected.latitude, lng: selected.longitude }}
              onCloseClick={() => setSelected(null)}
            >
              <div className={styles.infoWindowContent}>
                <Heading size="sm">{selected.name}</Heading>
                <Text size="xs" color="tertiary">
                  {selected.address.street} {selected.address.number}, {selected.address.city}
                </Text>
                <Button
                  size="sm"
                  variant="soft"
                  color="accent"
                  onClick={() => onStationClick?.(selected)}
                >
                  {t('serviceStation.map.viewDetails')}
                </Button>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};
