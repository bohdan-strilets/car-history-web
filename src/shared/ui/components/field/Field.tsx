import { Stack, Text } from '@shared/ui';

import type { FieldProps } from './field.types';

export const Field = ({
  label: labelProp,
  hint: hintProp,
  error,
  required,
  htmlFor,
  children,
  fullWidth = true,
  className,
  direction = 'column',
}: FieldProps) => {
  const widthStyle = fullWidth ? { width: '100%' } : { width: 'fit-content' };

  return (
    <Stack className={className} gap="md" style={widthStyle}>
      <Stack
        direction={direction}
        gap="md"
        justify={direction === 'row-reverse' ? 'end' : undefined}
        align={direction === 'row-reverse' ? 'center' : undefined}
      >
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
      </Stack>

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
