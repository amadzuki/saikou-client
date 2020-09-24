module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  plugins: ['prettier', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
  },
}
