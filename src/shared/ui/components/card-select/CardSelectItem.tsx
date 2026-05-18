import { Icon, Text } from '@shared/ui/primitives';

import { Panel } from '../panel';

import type { CardSelectItemProps } from './card-select.types';

export const CardSelectItem = ({
  option,
  isSelected,
  isDisabled,
  onSelect,
}: CardSelectItemProps) => {
  const { value, color, icon, label, description } = option;

  const handleSelect = () => {
    onSelect(value);
  };

  return (
    <Panel
      soft={isSelected ? color : undefined}
      shadow={isSelected ? color : undefined}
      hoverable
      onClick={handleSelect}
      disabled={isDisabled}
      aria-pressed={isSelected}
      align="center"
    >
      {icon && <Icon name={icon} size="md" color={isSelected ? color : undefined} />}

      <Text weight="semibold" color={isSelected ? color : undefined}>
        {label}
      </Text>

      {description && (
        <Text size="sm" color="secondary">
          {description}
        </Text>
      )}
    </Panel>
  );
};
