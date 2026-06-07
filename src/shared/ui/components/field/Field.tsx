import { Stack, Text } from '@shared/ui';

import type { FieldProps } from './field.types';

export const Field = ({
  label: labelProp,
  hint: hintProp,
  error,
  required,
  htmlFor,
  children,
  className,
}: FieldProps) => {
  return (
    <Stack className={className} gap="md">
      {labelProp && (
        <label htmlFor={htmlFor}>
          <Stack direction="row" gap="xs" align="center">
            <Text color="secondary" size="sm">
              {labelProp}
            </Text>
            {required && (
              <Text as="span" color="danger">
                *
              </Text>
            )}
          </Stack>
        </label>
      )}

      {children}

      {error && (
        <Text color="danger" size="sm">
          {error}
        </Text>
      )}
      {!error && hintProp && (
        <Text color="tertiary" size="sm">
          {hintProp}
        </Text>
      )}
    </Stack>
  );
};

Field.displayName = 'Field';
