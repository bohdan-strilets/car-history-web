import type { EditProfileValues } from '../schemes';

export interface EditProfileFormParams {
  defaultValues: EditProfileValues;
  onSuccess?: () => void;
}

export interface ChangePasswordFormParams {
  onSuccess?: () => void;
}

export interface ChangeEmailFormParams {
  onSuccess?: () => void;
}

export interface DeleteAccountFormParams {
  onSuccess?: () => void;
}
