# hydrate-text
Tiny library for dynamic text hydrating with variables

[![Version][version-badge]][package-link]
[![MIT License][license-badge]][license-link]
[![Downloads][downloads-badge]][downloads-link]
[![Depend packages][depend-badge]][depend-link]

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

[![jsDelivr hits/month][jsdelivr-hits-per-month-badge]][jsdelivr-hits-per-month-link]

[version-badge]: https://flat.badgen.net/npm/v/hydrate-text
[package-link]: https://www.npmjs.com/package/hydrate-text

[downloads-badge]: https://flat.badgen.net/npm/dt/hydrate-text?color=blue
[downloads-link]: https://npmcharts.com/compare/hydrate-text?interval=30

[depend-badge]: https://flat.badgen.net/npm/dependents/hydrate-text
[depend-link]: https://www.npmjs.com/browse/depended/hydrate-text

[license-badge]: https://flat.badgen.net/github/license/vasilii-kovalev/hydrate-text
[license-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/master/LICENSE

[release-badge]: https://flat.badgen.net/github/release/vasilii-kovalev/hydrate-text
[releases-link]: https://github.com/vasilii-kovalev/hydrate-text/releases

[build-badge]: https://flat.badgen.net/github/status/vasilii-kovalev/hydrate-text
[builds-link]: https://github.com/vasilii-kovalev/hydrate-text/actions?query=workflow%3Abuild-test+branch%3Amaster

[min-size-badge]: https://flat.badgen.net/bundlephobia/min/hydrate-text@1.2.5
[minzip-size-badge]: https://flat.badgen.net/bundlephobia/minzip/hydrate-text@1.2.5
[size-link]: https://bundlephobia.com/result?p=hydrate-text@1.2.5

[dependencies-badge]: https://flat.badgen.net/david/dep/vasilii-kovalev/hydrate-text
[dependencies-link]: https://david-dm.org/vasilii-kovalev/hydrate-text
[dev-dependencies-badge]: https://flat.badgen.net/david/dev/vasilii-kovalev/hydrate-text
[dev-dependencies-link]: https://david-dm.org/vasilii-kovalev/hydrate-text?type=dev

[types-badge]: https://flat.badgen.net/npm/types/hydrate-text
[types-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/master/src/index.ts#L3-L24

[maintainability-badge]: https://flat.badgen.net/codeclimate/maintainability/vasilii-kovalev/hydrate-text
[maintainability-link]: https://codeclimate.com/github/vasilii-kovalev/hydrate-text/maintainability

[coverage-badge]: https://flat.badgen.net/coveralls/c/github/vasilii-kovalev/hydrate-text
[coverage-link]: https://coveralls.io/github/vasilii-kovalev/hydrate-text

[vulnerabilities-badge]: https://flat.badgen.net/snyk/vasilii-kovalev/hydrate-text
[vulnerabilities-link]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text

[jsdelivr-hits-per-month-badge]: https://data.jsdelivr.com/v1/package/npm/hydrate-text/badge
[jsdelivr-hits-per-month-link]: https://www.jsdelivr.com/package/npm/hydrate-text?version=1.2.5

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

## Features
* Light-weight
* Dependency-free
* Tree-shakable
* Works with variables as an object and an array
* Flexible variable syntax change
* ES Module, CommonJS and UMD options are available
* Strongly typed with TypeScript

## Installation
### npm
```shell
npm install hydrate-text
```

### Yarn
```shell
yarn add hydrate-text
```

### CDN
<table>
  <thead>
    <tr>
      <th>Compression option</th>
      <th>Links</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=2>
        <img
          src="https://flat.badgen.net/badgesize/normal/https/unpkg.com/hydrate-text@1.2.5/dist/umd/index.js?label=Uncompressed"
          alt="Uncompressed package bundle size"
        >
      </td>
      <td>
        <a href="https://unpkg.com/hydrate-text@1.2.5/dist/umd/index.js">
          <img
            src="https://flat.badgen.net/badge/%20%20%20/UNPKG/green"
            alt="Link to uncompressed UMD package on UNPKG"
          >
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://cdn.jsdelivr.net/npm/hydrate-text@1.2.5/dist/umd/index.js">
          <img
            src="https://flat.badgen.net/badge/icon/jsdelivr?icon=jsdelivr&label&color=green"
            alt="Link to uncompressed UMD package on jsDelivr"
          />
        </a>
      </td>
    </tr>
    <tr>
      <td rowspan=2>
        <img
          src="https://flat.badgen.net/badgesize/normal/https/unpkg.com/hydrate-text@1.2.5/dist/umd/index.min.js?label=Minified"
          alt="Minified package bundle size"
        >
      </td>
      <td>
        <a href="https://unpkg.com/hydrate-text@1.2.5/dist/umd/index.min.js">
          <img
            src="https://flat.badgen.net/badge/%20%20%20/UNPKG/green"
            alt="Link to minified UMD package on UNPKG"
          >
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://cdn.jsdelivr.net/npm/hydrate-text@1.2.5/dist/umd/index.min.js">
          <img
            src="https://flat.badgen.net/badge/icon/jsdelivr?icon=jsdelivr&label&color=green"
            alt="Link to minified UMD package on jsDelivr"
          />
        </a>
      </td>
    </tr>
  </tbody>
</table>


```html
<script src="link-to-library.js"></script>
<script>
  const { hydrateText: ht } = HydrateText;

  // 'Hello, John Doe!'
  console.log(ht('Hello, {username}!', { username: 'John Doe' }));
</script>
```
