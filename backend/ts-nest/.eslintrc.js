module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import-helpers',
  ],
  extends: [
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.vscode',
    'dist',
    'node_modules',
    '.eslintrc.js'
  ],
  rules: {

    'no-debugger': 'off',
    'no-void': 'off',
    'no-new': 'warn',
    'no-prototype-builtins': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    "indent": 'off',

    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          'module',
          '/^@shared/',
          '/^@/',
          [
            'parent',
            'sibling',
            'index'
          ]
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true
        }
      }
    ],

    'camelcase': 'off',
    'prefer-promise-reject-errors': 'off',
    'init-declarations': 'off',
    'padding-line-between-statements': 'off',
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'warn',
    'max-len': [
      'error',
      {
        'code': 160,
        'tabWidth': 4,
        'ignoreUrls': true
      }
    ],
    'quotes': [
      'warn',
      'single',
      {
        'avoidEscape': true
      }
    ],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '_'
      }
    ],
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    "@typescript-eslint/indent": 'off',

  },
};
