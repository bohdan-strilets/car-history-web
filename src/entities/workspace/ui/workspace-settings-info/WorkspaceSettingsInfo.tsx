import type { WorkspaceSettingsInfoProps } from '@entities/workspace/model';
import {
  CURRENCY_CONFIG,
  DATE_FORMAT_CONFIG,
  DISTANCE_UNIT_CONFIG,
  FUEL_UNIT_CONFIG,
  TIMEZONE_CONFIG,
  WORKSPACE_TYPE_CONFIG,
} from '@entities/workspace/model';
import { Heading, InfoRow, Panel, Stack } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { useTranslation } from 'react-i18next';

export const WorkspaceSettingsInfo = ({
  workspace,
  settings,
  onEditWorkspace,
  onEditSettings,
}: WorkspaceSettingsInfoProps) => {
  const { t } = useTranslation();

  const typeConfig = getConfigOption(t, WORKSPACE_TYPE_CONFIG, workspace.type);

  const currencyConfig = settings?.currency
    ? getConfigOption(t, CURRENCY_CONFIG, settings.currency)
    : undefined;

  const distanceUnitConfig = settings?.distanceUnit
    ? getConfigOption(t, DISTANCE_UNIT_CONFIG, settings.distanceUnit)
    : undefined;

  const fuelUnitConfig = settings?.fuelUnit
    ? getConfigOption(t, FUEL_UNIT_CONFIG, settings.fuelUnit)
    : undefined;

  const dateFormatConfig = settings?.dateFormat
    ? getConfigOption(t, DATE_FORMAT_CONFIG, settings.dateFormat)
    : undefined;

  const timezoneConfig = settings?.timezone
    ? getConfigOption(t, TIMEZONE_CONFIG, settings.timezone)
    : undefined;

  return (
    <>
      <Stack gap="xl">
        <Heading size="xl">{t('workspace.detail.info')}</Heading>
        <Panel gap="xs" p={{ mobile: 'sm', tablet: 'xl' }}>
          <InfoRow
            label={t('workspace.fields.name.label')}
            value={workspace.name}
            onClick={onEditWorkspace}
            icon="boxes"
            iconColor="purple"
            bottomDivider
          />
          <InfoRow
            label={t('workspace.fields.type')}
            value={typeConfig?.label}
            onClick={onEditWorkspace}
            icon={typeConfig?.icon ?? 'circleQuestionMark'}
            iconColor={typeConfig?.color ?? 'gray'}
          />
        </Panel>
      </Stack>

      <Stack gap="xl">
        <Heading size="xl">{t('workspace.settings.title')}</Heading>
        <Panel gap="xs" p={{ mobile: 'sm', tablet: 'xl' }}>
          <InfoRow
            label={t('workspace.fields.currency')}
            value={currencyConfig?.label}
            onClick={onEditSettings}
            icon={currencyConfig?.icon}
            iconColor={currencyConfig?.color}
            bottomDivider
          />
          <InfoRow
            label={t('workspace.fields.distanceUnit')}
            value={distanceUnitConfig?.label}
            onClick={onEditSettings}
            icon={distanceUnitConfig?.icon}
            iconColor={distanceUnitConfig?.color}
            bottomDivider
          />
          <InfoRow
            label={t('workspace.fields.fuelUnit')}
            value={fuelUnitConfig?.label}
            onClick={onEditSettings}
            icon={fuelUnitConfig?.icon}
            iconColor={fuelUnitConfig?.color}
            bottomDivider
          />
          <InfoRow
            label={t('workspace.fields.dateFormat')}
            value={dateFormatConfig?.label}
            onClick={onEditSettings}
            icon={dateFormatConfig?.icon}
            iconColor={dateFormatConfig?.color}
            bottomDivider
          />
          <InfoRow
            label={t('workspace.timezone')}
            value={timezoneConfig?.label}
            onClick={onEditSettings}
            icon="timer"
            iconColor="cyan"
          />
        </Panel>
      </Stack>
    </>
  );
};
