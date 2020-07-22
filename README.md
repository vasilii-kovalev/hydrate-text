# hydrate-text
Tiny library for dynamic text hydrating with variables

[![Version][version-badge]][package-link]
[![MIT License][license-badge]][license-link]
[![Downloads][downloads-badge]][downloads-link]
[![GitHub Release][release-badge]][releases-link]
[![Build Status][build-badge]][builds-link]

[![Minified size][min-size-badge]][size-link]
[![Minified and gzipped size][minzip-size-badge]][size-link]
[![Dependencies Status][dependencies-badge]][dependencies-link]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies-link]

[![Types][types-badge]][types-link]
[![Code Coverage][coverage-badge]][coverage-link]
[![Maintainability][maintainability-badge]][maintainability-link]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-link]

[version-badge]: https://badgen.net/npm/v/hydrate-text?style=flat
[package-link]: https://www.npmjs.com/package/hydrate-text

[downloads-badge]: https://badgen.net/npm/dt/hydrate-text?style=flat&color=blue
[downloads-link]: https://www.npmtrends.com/hydrate-text

[license-badge]: https://badgen.net/github/license/vasilii-kovalev/hydrate-text?style=flat
[license-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/master/LICENSE

[release-badge]: https://badgen.net/github/release/vasilii-kovalev/hydrate-text?style=flat
[releases-link]: https://github.com/vasilii-kovalev/hydrate-text/releases

[build-badge]: https://badgen.net/github/status/vasilii-kovalev/hydrate-text?style=flat
[builds-link]: https://github.com/vasilii-kovalev/hydrate-text/actions?query=workflow%3Abuild-test+branch%3Amaster

[min-size-badge]: https://badgen.net/bundlephobia/min/hydrate-text?style=flat
[minzip-size-badge]: https://badgen.net/bundlephobia/minzip/hydrate-text?style=flat
[size-link]: https://bundlephobia.com/result?p=hydrate-text

[dependencies-badge]: https://badgen.net/david/dep/vasilii-kovalev/hydrate-text?style=flat
[dependencies-link]: https://david-dm.org/vasilii-kovalev/hydrate-text
[dev-dependencies-badge]: https://badgen.net/david/dev/vasilii-kovalev/hydrate-text?style=flat
[dev-dependencies-link]: https://david-dm.org/vasilii-kovalev/hydrate-text?type=dev

[types-badge]: https://badgen.net/npm/types/hydrate-text?style=flat
[types-link]: https://unpkg.com/hydrate-text/lib/index.d.ts

[maintainability-badge]: https://badgen.net/codeclimate/maintainability/vasilii-kovalev/hydrate-text?style=flat
[maintainability-link]: https://codeclimate.com/github/vasilii-kovalev/hydrate-text/maintainability

[coverage-badge]: https://badgen.net/coveralls/c/github/vasilii-kovalev/hydrate-text?style=flat
[coverage-link]: https://coveralls.io/github/vasilii-kovalev/hydrate-text

[vulnerabilities-badge]: https://badgen.net/snyk/vasilii-kovalev/hydrate-text?style=flat
[vulnerabilities-link]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text

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
