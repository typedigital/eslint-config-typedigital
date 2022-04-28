/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'import',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: '**/*components.ts{,x}',
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-magic-numbers.md
      },
    },
    {
      files: '**/*components.js{,x}',
      rules: {
        'no-magic-numbers': 'off', // https://github.com/eslint/eslint/blob/9ecd42f36462331a0d697e74323a4d24f0cf02fc/docs/src/rules/no-magic-numbers.md
      },
    },
  ],
  rules: {
    'import/group-exports': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
  },
};
