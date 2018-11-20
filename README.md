# eslint-config-typedigital

## configurations

### [`typedigital`](index.js)

#### Installation

Add an `.eslintrc.json` to the project's root directory with following content:

```js
{
    "extends": [
        // base ruleset
        "typedigital"
    ],
    "env": {
        // enable node globals
        "node": true
    },
    // ignore configs in other directories
    "root": true
}
```

### [`typedigital/react`](react.js)

Additional rules for [React](https://facebook.github.io/react/) development.

```js
{
    "extends": [
        "typedigital",
        "typedigital/react"
    ],
    "root": true
}
```

## Recommendations

### disabling rules

Sometimes, there is a legitimate use-case to disable a specific rule. You can disable a rule for the current line like this

```js
// eslint-disable-line rule-code
```

where `rule-code` is the code that is displayed along the error message.

In rare cases, it makes sense to disable a rule for the whole project. For instance, if you work with JSON data coming from a foregin API that uses underscore property names.

If you don't agree with a rule, please do not just disable the rule. It's better to create an issue here in order to discuss the pros and cons of a rule.

## License

Unlicense