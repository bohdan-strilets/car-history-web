import { useRef, useState } from 'react';

import { placesApi } from '../api';

import type { PlaceDetails, PlaceSuggestion } from './service-station.types';

const DEBOUNCE_MS = 300;

export const usePlacesAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const sessionToken = useRef(crypto.randomUUID());
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const search = (value: string) => {
    setQuery(value);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    debounceTimer.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await placesApi.autocomplete(value, sessionToken.current);
        setSuggestions(response.data);
      } finally {
        setIsLoading(false);
      }
    }, DEBOUNCE_MS);
  };

  const selectPlace = async (placeId: string): Promise<PlaceDetails> => {
    const response = await placesApi.getDetails(placeId, sessionToken.current);
    sessionToken.current = crypto.randomUUID();
    setSuggestions([]);
    return response.data;
  };

  const reset = () => {
    setQuery('');
    setSuggestions([]);
  };

  return { query, suggestions, isLoading, search, selectPlace, reset };
};
