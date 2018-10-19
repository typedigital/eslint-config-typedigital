module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'jsdoc',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'standard',
    'prettier/standard',
  ],
  rules: {
    /* eslint-enable sort-keys */
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'asyncArrow': 'always',
      'named': 'never',
    }],
  },
}
