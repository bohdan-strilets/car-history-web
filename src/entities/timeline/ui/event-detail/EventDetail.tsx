import { useTranslation } from 'react-i18next';

import { getTypedDetails, TIMELINE_EVENT_TYPE_CONFIG } from '@entities/timeline';
import { Button, Heading, IconBox, Stack, Text, Tooltip } from '@shared/ui';
import { getConfigOption } from '@shared/utils';

import {
  ChargeSection,
  DocumentSection,
  ExpenseSection,
  GeneralSection,
  PurchaseSection,
  RefuelSection,
  SaleSection,
  ServiceSection,
  TireChangeSection,
  TripSection,
} from './sections';

import type { EventDetailProps } from './event-detail.types';

export const EventDetail = ({ event, onEdit, onDelete, canDelete = true }: EventDetailProps) => {
  const { t } = useTranslation();

  const config = getConfigOption(t, TIMELINE_EVENT_TYPE_CONFIG, event.type);

  const renderTypeSection = () => {
    if (!event.details) return null;

    switch (event.type) {
      case 'REFUEL':
        return <RefuelSection details={getTypedDetails('REFUEL', event.details)!} />;

      case 'CHARGE':
        return <ChargeSection details={getTypedDetails('CHARGE', event.details)!} />;

      case 'SERVICE':
        return <ServiceSection details={getTypedDetails('SERVICE', event.details)!} />;

      case 'DOCUMENT':
        return <DocumentSection details={getTypedDetails('DOCUMENT', event.details)!} />;

      case 'EXPENSE':
        return <ExpenseSection details={getTypedDetails('EXPENSE', event.details)!} />;

      case 'TRIP':
        return <TripSection details={getTypedDetails('TRIP', event.details)!} />;

      case 'PURCHASE':
        return <PurchaseSection details={getTypedDetails('PURCHASE', event.details)!} />;

      case 'SALE':
        return <SaleSection details={getTypedDetails('SALE', event.details)!} />;

      case 'TIRE_CHANGE':
        return <TireChangeSection details={getTypedDetails('TIRE_CHANGE', event.details)!} />;

      default:
        return null;
    }
  };

  return (
    <Stack gap="3xl">
      <Stack direction="row" align="center" gap="xl">
        <IconBox
          name={config?.icon ?? 'circleQuestionMark'}
          soft={config?.color ?? 'gray'}
          weight="bold"
          size="2xl"
        />
        <Stack gap="xs">
          <Heading size="xl">{event.title}</Heading>
          <Text color="tertiary" size="sm">
            {config?.label}
          </Text>
        </Stack>
      </Stack>

      <GeneralSection event={event} />
      {renderTypeSection()}

      <Stack gap="md">
        {onEdit && (
          <Button
            type="button"
            leftIcon="edit"
            size="md"
            variant="soft"
            color="gray"
            onClick={onEdit}
          >
            {t('timeline.actions.editEvent')}
          </Button>
        )}
        {onDelete && (
          <Tooltip
            label={t('timeline.actions.noDeletePermissions')}
            placement="top"
            disabled={canDelete}
          >
            <Button
              type="button"
              leftIcon="trash"
              size="sm"
              variant="soft"
              color="danger"
              onClick={onDelete}
              disabled={!canDelete}
              fullWidth
            >
              {t('timeline.actions.deleteEvent')}
            </Button>
          </Tooltip>
        )}
      </Stack>
    </Stack>
  );
};
