/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
    parser: "babel-eslint",
    env: {
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: [
      "jsdoc",
      "import",
    ],
    extends: [
      "eslint:recommended",
      "standard",
      "prettier/standard",
    ],
    rules: {
      /* eslint-enable sort-keys */
      "comma-dangle": ["error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      }],
    },
  };