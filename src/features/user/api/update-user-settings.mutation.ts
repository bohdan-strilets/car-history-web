import { useMutation } from '@tanstack/react-query';

import type { UpdateUserSettingsDto } from '../model';

import { userApi } from './user.api';

export const useUpdateUserSettingsMutation = () =>
  useMutation({
    mutationFn: (dto: UpdateUserSettingsDto) => {
      return userApi.updateSettings(dto);
    },
  });
