const nextPlugin = require('@next/eslint-plugin-next');
const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
    },
  },
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: [ '**/*.{ts,tsx,js}' ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      ts,
    },
    rules: {
      semi: [ 'error', 'always' ],
      '@next/next/no-html-link-for-pages': 0,
      'array-bracket-spacing': [ 'error', 'always' ],
      'object-curly-spacing': [ 'error', 'always' ],
      quotes: [ 1, 'single' ], // 单引号
      indent: [
        'warn',
        2,
        {
          // 缩进空格
          SwitchCase: 1,
        },
      ],
    },
  },
];
