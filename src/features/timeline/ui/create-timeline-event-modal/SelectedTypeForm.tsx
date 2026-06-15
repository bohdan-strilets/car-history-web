import { useTranslation } from 'react-i18next';

import { TIMELINE_EVENT_TYPE } from '@entities/timeline';
import {
  DocumentForm,
  RefuelForm,
  ServiceForm,
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

    default:
      return null;
  }
};
