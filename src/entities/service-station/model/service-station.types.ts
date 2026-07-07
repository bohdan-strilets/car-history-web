import type { ServiceStationType } from './service-station.constants';

export type ServiceStationId = string;

export interface ServiceStationAddress {
  country: string;
  city: string;
  street: string;
  number: string;
  postCode?: string;
}

export interface ServiceStation {
  id: ServiceStationId;
  name: string;
  type: ServiceStationType;
  address: ServiceStationAddress;
  latitude: number | null;
  longitude: number | null;
  phone: string | null;
  website: string | null;
  notes: string | null;
  isFavorite: boolean;
  lastVisitedAt: string | null;
  visitCount: number;
  myRating: number | null;
  googlePlaceId: string | null;
  googleRating: string | null;
  photoUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PlaceSuggestion {
  placeId: string;
  primaryText: string;
  secondaryText: string;
}

export interface PlaceDetails {
  placeId: string;
  name: string;
  address: {
    country: string;
    city: string;
    street: string;
    number: string;
    postCode?: string;
  };
  formattedAddress: string;
  latitude: number;
  longitude: number;
  phone: string | null;
  website: string | null;
  rating: number | null;
  googleTypes: string[];
}
