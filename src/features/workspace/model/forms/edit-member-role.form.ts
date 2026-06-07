import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { zodResolver } from '@hookform/resolvers/zod';

import { useUpdateMemberRoleMutation } from '@features/workspace';
import { useFormErrors } from '@shared/lib';

import { editMemberRoleDefaultValues } from '../default-values';
import { createEditMemberRoleSchema, type EditMemberRoleValues } from '../schemes';

import type { EditMemberRoleFormParams } from '../types';

export const useEditMemberRoleForm = ({
  workspaceId,
  member,
  onSuccess,
}: EditMemberRoleFormParams) => {
  const { t } = useTranslation();

  const resolver = zodResolver(createEditMemberRoleSchema(t));
  const defaultValues = editMemberRoleDefaultValues(member);

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
