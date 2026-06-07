import { useTranslation } from 'react-i18next';

import {
  CURRENCY_CONFIG,
  DATE_FORMAT_CONFIG,
  DISTANCE_UNIT_CONFIG,
  FUEL_UNIT_CONFIG,
  TIMEZONE_CONFIG,
  WORKSPACE_TYPE_CONFIG,
} from '@entities/workspace';
import { InfoRow } from '@shared/ui';
import { getConfigOption } from '@shared/utils';
import { InfoSection } from '@widgets/info-section/InfoSection';

import type { WorkspaceSettingsInfoProps } from './workspace-settings-info.types';

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
      <InfoSection title={t('workspace.detail.info')}>
        <InfoRow
          label={t('workspace.fields.name')}
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
      </InfoSection>

      <InfoSection title={t('workspace.settings.title')}>
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
          label={t('workspace.fields.timezone')}
          value={timezoneConfig?.label}
          onClick={onEditSettings}
          icon="timer"
          iconColor="cyan"
        />
      </InfoSection>
    </>
  );
};
