import { Grid } from '@shared/ui/primitives';

import type { CardSelectProps } from './card-select.types';
import { CardSelectItem } from './CardSelectItem';

export const CardSelect = ({ options, value, onChange, maxSelect }: CardSelectProps) => {
  const handleSelect = (val: string) => {
    if (maxSelect === 1) {
      onChange(value[0] === val ? [] : [val]);
      return;
    }

    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
      return;
    }

    if (!maxSelect || value.length < maxSelect) {
      onChange([...value, val]);
    }
  };

  const isLimitReached = maxSelect !== undefined && maxSelect > 1 && value.length >= maxSelect;

  return (
    <Grid columns={{ mobile: '2', tablet: '2', laptop: '3' }} gap="lg">
      {options.map((option) => {
        const isSelected = value.includes(option.value);
        const isDisabled = option.disabled ?? (!isSelected && isLimitReached);

        return (
          <CardSelectItem
            key={option.id}
            option={option}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onSelect={handleSelect}
          />
        );
      })}
    </Grid>
  );
};
