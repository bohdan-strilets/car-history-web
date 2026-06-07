import js from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      'import-x': importX,
      prettier,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'import-x/internal-regex': '^@(app|pages|widgets|features|entities|shared|config)/',
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import-x/no-duplicates': 'error',
      'import-x/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: 'react-*', group: 'external', position: 'before' },
            { pattern: '@app/**', group: 'internal' },
            { pattern: '@config/**', group: 'internal' },
            { pattern: '@entities/**', group: 'internal' },
            { pattern: '@features/**', group: 'internal' },
            { pattern: '@pages/**', group: 'internal' },
            { pattern: '@shared/**', group: 'internal' },
            { pattern: '@widgets/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react-*', 'type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
]);
