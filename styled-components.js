/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'import',
    '@typescript-eslint'
  ],
  overrides: [
    {
        files: "**/*components.ts{,x}",
        rules: {
            '@typescript-eslint/no-magic-numbers': 'off'
        },
    },
  ],
  overrides: [
    {
        files: "**/*components.js{,x}",
        rules: {
          'no-magic-numbers': 'off',
        },
    },
  ],
  rules: {
    'import/group-exports': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
  }
};
