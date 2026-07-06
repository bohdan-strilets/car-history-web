import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE } from '@entities/timeline';
import {
  ChargeForm,
  DocumentForm,
  ExpenseForm,
  PurchaseForm,
  RefuelForm,
  SaleForm,
  ServiceForm,
  TireChangeForm,
  TripForm,
  useCreateTimelineEventForm,
} from '@features/timeline';

import type { SelectedTypeFormProps } from './create-timeline-event-modal.types';

export const SelectedTypeForm = ({
  type,
  workspaceId,
  vehicleId,
  currentMileage,
  fuelType,
  onSuccess,
}: SelectedTypeFormProps) => {
  const { t } = useTranslation();

  const form = useCreateTimelineEventForm({
    workspaceId,
    vehicleId,
    type,
    currentMileage,
    fuelType,
    onSuccess,
  });

  const { control, handleSubmit, isPending, errorMessage, setValue } = form;

  const props = {
    control,
    setValue,
    handleSubmit,
    isPending,
    errorMessage,
    submitLabel: t('common.actions.save'),
  };

  switch (type) {
    case TIMELINE_EVENT_TYPE.REFUEL:
      return <RefuelForm {...props} />;

    case TIMELINE_EVENT_TYPE.SERVICE:
      return <ServiceForm {...props} />;

    case TIMELINE_EVENT_TYPE.DOCUMENT:
      return <DocumentForm {...props} />;

    case TIMELINE_EVENT_TYPE.EXPENSE:
      return <ExpenseForm {...props} />;

    case TIMELINE_EVENT_TYPE.PURCHASE:
      return <PurchaseForm {...props} />;

    case TIMELINE_EVENT_TYPE.SALE:
      return <SaleForm {...props} />;

    case TIMELINE_EVENT_TYPE.CHARGE:
      return <ChargeForm {...props} />;

    case TIMELINE_EVENT_TYPE.TRIP:
      return <TripForm {...props} />;

    case TIMELINE_EVENT_TYPE.TIRE_CHANGE:
      return (
        <TireChangeForm
          {...props}
          workspaceId={workspaceId}
          vehicleId={vehicleId}
          currentMileage={currentMileage}
        />
      );

    default:
      return null;
  }
};
