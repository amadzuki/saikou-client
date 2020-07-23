module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  plugins: ['prettier'],
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
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/no-unescaped-entities': ['error', {'forbid': ['>', '}']}],
  },
}
