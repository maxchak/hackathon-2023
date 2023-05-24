module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import', 'fsd-import'],
  rules: {
    'react-refresh/only-export-components': 'warn',

    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/no-explicit-any": "error",

    'prefer-const': 'error',
    'quotes': ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-double'],
    'semi': ['warn', 'never'],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always'
      }
    ],
    // FSD import restrictions
    "fsd-import/fsd-relative-path": ['error', { alias: '@' }],
    "fsd-import/public-api-imports": ['error', { alias: '@' }],
    "fsd-import/layer-imports": ['error', { alias: '@' }],
  }
}
