import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  { ignores: ['dist/', 'node_modules/', 'assets/', 'public/'] },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-empty': 'off',
      'no-useless-escape': 'off',
    },
  },
  {
    files: ['*.config.js', 'scripts/**/*.js'],
    languageOptions: { globals: { ...globals.node } },
  }
);
