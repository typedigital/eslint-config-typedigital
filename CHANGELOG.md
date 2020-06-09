# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/typedigital/eslint-config-typedigital/compare/v3.0.0...v4.0.0) (2020-06-09)


### ⚠ BREAKING CHANGES

* **react:** this could break CI pipelines.

### Features

* **react:** consistent multiline in react ([#31](https://github.com/typedigital/eslint-config-typedigital/issues/31)) ([c7ef72a](https://github.com/typedigital/eslint-config-typedigital/commit/c7ef72acfd51b472540c04ef0932f9fc1e7a1cde)), closes [#30](https://github.com/typedigital/eslint-config-typedigital/issues/30)


### Bug Fixes

* no-extra-parens clashes with arrow-parens ([#29](https://github.com/typedigital/eslint-config-typedigital/issues/29)) ([161ee4c](https://github.com/typedigital/eslint-config-typedigital/commit/161ee4cdb98180d47572a165d9d6e8e9010bf5a3)), closes [#27](https://github.com/typedigital/eslint-config-typedigital/issues/27)

<a name="3.0.0"></a>
# [3.0.0](https://github.com/typedigital/eslint-config-typedigital/compare/v2.4.0...v3.0.0) (2020-01-24)


### Features

* add issue templates ([#20](https://github.com/typedigital/eslint-config-typedigital/issues/20)) ([b76eae7](https://github.com/typedigital/eslint-config-typedigital/commit/b76eae7)), closes [#14](https://github.com/typedigital/eslint-config-typedigital/issues/14)
* add semi with warn ([#11](https://github.com/typedigital/eslint-config-typedigital/issues/11)) ([b14b177](https://github.com/typedigital/eslint-config-typedigital/commit/b14b177))


* refactor!: renamed package to @typedigital/eslint-config ([051d07b](https://github.com/typedigital/eslint-config-typedigital/commit/051d07b))


### BREAKING CHANGES

* renamed package



<a name="2.4.0"></a>
# [2.4.0](https://github.com/typedigital/eslint-config-typedigital/compare/v2.3.0...v2.4.0) (2019-11-24)


### Features

* **base:** add overrides to operator-linebreak for "?" operator ([#6](https://github.com/typedigital/eslint-config-typedigital/issues/6)) ([0aaa964](https://github.com/typedigital/eslint-config-typedigital/commit/0aaa964))
* **base:** added allowed numbers array to no-magic-numbers ([#7](https://github.com/typedigital/eslint-config-typedigital/issues/7)) ([dfe7230](https://github.com/typedigital/eslint-config-typedigital/commit/dfe7230))
* **base:** added proper webpack.config.js support ([#5](https://github.com/typedigital/eslint-config-typedigital/issues/5)) ([f32c4ec](https://github.com/typedigital/eslint-config-typedigital/commit/f32c4ec))
* **react:** adjusted react/jsx-curly-brace-presence ([#3](https://github.com/typedigital/eslint-config-typedigital/issues/3)) ([0d36d65](https://github.com/typedigital/eslint-config-typedigital/commit/0d36d65))
* **react:** turned react/jsx-filename-extension to warn ([#4](https://github.com/typedigital/eslint-config-typedigital/issues/4)) ([749c91b](https://github.com/typedigital/eslint-config-typedigital/commit/749c91b))
* **react-native:** added react-native/no-single-element-style-arrays ([#10](https://github.com/typedigital/eslint-config-typedigital/issues/10)) ([329a30d](https://github.com/typedigital/eslint-config-typedigital/commit/329a30d))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/typedigital/eslint-config-typedigital/compare/v2.2.0...v2.3.0) (2019-08-28)


### Features

* **react:** turned jsx-filename-extension off because of expo ([61446af](https://github.com/typedigital/eslint-config-typedigital/commit/61446af))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/typedigital/eslint-config-typedigital/compare/v2.1.0...v2.2.0) (2019-08-07)


### Bug Fixes

* issue with react/jsx-cury-brace-presence ([ba12e6c](https://github.com/typedigital/eslint-config-typedigital/commit/ba12e6c))


### Features

* changed import/no-unassigned-import and import/no-relaive-parent-impprts ([937593c](https://github.com/typedigital/eslint-config-typedigital/commit/937593c))



<a name="2.1.0"></a>
# 2.1.0 (2019-08-07)


### Features

* add new tags and new repository url for npm ([6b42900](https://github.com/typedigital/eslint-config-typedigital/commit/6b42900))



<a name="2.0.0"></a>
# [2.0.0](https://bitbucket.org/typedigital/eslint-config-typedigital/compare/v1.0.1...v2.0.0) (2019-08-07)


* Merged in TS-4-examine-the-airbnb-javascript-style (pull request #1) ([ef32c2c](https://bitbucket.org/typedigital/eslint-config-typedigital/commits/ef32c2c)), closes [#1](https://bitbucket.org/typedigital/eslint-config-typedigital/issue/1)


### Features

* add rules for React Native development ([4b0d4fe](https://bitbucket.org/typedigital/eslint-config-typedigital/commits/4b0d4fe))
* refactor whole react rule set ([8d985bc](https://bitbucket.org/typedigital/eslint-config-typedigital/commits/8d985bc))


### BREAKING CHANGES

* a lot of rules have changed this might lead to multiple errors and warnings in your code base.



# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

## Added

- typedigital/flow
- typedigital/react-native

## [1.0.1] - 2018-11-24

### Added

- CHANGELOG.md
- NPM version shield
- Code style "typedigital" shield

### Changed

- README.md and removed unnecessary links

## [1.0.0] - 2018-11-20

### Added

- typedigital rules
- typedigital/react rules
