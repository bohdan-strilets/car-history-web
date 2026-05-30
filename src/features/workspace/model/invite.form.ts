import { WORKSPACE_MEMBER_ROLE } from '@entities/workspace/model';
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
    role: WORKSPACE_MEMBER_ROLE.MEMBER,
  };

  const form = useForm<InviteValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useCreateInviteMutation(workspaceId);
  const { mutate: createInvite, isPending, error } = mutation;

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
