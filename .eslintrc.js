module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort', 'prettier'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$', '^[a-z]'],
          ['^@'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.s?css$'],
          ['^\\u0000'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-case-declarations': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    eqeqeq: 0,
    'operator-assignment': 0,
    'no-continue': 0,
    'max-classes-per-file': 0,
    'react/prop-types': 0,
    'no-unused-vars': 0,
    'react/destructuring-assignment': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-unused-state': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@constants', './src/constants'],
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@utils', './src/utils'],
          ['@pages', './src/pages'],
          ['@store', './src/store'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
