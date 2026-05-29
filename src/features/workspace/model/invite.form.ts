import { WORKSPACE_ROLE } from '@entities/workspace/model';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useCreateInviteMutation } from '../api';

import { createInviteSchema, type InviteValues } from './invite.schema';
import type { InviteFormParams } from './workspace.types';

export const useInviteForm = ({ workspaceId, onSuccess }: InviteFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createInviteSchema(t));
  const defaultValues: InviteValues = {
    email: '',
    role: WORKSPACE_ROLE.MEMBER,
  };

  const { control, handleSubmit, setError } = useForm<InviteValues>({
    resolver,
    defaultValues,
  });

  const { mutate: createInvite, isPending, error } = useCreateInviteMutation(workspaceId);
  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: InviteValues) => {
    createInvite(data, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
