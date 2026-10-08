// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:@next/next/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      // no-page-custom-font 는 Pages Router(pages/_document) 기준 규칙이라,
      // 모든 페이지에 적용되는 App Router 의 root layout 에서는 오탐이므로 끈다.
      files: ['app/**/*.tsx'],
      rules: {
        '@next/next/no-page-custom-font': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
