import type { PlaceDetails } from '@entities/service-station';

export interface PlacesAutocompleteProps {
  onSelect: (place: PlaceDetails) => void;
  placeholder?: string;
}
