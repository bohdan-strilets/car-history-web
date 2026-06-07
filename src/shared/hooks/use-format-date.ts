import { useTranslation } from 'react-i18next';

import { LANGUAGE, type Language } from '@entities/user';
import { DATE_FORMAT, useWorkspaceSettingsQuery, useWorkspaceStore } from '@entities/workspace';
import { formatDate } from '@shared/lib';

export const useFormatDate = () => {
  const { activeWorkspaceId } = useWorkspaceStore();
  const { data: settings } = useWorkspaceSettingsQuery(activeWorkspaceId ?? '');
  const { i18n } = useTranslation();

  const dateFormat = settings?.data?.dateFormat ?? DATE_FORMAT.DD_MM_YYYY;
  const language = (i18n.language as Language) ?? LANGUAGE.PL;

  return (date: string | Date) => formatDate(date, dateFormat, language);
};
