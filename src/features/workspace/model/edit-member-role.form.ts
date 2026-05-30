import { WORKSPACE_ROLE } from '@entities/workspace';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormErrors } from '@shared/lib/form';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useUpdateMemberRoleMutation } from '../api';

import { createEditMemberRoleSchema, type EditMemberRoleValues } from './edit-member-role.schema';
import type { EditMemberRoleFormParams } from './workspace.types';

export const useEditMemberRoleForm = ({
  workspaceId,
  member,
  onSuccess,
}: EditMemberRoleFormParams) => {
  const { t } = useTranslation();
  const resolver = zodResolver(createEditMemberRoleSchema(t));

  const defaultValues: EditMemberRoleValues = {
    role: member.role === WORKSPACE_ROLE.OWNER ? WORKSPACE_ROLE.ADMIN : member.role,
  };

  const form = useForm<EditMemberRoleValues>({ resolver, defaultValues });
  const { control, handleSubmit, setError } = form;

  const mutation = useUpdateMemberRoleMutation(workspaceId);
  const { mutate: update, isPending, error } = mutation;

  const errorMessage = useFormErrors({ error, setError, t });

  const onSubmit = (data: EditMemberRoleValues) => {
    update({ memberId: member.id, dto: data }, { onSuccess });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
    errorMessage,
  };
};
