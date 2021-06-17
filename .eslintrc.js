module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // 'ecmaVersion': 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  extends: 'plugin:react/recommended',

  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/prop-types': 'error',
    'no-undef': 'false',
  },
};
