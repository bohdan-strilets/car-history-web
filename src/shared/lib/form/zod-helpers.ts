import { z } from 'zod';

export const zodIssue = (message: string, path: string[]): z.core.$ZodSuperRefineIssue => ({
  code: 'custom',
  message,
  path,
});
