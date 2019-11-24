/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */
module.exports = {
  plugins: ['react-native'],
  rules: {
    /* eslint-enable sort-keys */
    'react-native/no-color-literals': 'warn', // https://github.com/Intellicode/eslint-plugin-react-native/blob/da07c9ae222a98c7a1652ebe6d9d13dcc2225ef5/docs/rules/no-color-literals.md
    'react-native/no-inline-styles': 'error', // https://github.com/Intellicode/eslint-plugin-react-native/blob/da07c9ae222a98c7a1652ebe6d9d13dcc2225ef5/docs/rules/no-inline-styles.md
    'react-native/no-raw-text': 'error', // https://github.com/Intellicode/eslint-plugin-react-native/blob/da07c9ae222a98c7a1652ebe6d9d13dcc2225ef5/docs/rules/no-raw-text.md
    'react-native/no-single-element-style-arrays': 'error', // https://github.com/Intellicode/eslint-plugin-react-native/blob/f5cd32989ee40548bb998beba5877b0c5b18e64c/docs/rules/no-single-element-style-arrays.md
    'react-native/no-unused-styles': 'error', // https://github.com/Intellicode/eslint-plugin-react-native/blob/da07c9ae222a98c7a1652ebe6d9d13dcc2225ef5/docs/rules/no-unused-styles.md
    'react-native/split-platform-components': 'warn', // https://github.com/Intellicode/eslint-plugin-react-native/blob/da07c9ae222a98c7a1652ebe6d9d13dcc2225ef5/docs/rules/split-platform-components.md
  },
}
