# @typedigital/eslint-config

![code style typedigital](https://img.shields.io/badge/code%20style-typedigital-f45a5f.svg)
![npm](https://img.shields.io/npm/v/@typedigital/eslint-config.svg)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-fe5196.svg)](https://conventionalcommits.org)

## Installation

```shell
npm i @typedigital/eslint-config --save-dev
```
## Configurations

### @typedigital - the base config


To use our eslint coding guidelines add an `.eslintrc` to the project's root directory with following content:

```js
{
    "extends": [
        // base rule set
        "@typedigital/eslint-config"
    ],
    "env": {
        "node": true
    },
    // ignore configs in other directories
    "root": true
}
```

This will tell eslint to use our basic configuration for JavaScript projects.

### @typedigital/eslint-config/react

Additional rules for [React](https://facebook.github.io/react/) development.
To add them to your project adjust your `.eslintrc` like this:

```js
{
    "extends": [
        "@typedigital/eslint-config",
        "@typedigital/eslint-config/react"
    ],
    "root": true
}
```
### @typedigital/eslint-config/react-native


Additional rules for [React Native](https://facebook.github.io/react-native/) development. Should be used with `typedigital/react` rules.
To add them to your project adjust your `.eslintrc` like this:

```js
{
    "extends": [
        "@typedigital/eslint-config",
        "@typedigital/eslint-config/react",
        "@typedigital/eslint-config/react-native"
    ],
    "root": true
}
```
### @typedigital/eslint-config/typescript

Due to the fact that [TypeScript](https://www.typescriptlang.org/) has gained so much popularity in the last few years and most of our new developments are based on TypeScript, we decided to extend our code guidelines.
To use our TypeScript configuration you just need to add the following to your `.eslintrc`:

```js
{
    "extends": [
        "@typedigital/eslint-config",
        "@typedigital/eslint-config/typescript",
    ],
    "root": true
}
```

> Note that you can use the React and React Native configuration with this configuration, too. Just add the other configurations after `"@typedigital/eslint-config/typescript"`.

## Recommendations

Sometimes, there is a legitimate use-case to disable a specific rule. You can disable a rule for the current line like this

```js
// eslint-disable-line rule-code
```

where `rule-code` is the code that is displayed along the error message.

You can also override specific rules in your `.eslintrc`, this will then override it for the whole project.
If you don't agree with a rule, please don't just disable the rule - create an issue and let us discuss the pros and cons.

## License

Unlicense
