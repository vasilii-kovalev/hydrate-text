# hydrate-text
Tiny library for dynamic text hydrating with variables

[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
![Downloads][downloads-badge]
[![GitHub Release][release-badge]][release]
[![Build Status][build-badge]][build]

[![Minified size][min-size-badge]][size]
[![Minified and gzipped size][minzip-size-badge]][size]
[![Dependencies Status][dependencies-badge]][dependencies]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies]

![Types][types-badge]
[![Code Coverage][coverage-badge]][coverage]
[![Maintainability][maintainability-badge]][maintainability]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities]

[version-badge]: https://badgen.net/npm/v/hydrate-text?style=flat
[package]: https://www.npmjs.com/package/hydrate-text

[downloads-badge]: https://badgen.net/npm/dt/hydrate-text?style=flat&color=blue

[license-badge]: https://badgen.net/github/license/vasilii-kovalev/hydrate-text?style=flat
[license]: https://github.com/vasilii-kovalev/hydrate-text/blob/master/LICENSE

[release-badge]: https://badgen.net/github/release/vasilii-kovalev/hydrate-text?style=flat
[release]: https://github.com/vasilii-kovalev/hydrate-text/releases

[build-badge]: https://badgen.net/github/status/vasilii-kovalev/hydrate-text?style=flat
[build]: https://github.com/vasilii-kovalev/hydrate-text/actions?query=workflow%3Abuild-test+branch%3Amaster

[min-size-badge]: https://badgen.net/bundlephobia/min/hydrate-text?style=flat
[minzip-size-badge]: https://badgen.net/bundlephobia/minzip/hydrate-text?style=flat
[size]: https://bundlephobia.com/result?p=hydrate-text

[dependencies-badge]: https://badgen.net/david/dep/vasilii-kovalev/hydrate-text?style=flat
[dependencies]: https://david-dm.org/vasilii-kovalev/hydrate-text
[dev-dependencies-badge]: https://badgen.net/david/dev/vasilii-kovalev/hydrate-text?style=flat
[dev-dependencies]: https://david-dm.org/vasilii-kovalev/hydrate-text?type=dev

[types-badge]: https://badgen.net/npm/types/hydrate-text?style=flat

[maintainability-badge]: https://badgen.net/codeclimate/maintainability/vasilii-kovalev/hydrate-text?style=flat
[maintainability]: https://codeclimate.com/github/vasilii-kovalev/hydrate-text/maintainability

[coverage-badge]: https://badgen.net/coveralls/c/github/vasilii-kovalev/hydrate-text?style=flat
[coverage]: https://coveralls.io/github/vasilii-kovalev/hydrate-text

[vulnerabilities-badge]: https://badgen.net/snyk/vasilii-kovalev/hydrate-text?style=flat
[vulnerabilities]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text

## Installation
```shell
npm install hydrate-text
```

## Features
* Light-weight
* Dependency-free
* Tree-shakable
* Works with variables as an object and an array
* Flexible variable syntax change
* Strongly typed with TypeScript

## Example
```typescript
import { hydrateText } from 'hydrate-text';

const text1 = 'Hello, {username}!';
const text2 = 'I have to {0} and {1}.';
const route = '/users/:userId';

// 'Hello, John Doe!'
console.log(hydrateText(text1, { username: 'John Doe' }));

// 'I have to run tests and make tea.'
console.log(hydrateText(text2, ['run tests', 'make tea']));

// '/users/1'
console.log(hydrateText(route, { userId: 1 }, { start: ':' }));
```

Initial variables syntax can be configured via `configureHydrateText`, that
returns `hydrateText` function as a result.
```typescript
import { configureHydrateText } from 'hydrate-text';

const route = '/users/:userId';
const routeWithDifferentBorders = '/users/(userId)';

const replaceRouteVariables = configureHydrateText({ start: ':' });

// '/users/1'
replaceRouteVariables(route, { userId: 1 });

// '/users/1'
replaceRouteVariables(
  routeWithDifferentBorders,
  { userId: 1 },
  {
    start: '(',
    end: ')',
  },
);
```
