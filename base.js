/* eslint sort-keys: ["error", "asc"], max-lines: off, quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    requireConfigFile: false,
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    'jsdoc',
    'import',
    'promise',
    '@babel',
    'array-func',
    'optimize-regex',
    'no-unsafe-regex',
    'node',
    "unicorn",
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:array-func/recommended',
  ],
  rules: {
    /* eslint-enable sort-keys */
    '@babel/new-cap': 'error', // https://eslint.org/docs/rules/new-cap & https://github.com/@babel/eslint-plugin-abel
    '@babel/no-invalid-this': 'error', // https://eslint.org/docs/rules/no-invalid-this & https://github.com/@babel/eslint-plugin-@babel
    '@babel/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // https://eslint.org/docs/rules/no-unused-expressions & https://github.com/@babel/eslint-plugin-babel
    '@babel/object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: true },
    ], // https://eslint.org/docs/rules/object-curly-spacing & https://github.com/@babel/eslint-plugin-@babel
    '@babel/semi': [
      'warn',
      'always',
    ], // https://eslint.org/docs/rules/semi & https://github.com/@babel/eslint-plugin-@babel
    'accessor-pairs': [
      'warn',
      {
        getWithoutSet: true,
        setWithoutGet: true,
      },
    ], // https://eslint.org/docs/rules/accessor-pairs
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
      },
    ], // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-spacing': ['error', 'never'], // https://eslint.org/docs/rules/array-bracket-spacing
    'array-callback-return': ['warn'], // https://eslint.org/docs/rules/array-callback-return
    'array-element-newline': ['warn', 'consistent'], // https://eslint.org/docs/rules/array-element-newline
    'array-func/prefer-array-from': 'warn', // https://github.com/freaktechnik/eslint-plugin-array-func#examples-2
    'array-func/prefer-flat': 'off', // https://github.com/freaktechnik/eslint-plugin-array-func#prefer-flat
    'array-func/prefer-flat-map': 'warn', // https://github.com/freaktechnik/eslint-plugin-array-func#prefer-flat-map
    'arrow-body-style': ['error', 'as-needed'], // https://eslint.org/docs/rules/arrow-body-style
    'arrow-parens': ['error', 'always'], // https://eslint.org/docs/rules/arrow-parens
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ], // https://eslint.org/docs/rules/arrow-spacing
    'block-scoped-var': 'error', // https://eslint.org/docs/rules/block-scoped-var
    'block-spacing': 'error', // https://eslint.org/docs/rules/block-spacing
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // https://eslint.org/docs/rules/brace-style
    'callback-return': ['warn', ['callback', 'cb', 'next', 'done']],
    'camelcase': 'warn',
    'capitalized-comments': ['off'], // https://eslint.org/docs/rules/capitalized-comments
    'class-methods-use-this': ['warn'], // https://eslint.org/docs/rules/class-methods-use-this
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ], // https://eslint.org/docs/rules/comma-dangle
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ], // https://eslint.org/docs/rules/comma-spacing
    'comma-style': ['error', 'last'], // https://eslint.org/docs/rules/comma-style
    'complexity': [
      'warn',
      {
        max: 16,
      },
    ], // https://eslint.org/docs/rules/complexity
    'computed-property-spacing': ['error', 'never'], // https://eslint.org/docs/rules/computed-property-spacing
    'consistent-return': 'warn', // https://eslint.org/docs/rules/consistent-return
    'consistent-this': ['warn', 'that'], // https://eslint.org/docs/rules/consistent-this
    'constructor-super': 'error', // https://eslint.org/docs/rules/constructor-super
    'curly': ['error', 'all'], // https://eslint.org/docs/rules/curly
    'default-case': 'warn', // https://eslint.org/docs/rules/default-case
    'dot-location': ['error', 'property'], // https://eslint.org/docs/rules/dot-location
    'dot-notation': ['error', { allowKeywords: true }], // https://eslint.org/docs/rules/dot-notation
    'eol-last': ['error', 'always'], // https://eslint.org/docs/rules/eol-last
    'eqeqeq': ['warn', 'always'], // https://eslint.org/docs/rules/eqeqeq
    'for-direction': 'error', // https://eslint.org/docs/rules/for-direction
    'func-call-spacing': ['error', 'never'], // https://eslint.org/docs/rules/func-call-spacing
    'func-name-matching': ['warn', 'always'], // https://eslint.org/docs/rules/func-name-matching
    // 'func-paren-newline': ['error', 'multiline'], // https://eslint.org/docs/rules/function-paren-newline
    'func-names': ['error', 'as-needed'], // https://eslint.org/docs/rules/func-names
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // https://eslint.org/docs/rules/func-style
    'generator-star-spacing': ['error', { after: true, before: true }],
    'global-require': 'error', // https://eslint.org/docs/rules/global-require
    'grouped-accessor-pairs': ['error', 'getBeforeSet'], // https://eslint.org/docs/rules/grouped-accessor-pairs
    'guard-for-in': 'warn', // https://eslint.org/docs/rules/guard-for-in
    'handle-callback-err': ['error', '^(err|error|e)$'], // https://eslint.org/docs/rules/handle-callback-err
    'id-blacklist': ['off'], // https://eslint.org/docs/rules/id-blacklist
    'id-length': [
      'off',
      {
        max: 20,
        min: 1,
      },
    ], // https://eslint.org/docs/rules/id-length
    'id-match': 'off', // https://eslint.org/docs/rules/id-match
    'import/default': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/dynamic-import-chunkname': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    'import/export': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/exports-last': 'warn', // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
    'import/extensions': ['warn', 'ignorePackages'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/first': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/group-exports': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/group-exports.md
    'import/max-dependencies': ['warn', { max: 20 }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/named': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/namespace': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/newline-after-import': ['warn', { count: 1 }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/no-absolute-path': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-amd': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-anonymous-default-export': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-commonjs': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // * this rule is computationally expensive. We could try it out and disable it later
    'import/no-cycle': [2, { maxDepth: 1 }], // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-cycle.md
    'import/no-default-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-default-export.md
    // * this rule is computationally expensive. We could try it out and disable it later
    'import/no-deprecated': 'warn', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-duplicates': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-dynamic-require': 'warn', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    // * we should try this out and maybe adjust it later with and array of globs
    'import/no-extraneous-dependencies': ['error'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-internal-modules': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-mutable-exports': 'warn', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-named-as-default': 'warn', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default-member': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-default': 'warn', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    'import/no-namespace': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-nodejs-modules': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-relative-parent-imports': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    'import/no-restricted-paths': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-self-import': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-self-import.md
    'import/no-unassigned-import': ['warn', { 'allow': ['**/*.css', '**/*.scss', '**/*.sass'] }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unresolved': ['warn', { commonjs: true }], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-useless-path-segments': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-webpack-loader-syntax': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/order': 'error', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/prefer-default-export': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/unambiguous': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    'indent': ['error', 2], // http://eslint.org/docs/rules/indent
    'init-declarations': 'off', // http://eslint.org/docs/rules/init-declarations
    'jsx-quotes': ['error', 'prefer-single'], // https://eslint.org/docs/rules/jsx-quotes
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
      },
    ], // https://eslint.org/docs/rules/key-spacing
    'keyword-spacing': ['error'], // https://eslint.org/docs/rules/keyword-spacing
    // * not sure if it's unnecessary to be that strict with line comments, but let's check that out
    'line-comment-position': 'off', // https://eslint.org/docs/rules/line-comment-position
    'linebreak-style': ['error', 'unix'], // https://eslint.org/docs/rules/linebreak-style
    'lines-around-comment': ['warn', { beforeBlockComment: true }], // https://eslint.org/docs/rules/lines-around-comment
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ], // https://eslint.org/docs/rules/lines-between-class-members
    // * not sure if we could switch to max 3 to ensure better readability
    'max-depth': ['warn', { max: 4 }], // https://eslint.org/docs/rules/max-depth
    // * maybe we need more space than 100 characters for our code
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ], // https://eslint.org/docs/rules/max-len
    'max-lines': [
      'warn',
      { max: 300, skipBlankLines: true, skipComments: true },
    ], // https://eslint.org/docs/rules/max-lines
    'max-nested-callbacks': ['warn', { max: 5 }], // https://eslint.org/docs/rules/max-nested-callbacks
    'max-params': ['warn', { max: 3 }], // https://eslint.org/docs/rules/max-params
    'max-statements': 'off', // https://eslint.org/docs/rules/max-statements
    'max-statements-per-line': ['error', { max: 2 }], // https://eslint.org/docs/rules/max-statements-per-line
    'multiline-ternary': ['off', 'always-multiline'], // https://eslint.org/docs/rules/multiline-ternary
    'new-cap': 'off', // this is handled by @babel/new-cap
    'new-parens': ['error'], // https://eslint.org/docs/rules/new-parens
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }], // https://eslint.org/docs/rules/newline-per-chained-call
    'no-alert': 'warn', // https://eslint.org/docs/rules/no-alert
    'no-array-constructor': 'error', // https://eslint.org/docs/rules/no-array-constructor
    'no-await-in-loop': 'error', // https://eslint.org/docs/rules/no-await-in-loop
    'no-bitwise': 'error', // https://eslint.org/docs/rules/no-bitwise
    'no-buffer-constructor': 'error', // http://eslint.org/docs/rules/no-buffer-constructor
    'no-caller': 'error', // https://eslint.org/docs/rules/no-caller
    'no-case-declarations': 'error', // https://eslint.org/docs/rules/no-case-declarations
    // ! turned off because it's a deprecated rule
    'no-catch-shadow': 'off', // https://eslint.org/docs/rules/no-catch-shadow
    'no-class-assign': 'error', // https://eslint.org/docs/rules/no-class-assign
    'no-cond-assign': ['error', 'except-parens'], // https://eslint.org/docs/rules/no-cond-assign
    'no-confusing-arrow': ['warn', { allowParens: true }], // https://eslint.org/docs/rules/no-confusing-arrow
    'no-console': 'warn', // https://eslint.org/docs/rules/no-console
    'no-const-assign': 'error', // https://eslint.org/docs/rules/no-const-assign
    'no-constant-condition': 'error', // https://eslint.org/docs/rules/no-constant-condition
    'no-constructor-return': 'error', // https://eslint.org/docs/rules/no-constructor-return
    'no-continue': 'warn', // https://eslint.org/docs/rules/no-continue
    'no-control-regex': 'error', // https://eslint.org/docs/rules/no-control-regex
    'no-debugger': 'error', // https://eslint.org/docs/rules/no-debugger
    'no-delete-var': 'error', // https://eslint.org/docs/rules/no-delete-var
    'no-div-regex': 'warn', // https://eslint.org/docs/rules/no-div-regex
    'no-dupe-args': 'error', // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-class-members': 'error', // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-else-if': 'error', // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-keys': 'error', // https://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 'error', // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-imports': 'off', // this is handled by import/no-duplicates
    'no-else-return': 'error', // https://eslint.org/docs/rules/no-else-return
    'no-empty': 'error', // https://eslint.org/docs/rules/no-empty
    'no-empty-character-class': 'error', // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions'] }], // https://eslint.org/docs/rules/no-empty-function
    'no-empty-pattern': 'error', // https://eslint.org/docs/rules/no-empty-pattern
    'no-eq-null': 'error', // https://eslint.org/docs/rules/no-eq-null
    'no-eval': 'error', // https://eslint.org/docs/rules/no-eval
    'no-ex-assign': 'error', // https://eslint.org/docs/rules/no-ex-assign
    'no-extend-native': 'error', // https://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 'error', // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-boolean-cast': 'error', // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-label': 'error', // https://eslint.org/docs/rules/no-extra-label
    // ! turned off rule because it clashes with arrow-parens
    'no-extra-parens': [
      'off', 'all', { // exceptions come here:
        'enforceForArrowConditionals': false,
        'enforceForNewInMemberExpressions': false,
        'ignoreJSX': 'all',
        'nestedBinaryExpressions': false,
        'returnAssign': false,
      },
    ], // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-semi': 'error', // https://eslint.org/docs/rules/no-extra-semi
    'no-fallthrough': 'error', // https://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 'error', // https://eslint.org/docs/rules/no-floating-decimal
    'no-func-assign': 'error', // https://eslint.org/docs/rules/no-func-assign
    'no-global-assign': 'error', // https://eslint.org/docs/rules/no-global-assign
    'no-implicit-coercion': 'error', // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-globals': 'error', // https://eslint.org/docs/rules/no-implicit-globals
    'no-implied-eval': 'error', // https://eslint.org/docs/rules/no-implied-eval
    // * handled by line-comment-position
    'no-inline-comments': 'off', // https://eslint.org/docs/rules/no-inline-comments
    // * default is only functions - with "both" we ensure that vars cannot be declarated in nested blocks
    'no-inner-declarations': ['error', 'both'], // https://eslint.org/docs/rules/no-inner-declarations
    'no-invalid-regexp': 'error', // https://eslint.org/docs/rules/no-invalid-regexp
    // * handled by @babel/no-invalid-this
    'no-invalid-this': 'off', // https://eslint.org/docs/rules/no-invalid-this
    'no-irregular-whitespace': 'error', // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-iterator': 'error', // https://eslint.org/docs/rules/no-iterator
    'no-label-var': 'error', // httpsx://eslint.org/docs/rules/no-label-var
    'no-labels': 'error', // https://eslint.org/docs/rules/no-labels
    'no-lone-blocks': 'error', // https://eslint.org/docs/rules/no-lone-blocks
    'no-lonely-if': 'warn', // https://eslint.org/docs/rules/no-lonely-if
    'no-loop-func': 'error', // https://eslint.org/docs/rules/no-loop-func
    'no-magic-numbers': [
      'off',
      {
        ignore: [
          // allow digits
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          // allow multiples of 10
          -1,
          -10,
          -100,
          -1000,
          10,
          100,
          1000,
          // allow bytes
          16,
          32,
          64,
          128,
          256,
          512,
          1024,
          // allow seconds, minutes, hours and days
          60,
          24,
          365,
          // allow ports
          80,
          443,
          1337,
          3000,
          8000,
          8080,
        ],
      },
    ], // https://eslint.org/docs/rules/no-magic-numbers
    'no-mixed-operators': 'error', // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-requires': [
      'error',
      {
        allowCall: false,
        grouping: true,
      },
    ], // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-spaces-and-tabs': 'error', // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-multi-assign': 'warn', // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-spaces': 'error', // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-str': 'error', // https://eslint.org/docs/rules/no-multi-str
    'no-multiple-empty-lines': ['error', { max: 1 }], // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-negated-condition': 'error', // https://eslint.org/docs/rules/no-negated-condition
    'no-nested-ternary': 'warn', // https://eslint.org/docs/rules/no-nested-ternary
    'no-new': 'error', // https://eslint.org/docs/rules/no-new
    'no-new-func': 'error', // https://eslint.org/docs/rules/no-new-func
    'no-new-object': 'error', // https://eslint.org/docs/rules/no-new-object
    'no-new-require': 'error', // https://eslint.org/docs/rules/no-new-require
    'no-new-symbol': 'error', // https://eslint.org/docs/rules/no-new-symbol
    'no-new-wrappers': 'error', // https://eslint.org/docs/rules/no-new-wrappers
    'no-obj-calls': 'error', // https://eslint.org/docs/rules/no-obj-calls
    'no-octal': 'error', // https://eslint.org/docs/rules/no-octal
    'no-octal-escape': 'error', // https://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 'error', // https://eslint.org/docs/rules/no-param-reassign
    'no-path-concat': 'warn', // https://eslint.org/docs/rules/no-path-concat
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }], // https://eslint.org/docs/rules/no-plusplus
    'no-proto': 'error', // https://eslint.org/docs/rules/no-proto
    'no-prototype-builtins': 'error', // https://eslint.org/docs/rules/no-prototype-builtins
    'no-redeclare': 'error', // https://eslint.org/docs/rules/no-redeclare
    'no-regex-spaces': 'error', // https://eslint.org/docs/rules/no-regex-spaces
    'no-restricted-globals': ['error', 'event'], // https://eslint.org/docs/rules/no-restricted-globals
    // * this could be useful if we standardize some of the libs we use
    'no-restricted-imports': 'off', // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-modules': 'off', // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-properties': 'off', // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-syntax': ['error', 'WithStatement'], // https://eslint.org/docs/rules/no-restricted-syntax
    'no-return-assign': ['error', 'except-parens'], // https://eslint.org/docs/rules/no-return-assign
    'no-return-await': 'error', // https://eslint.org/docs/rules/no-return-await
    'no-script-url': 'error', // https://eslint.org/docs/rules/no-script-url
    'no-self-assign': 'error', // https://eslint.org/docs/rules/no-self-assign
    'no-self-compare': 'error', // https://eslint.org/docs/rules/no-self-compare
    'no-sequences': 'error', // https://eslint.org/docs/rules/no-sequences
    'no-setter-return': 'error', // https://eslint.org/docs/rules/no-setter-return
    'no-shadow': 'warn', // https://eslint.org/docs/rules/no-shadow
    'no-shadow-restricted-names': 'error', // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-sparse-arrays': 'error', // https://eslint.org/docs/rules/no-sparse-arrays
    // * in some cases it's totally ok to use sync functions like some of the fs functions
    'no-sync': 'off', // https://eslint.org/docs/rules/no-sync
    'no-tabs': 'error', // https://eslint.org/docs/rules/no-tabs
    'no-template-curly-in-string': 'error', // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-ternary': 'off', // https://eslint.org/docs/rules/no-ternary
    'no-this-before-super': 'error', // https://eslint.org/docs/rules/no-this-before-super
    'no-throw-literal': 'error', // https://eslint.org/docs/rules/no-throw-literal
    'no-trailing-spaces': 'error', // https://eslint.org/docs/rules/no-trailing-spaces
    'no-undef': [
      'error',
      {
        typeof: false,
      },
    ], // https://eslint.org/docs/rules/no-undef
    'no-undef-init': 'error', // https://eslint.org/docs/rules/no-undef-init
    // * should be fine to turn it off, but let us double check it the next iteration
    'no-undefined': 'warn', // https://eslint.org/docs/rules/no-undefined
    'no-underscore-dangle': 'error', // https://eslint.org/docs/rules/no-underscore-dangle
    'no-unexpected-multiline': 'error', // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unmodified-loop-condition': 'warn', // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unneeded-ternary': 'error', // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unreachable': 'error', // https://eslint.org/docs/rules/no-unreachable
    'no-unsafe-finally': 'error', // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-negation': 'error', // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-regex/no-unsafe-regex': 'error', // https://github.com/kgryte/eslint-plugin-no-unsafe-regex
    'no-unused-expressions': 'off', // handled by @babel/no-unused-expressions
    'no-unused-labels': 'error', // https://eslint.org/docs/rules/no-unused-labels
    // * maybe we need further adjustments - but let's try it out like this first
    'no-unused-vars': 'error', // https://eslint.org/docs/rules/no-unused-vars
    'no-use-before-define': 'warn', // https://eslint.org/docs/rules/no-use-before-define
    'no-useless-call': 'error', // https://eslint.org/docs/rules/no-useless-call
    'no-useless-computed-key': 'error', // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-concat': 'error', // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-constructor': 'error', // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-escape': 'error', // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-rename': 'error', // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-return': 'error', // https://eslint.org/docs/rules/no-useless-return
    'no-var': 'error', // https://eslint.org/docs/rules/no-var
    // * warn because it's hard to read and understand in most cases
    'no-void': 'warn', // https://eslint.org/docs/rules/no-void
    'no-warning-comments': [
      'warn',
      {
        location: 'anywhere',
        terms: ['todo', 'fix', 'fixme'],
      },
    ], // https://eslint.org/docs/rules/no-warning-comments
    'no-whitespace-before-property': 'error', // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-with': 'error', // https://eslint.org/docs/rules/no-with
    'node/no-process-env': ['off'], // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-env.md
    'node/no-process-exit': 'warn', // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-process-exit.md
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ], // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-spacing': 'off', // handled by @babel/object-curly-spacing
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ], // https://eslint.org/docs/rules/object-property-newline
    'object-shorthand': ['error', 'always'], // https://eslint.org/docs/rules/object-shorthand
    'one-var': ['error', 'never'], // https://eslint.org/docs/rules/one-var
    'one-var-declaration-per-line': 'off', // https://eslint.org/docs/rules/one-var-declaration-per-line
    'operator-assignment': ['warn', 'always'], // https://eslint.org/docs/rules/operator-assignment
    'operator-linebreak': ['error', 'before', { 'overrides': { '?': 'after' } }], // https://eslint.org/docs/rules/operator-linebreak
    'optimize-regex/optimize-regex': 'warn', // https://github.com/BrainMaestro/eslint-plugin-optimize-regex/blob/master/README.md
    'padded-blocks': ['error', 'never'], // https://eslint.org/docs/rules/padded-blocks
    // * this needs a lot of investigation for the different options
    'padding-line-between-statements': 'off', // https://eslint.org/docs/rules/padding-line-between-statements
    'prefer-arrow-callback': 'error', // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-const': 'error', // https://eslint.org/docs/rules/prefer-const
    'prefer-destructuring': ['error', { array: true, object: true }], // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-exponentiation-operator': ['warn'], // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-numeric-literals': 'error', // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-promise-reject-errors': 'error', // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-rest-params': 'warn', // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-spread': 'error', // https://eslint.org/docs/rules/prefer-spread
    'prefer-template': 'error', // https://eslint.org/docs/rules/prefer-template
    'promise/always-return': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
    'promise/avoid-new': 'warn', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/avoid-new.md
    'promise/catch-or-return': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
    'promise/no-callback-in-promise': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-callback-in-promise.md
    'promise/no-native': 'off', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-native.md
    'promise/no-nesting': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-nesting.md
    'promise/no-new-statics': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md
    'promise/no-promise-in-callback': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-promise-in-callback.md
    'promise/no-return-in-finally': 'warn', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-in-finally.md
    'promise/no-return-wrap': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md
    'promise/param-names': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/param-names.md
    // * it's better to use one syntax so the await syntax should be our standard and in some cases the `then` syntax can be used
    'promise/prefer-await-to-callbacks': 'warn', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-callbacks.md
    'promise/prefer-await-to-then': 'off', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/prefer-await-to-then.md
    'promise/valid-params': 'error', // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md
    'quote-props': ['error', 'consistent-as-needed'], // https://eslint.org/docs/rules/quote-props
    'quotes': ['error', 'single', { allowTemplateLiterals: true }], // handled by @babel/quotes
    'radix': ['warn', 'always'], // https://eslint.org/docs/rules/radix
    'require-await': 'off', // https://eslint.org/docs/rules/require-await
    // ! turned off because it's a deprecated rule
    'require-jsdoc': 'off', // https://eslint.org/docs/rules/require-jsdoc
    'require-yield': 'warn', // https://eslint.org/docs/rules/require-yield
    'rest-spread-spacing': ['error', 'never'], // https://eslint.org/docs/rules/rest-spread-spacing
    'semi': 'off', // handled by @babel/semi
    'semi-spacing': ['error', { 'after': true, 'before': false }], // https://eslint.org/docs/rules/semi-spacing
    'semi-style': ['error', 'last'], // https://eslint.org/docs/rules/semi-style
    'sort-imports': 'off', // https://eslint.org/docs/rules/sort-imports
    'sort-keys': 'off', // https://eslint.org/docs/rules/sort-keys
    'sort-vars': 'off', // https://eslint.org/docs/rules/sort-vars
    'space-before-blocks': ['error', 'always'], // https://eslint.org/docs/rules/space-before-blocks
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ], // https://eslint.org/docs/rules/space-before-function-paren
    'space-in-parens': ['error', 'never'], // https://eslint.org/docs/rules/space-in-parens
    'space-infix-ops': 'error', // https://eslint.org/docs/rules/space-infix-ops
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        words: true,
      },
    ], // https://eslint.org/docs/rules/space-unary-ops
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }], // https://eslint.org/docs/rules/spaced-comment
    'strict': 'error', // https://eslint.org/docs/rules/strict
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ], // https://eslint.org/docs/rules/switch-colon-spacing
    'symbol-description': 'error', // https://eslint.org/docs/rules/symbol-description
    'template-curly-spacing': ['error', 'never'], // https://eslint.org/docs/rules/template-curly-spacing
    'template-tag-spacing': ['error', 'never'], // https://eslint.org/docs/rules/template-tag-spacing
    'unicode-bom': ['error', 'never'], // https://eslint.org/docs/rules/unicode-bom
    'unicorn/filename-case' : ['error'], //https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    'use-isnan': 'error', // https://eslint.org/docs/rules/use-isnan
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          object: 'Object',
          return: 'returns',
        },
        requireParamDescription: false,
        requireReturn: false,
        requireReturnDescription: false,
      },
    ], // https://eslint.org/docs/rules/valid-jsdoc
    'valid-typeof': 'off', // handled by @babel/valid-typeof
    'vars-on-top': 'error', // https://eslint.org/docs/rules/vars-on-top
    'wrap-iife': 'off', // https://eslint.org/docs/rules/wrap-iife
    'wrap-regex': 'warn', // https://eslint.org/docs/rules/wrap-regex
    'yield-star-spacing': ['error', 'both'], // https://eslint.org/docs/rules/yield-star-spacing
    'yoda': ['error', 'never'], // https://eslint.org/docs/rules/yoda
  },
};
