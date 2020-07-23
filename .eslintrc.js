module.exports = {
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
