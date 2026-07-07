import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Dropdown, Input, Spinner, Text } from '@shared/ui';

import { usePlacesAutocomplete } from '../../model';

import * as styles from './places-autocomplete.css';

import type { PlacesAutocompleteProps } from './places-autocomplete.types';

export const PlacesAutocomplete = ({ onSelect, placeholder }: PlacesAutocompleteProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { query, suggestions, isLoading, search, selectPlace, reset } = usePlacesAutocomplete();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
    if (!open) setOpen(true);
  };

  const handleSelect = async (placeId: string) => {
    const place = await selectPlace(placeId);
    setOpen(false);
    onSelect(place);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) reset();
  };

  return (
    <Dropdown
      open={open}
      onOpenChange={handleOpenChange}
      fullWidth
      trigger={
        <Input
          value={query}
          onChange={handleInputChange}
          onClick={(e) => e.stopPropagation()}
          onFocus={() => setOpen(true)}
          placeholder={placeholder ?? t('serviceStation.places.searchPlaceholder')}
          leftIcon="search"
          size="lg"
        />
      }
    >
      <>
        {isLoading && (
          <div className={styles.loadingWrapper}>
            <Spinner size="sm" />
          </div>
        )}

        {!isLoading && query.trim() && suggestions.length === 0 && (
          <div className={styles.emptyWrapper}>
            <Text size="sm" color="tertiary">
              {t('common.labels.noOptions')}
            </Text>
          </div>
        )}

        {!isLoading &&
          suggestions.map((suggestion) => (
            <button
              key={suggestion.placeId}
              type="button"
              role="menuitem"
              className={styles.suggestionItem}
              onClick={() => handleSelect(suggestion.placeId)}
            >
              <Text size="sm" weight="medium">
                {suggestion.primaryText}
              </Text>
              <Text size="xs" color="tertiary">
                {suggestion.secondaryText}
              </Text>
            </button>
          ))}
      </>
    </Dropdown>
  );
};
