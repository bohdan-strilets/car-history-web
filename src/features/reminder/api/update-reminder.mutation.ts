import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { reminderMutationApi } from './reminder.api';

import type { ReminderActionParams, UpdateReminderDto } from '../model';

export const useUpdateReminderMutation = ({
  workspaceId,
  vehicleId,
  reminderId,
  onSuccess,
}: ReminderActionParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: UpdateReminderDto) => {
      return reminderMutationApi.update(workspaceId, vehicleId, reminderId, dto);
    },

    onSuccess: () => {
      const remindersKeys = queryKeys.vehicles.reminders(vehicleId);
      queryClient.invalidateQueries({ queryKey: remindersKeys });
      onSuccess?.();
    },
  });
};
