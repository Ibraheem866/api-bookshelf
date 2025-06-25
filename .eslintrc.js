module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'linebreak-style': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'max-len': ['error', { code: 100, ignoreComments: true }],
  },
};
