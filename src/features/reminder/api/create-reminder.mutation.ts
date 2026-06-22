import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@shared/config';

import { reminderMutationApi } from './reminder.api';

import type { CreateReminderDto, ReminderParams } from '../model';

export const useCreateReminderMutation = ({ workspaceId, vehicleId }: ReminderParams) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateReminderDto) => {
      return reminderMutationApi.create(workspaceId, vehicleId, dto);
    },

    onSuccess: () => {
      const remindersKeys = queryKeys.vehicles.reminders(vehicleId);
      queryClient.invalidateQueries({ queryKey: remindersKeys });
    },
  });
};
