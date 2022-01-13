module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['import', 'react'],
  rules: {
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        ignoreComments: true,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    'no-unused-vars': 'warn',
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error'],
      },
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    semi: ['warn', 'never'],
    'eol-last': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'warn',
  },
}
