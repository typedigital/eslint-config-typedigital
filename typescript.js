/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = {
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['import'],
      env: {
        'node': true,
      },
      rules: {
        /* eslint-enable sort-keys */
        '@babel/no-invalid-this': 'off', // covered by @typescript-eslint/no-invalid-this
        '@babel/no-unused-expressions': 'off', // covered by @typescript-eslint/no-unused-expressions
        '@babel/semi': 'off', // covered by @typescript-eslint/semi
        '@typescript-eslint/adjacent-overload-signatures': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
        '@typescript-eslint/array-type': [
          'warn',
          { default: 'array' },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
        '@typescript-eslint/await-thenable': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
        // Disable the warning for legimitate use cases
        '@typescript-eslint/ban-ts-comment': [
          'warn',
          {
            'ts-expect-error': 'allow-with-description',
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
        '@typescript-eslint/ban-tslint-comment': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
        '@typescript-eslint/ban-types': [
          'warn',
          {
            types: {
              // Default options taken from https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/rules/ban-types.ts
              Boolean: {
                fixWith: 'boolean',
                message: 'Use boolean instead',
              },
              Number: {
                fixWith: 'number',
                message: 'Use number instead',
              },
              Object: {
                fixWith: 'Record<string, unknown>',
                message: 'Use Record<string, unknown> instead',
              },
              String: {
                fixWith: 'string',
                message: 'Use string instead',
              },
              Symbol: {
                fixWith: 'symbol',
                message: 'Use symbol instead',
              },
            },
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
        '@typescript-eslint/brace-style': [
          'warn',
          '1tbs',
          {
            allowSingleLine: false,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
        // Handled by @typescript-eslint/naming-convention
        '@typescript-eslint/camelcase': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
        '@typescript-eslint/class-literal-property-style': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
        '@typescript-eslint/comma-spacing': [
          'warn',
          {
            after: true,
            before: false,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
        '@typescript-eslint/consistent-indexed-object-style': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
        '@typescript-eslint/consistent-type-definitions': [
          'warn',
          'type',
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
        '@typescript-eslint/consistent-type-imports': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
        '@typescript-eslint/default-param-last': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
        '@typescript-eslint/dot-notation': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
        '@typescript-eslint/explicit-function-return-type': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-member-accessibility': [
          'warn',
          {
            accessibility: 'no-public',
            overrides: {
              parameterProperties: 'explicit',
            },
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-module-boundary-types': [
          'warn',
          {
            allowDirectConstAssertionInArrowFunctions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
            allowedNames: [],
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
        '@typescript-eslint/func-call-spacing': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
        '@typescript-eslint/generic-type-naming': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
        '@typescript-eslint/indent': ['error', 2], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        '@typescript-eslint/init-declarations': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
        '@typescript-eslint/lines-between-class-members': [
          'warn',
          'always',
          {
            exceptAfterOverload: true,
            exceptAfterSingleLine: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
        '@typescript-eslint/member-delimiter-style': [
          'warn',
          {
            multiline: {
              delimiter: 'comma',
              requireLast: true,
            },
            singleline: {
              delimiter: 'comma',
              requireLast: false,
            },
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        '@typescript-eslint/member-naming': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
        '@typescript-eslint/member-ordering': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
        '@typescript-eslint/method-signature-style': [
          'warn',
          'property',
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
        '@typescript-eslint/naming-convention': [
          'off',
          {
            format: ['camelCase'],
            leadingUnderscore: 'allow',
            selector: 'default',
            trailingUnderscore: 'allow',
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        '@typescript-eslint/no-array-constructor': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        '@typescript-eslint/no-base-to-string': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
        '@typescript-eslint/no-confusing-non-null-assertion': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
        '@typescript-eslint/no-confusing-void-expression': [
          'warn',
          {
            ignoreArrowShorthand: true,
            ignoreVoidOperator: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
        '@typescript-eslint/no-dupe-class-members': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
        '@typescript-eslint/no-duplicate-imports': ['error'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/@typescript-eslint/no-duplicate-imports.md
        '@typescript-eslint/no-dynamic-delete': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
        '@typescript-eslint/no-empty-function': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
        '@typescript-eslint/no-empty-interface': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        '@typescript-eslint/no-explicit-any': [
          'warn',
          {
            fixToUnknown: false,
            ignoreRestArgs: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-extra-non-null-assertion': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
        '@typescript-eslint/no-extra-parens': [
          'off', 'all', { // exceptions come here:
            'enforceForArrowConditionals': false,
            'enforceForNewInMemberExpressions': false,
            'ignoreJSX': 'all',
            'nestedBinaryExpressions': false,
            'returnAssign': false,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
        '@typescript-eslint/no-extraneous-class': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
        '@typescript-eslint/no-floating-promises': [
          'warn',
          {
            ignoreVoid: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
        '@typescript-eslint/no-for-in-array': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
        '@typescript-eslint/no-implicit-any-catch': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
        '@typescript-eslint/no-implied-eval': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
        '@typescript-eslint/no-inferrable-types': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        // kills this outside of classes and "class-likes" which is a good thing imo
        '@typescript-eslint/no-invalid-this': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
        // discourages functions that return something or void
        '@typescript-eslint/no-invalid-void-type': [
          'warn',
          {
            allowAsThisParameter: true,
            allowInGenericTypeArguments: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
        '@typescript-eslint/no-loop-func': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
        '@typescript-eslint/no-loss-of-precision': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
        '@typescript-eslint/no-magic-numbers': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
        '@typescript-eslint/no-misused-new': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
        '@typescript-eslint/no-misused-promises': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
        '@typescript-eslint/no-namespace': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
        '@typescript-eslint/no-non-null-asserted-optional-chain':
              'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
        '@typescript-eslint/no-non-null-assertion': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        '@typescript-eslint/no-parameter-properties': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
        '@typescript-eslint/no-redeclare': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
        '@typescript-eslint/no-require-imports': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
        '@typescript-eslint/no-shadow': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        '@typescript-eslint/no-this-alias': [
          'warn',
          {
            allowDestructuring: true,
            allowedNames: [],
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
        '@typescript-eslint/no-throw-literal': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
        '@typescript-eslint/no-type-alias': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
        '@typescript-eslint/no-unnecessary-boolean-literal-compare':
              'error', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
        '@typescript-eslint/no-unnecessary-condition': [
          'warn',
          {
            allowConstantLoopConditions: false,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
        '@typescript-eslint/no-unnecessary-qualifier': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
        '@typescript-eslint/no-unnecessary-type-arguments': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
        '@typescript-eslint/no-unnecessary-type-constraint': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
        '@typescript-eslint/no-unsafe-assignment': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
        '@typescript-eslint/no-unsafe-call': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
        '@typescript-eslint/no-unsafe-member-access': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
        '@typescript-eslint/no-unsafe-return': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
            caughtErrors: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        '@typescript-eslint/no-unused-vars-experimental': 'off', // https://github.com/typescript-eslint/typescript-eslint/tree/v2.19.0/packages/eslint-plugin
        '@typescript-eslint/no-use-before-define': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        '@typescript-eslint/no-useless-constructor': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        '@typescript-eslint/no-var-requires': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
        '@typescript-eslint/non-nullable-type-assertion-style': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
        '@typescript-eslint/prefer-as-const': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
        '@typescript-eslint/prefer-enum-initializers': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
        '@typescript-eslint/prefer-for-of': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
        '@typescript-eslint/prefer-function-type': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
        '@typescript-eslint/prefer-includes': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
        '@typescript-eslint/prefer-interface': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-interface.md
        '@typescript-eslint/prefer-literal-enum-member': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
        '@typescript-eslint/prefer-namespace-keyword': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
        '@typescript-eslint/prefer-nullish-coalescing': [
          'warn',
          {
            ignoreConditionalTests: true,
            ignoreMixedLogicalExpressions: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
        '@typescript-eslint/prefer-optional-chain': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
        '@typescript-eslint/prefer-readonly': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
        '@typescript-eslint/prefer-readonly-parameter-types': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
        '@typescript-eslint/prefer-regexp-exec': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
        '@typescript-eslint/prefer-string-starts-ends-with': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
        '@typescript-eslint/prefer-ts-expect-error': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
        '@typescript-eslint/promise-function-async': [
          'warn',
          {
            allowAny: true,
            allowedPromiseNames: [],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
        '@typescript-eslint/quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
        '@typescript-eslint/require-await': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
        '@typescript-eslint/return-await': ['warn', 'in-try-catch'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
        // default is always
        '@typescript-eslint/semi': ['warn'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
        '@typescript-eslint/space-before-function-paren': [
          'warn',
          {
            anonymous: 'always',
            named: 'never',
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
        '@typescript-eslint/switch-exhaustiveness-check': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
        // i don't really think we do this anyway so let's ban it outright
        '@typescript-eslint/triple-slash-reference': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
        '@typescript-eslint/type-annotation-spacing': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
        '@typescript-eslint/unbound-method': [
          'warn',
          {
            ignoreStatic: true,
          },
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
        '@typescript-eslint/unified-signatures': 'warn', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
        'brace-style': 'off', // covered by @typescript-eslint/brace-style
        'camelcase': 'off', // covered by @typescript-eslint/naming-convention
        'comma-spacing': 'off', // covered by @typescript-eslint/comma-spacing
        'func-call-spacing': 'off', // covered by @typescript-eslint/func-call-spacing
        'import/export': 'off', // TypeScript should catch it anyway
        'import/extensions': [
          'warn',
          {
            ts: 'never',
            tsx: 'never',
          },
        ], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/named': 'off', // TypeScript should catch it anyway
        'import/namespace': 'off', // TypeScript should catch it anyway
        'import/no-duplicates': 'off', // covered by @typescript-eslint/no-duplicate-imports
        'import/no-unresolved': 'off', // TypeScript should catch it anyway
        'indent': 'off',
        'lines-between-class-members': 'off', // covered by @typescript-eslint/lines-between-class-members
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
        'no-dupe-class-members': 'off', // covered by @typescript-eslint/no-dupe-class-members
        'no-empty-function': 'off', // covered by @typescript-eslint/no-empty-function
        'no-extra-parens': 'off',
        'no-loop-func': 'off', // covered by @typescript-eslint/no-loop-func
        'no-loss-of-precision': 'off', // covered by @typescript-eslint/no-loss-of-precision
        'no-redeclare': 'off', // covered by @typescript-eslint/no-redeclare
        'no-useless-constructor': 'off', // covered by @typescript-eslint/no-useless-constructor
        'quotes': 'off', // covered by @typescript-eslint/quotes
        'semi': 'off', // covered by @typescript-eslint/semi
        'space-before-function-paren': 'off', // covered by @typescript-eslint/space-before-function-paren
        'no-undef': 'off', // off because typescript handles it on its own
        'no-unused-vars': 'off', // covered by @typescript-eslint/no-unused-vars
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        // In d.ts files it might be necessary to merge an existing interface
        '@typescript-eslint/consistent-type-definitions': 'off',
        // When someone wants to extend the typings of a third-party module, it might
        // be necessary to import the module so that TypeScript finds the typings that should be extended.
        // This is a better alternative to the triple-slash directive
        'import/no-unassigned-import': 'off',
        'no-var': 'off',
      },
    },
    {
      files: ['*.test.ts'],
      rules: {
        // Type assertions are quite common in tests
        '@typescript-eslint/consistent-type-assertions': 'off',
        // We allow any to be used in tests, so returning it is ok
        '@typescript-eslint/no-unsafe-return': 'off',
        // chai uses these as assertions
        '@typescript-eslint/no-unused-expressions': 'off',
        // Passing functions around like this can be common with mocking
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
};
