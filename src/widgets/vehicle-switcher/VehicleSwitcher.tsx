import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getVehicleDisplayName } from '@entities/vehicle';
import { ROUTES } from '@shared/config';
import { Dropdown, DropdownItem, IconBox, Panel, Stack, Text } from '@shared/ui';

import { useVehicleSwitcher } from './lib';

import type { VehicleSwitcherProps } from './vehicle-switcher.types';

export const VehicleSwitcher = ({
  expanded = true,
  direction = 'right',
  align = 'start',
  className,
}: VehicleSwitcherProps) => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const { vehicles, activeVehicle, activeWorkspaceId, selectVehicle } = useVehicleSwitcher();

  if (vehicles.length === 0 || !activeWorkspaceId) return null;

  const activeVehicleLabel = activeVehicle ? getVehicleDisplayName(activeVehicle) : '—';

  const dropdownContent = (
    <Stack gap="md">
      {vehicles.map((vehicle) => (
        <DropdownItem
          key={vehicle.id}
          label={getVehicleDisplayName(vehicle)}
          leftIcon="car"
          selected={vehicle.id === activeVehicle?.id}
          onClick={() => {
            selectVehicle(vehicle);
            setOpen(false);
          }}
        />
      ))}
      <DropdownItem
        label={t('vehicle.list.add')}
        leftIcon="plus"
        onClick={() => {
          setOpen(false);
          navigate(ROUTES.WORKSPACES.VEHICLES.NEW(activeWorkspaceId));
        }}
      />
    </Stack>
  );

  if (!expanded) {
    return (
      <Dropdown
        direction={direction}
        align={align}
        open={open}
        onOpenChange={setOpen}
        className={className}
        trigger={
          <Panel p="sm" radius="md" hoverable>
            <IconBox name="car" soft="blue" />
          </Panel>
        }
      >
        {dropdownContent}
      </Dropdown>
    );
  }

  return (
    <Dropdown
      fullWidth
      open={open}
      onOpenChange={setOpen}
      trigger={
        <Panel
          p="md"
          radius="md"
          direction="row"
          align="center"
          justify="start"
          hoverable
          className={className}
        >
          <IconBox name="car" soft="blue" />
          <Stack gap="none" align="start">
            <Text size="md" weight="medium">
              {activeVehicleLabel}
            </Text>
            <Text size="xs" color="tertiary">
              {t('workspace.counts.vehicles', { count: vehicles.length })}
            </Text>
          </Stack>
        </Panel>
      }
    >
      {dropdownContent}
    </Dropdown>
  );
};
