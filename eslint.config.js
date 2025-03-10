import js from '@eslint/js';
import globals from 'globals';
import plugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';
import vitest from 'eslint-plugin-vitest';
import parser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import checkFile from 'eslint-plugin-check-file';

export default [
    {
      ignores: ['dist'],
    },
    {
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        parser,
        ecmaVersion: 2020,
        sourceType: 'commonjs', // Set to 'module' if using ES modules
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
      plugins: {
        'react-hooks': reactHooks,
        'jsx-a11y': jsxA11y,
        import: plugin,
        prettier: prettier,
        'testing-library': testingLibrary,
        'jest-dom': jestDom,
        vitest: vitest,
        'check-file': checkFile,
        '@typescript-eslint': typescriptEslint,
      },
      settings: {
        react: { version: 'detect' },
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        'import/no-cycle': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
            ],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
          },
        ],
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        "@typescript-eslint/no-unused-vars": "error",
        "no-unused-vars": "off",
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'check-file/filename-naming-convention': [
          'error',
          {
            '**/*.{ts,tsx}': 'KEBAB_CASE',
          },
          {
            ignoreMiddleExtensions: true,
          },
        ],
        'check-file/folder-naming-convention': [
          'error',
          {
            'src/**/!(__tests__)': 'KEBAB_CASE',
          },
        ],
      },
    },
  ];
  