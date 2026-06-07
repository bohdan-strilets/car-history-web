import { useMutation } from '@tanstack/react-query';

import { userApi } from './user.api';

import type { UpdateUserSettingsDto } from '../model';

export const useUpdateUserSettingsMutation = () =>
  useMutation({
    mutationFn: (dto: UpdateUserSettingsDto) => {
      return userApi.updateSettings(dto);
    },
  });
