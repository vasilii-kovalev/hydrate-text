# hydrate-text

A tiny library for dynamic text hydrating with variables.

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
[license-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/main/LICENSE
[release-badge]: https://flat.badgen.net/github/release/vasilii-kovalev/hydrate-text
[releases-link]: https://github.com/vasilii-kovalev/hydrate-text/releases
[build-badge]: https://flat.badgen.net/github/status/vasilii-kovalev/hydrate-text
[builds-link]: https://github.com/vasilii-kovalev/hydrate-text/actions?query=workflow%3Abuild-test+branch%3Amain
[min-size-badge]: https://flat.badgen.net/bundlephobia/min/hydrate-text@1.2.7
[minzip-size-badge]: https://flat.badgen.net/bundlephobia/minzip/hydrate-text@1.2.7
[size-link]: https://bundlephobia.com/result?p=hydrate-text@1.2.7
[dependencies-badge]: https://flat.badgen.net/david/dep/vasilii-kovalev/hydrate-text
[dependencies-link]: https://david-dm.org/vasilii-kovalev/hydrate-text
[dev-dependencies-badge]: https://flat.badgen.net/david/dev/vasilii-kovalev/hydrate-text
[dev-dependencies-link]: https://david-dm.org/vasilii-kovalev/hydrate-text?type=dev
[types-badge]: https://flat.badgen.net/npm/types/hydrate-text
[types-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/main/src/index.ts#L3-L24
[maintainability-badge]: https://flat.badgen.net/codeclimate/maintainability/vasilii-kovalev/hydrate-text
[maintainability-link]: https://codeclimate.com/github/vasilii-kovalev/hydrate-text/maintainability
[coverage-badge]: https://flat.badgen.net/coveralls/c/github/vasilii-kovalev/hydrate-text
[coverage-link]: https://coveralls.io/github/vasilii-kovalev/hydrate-text
[vulnerabilities-badge]: https://flat.badgen.net/snyk/vasilii-kovalev/hydrate-text
[vulnerabilities-link]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text
[jsdelivr-hits-per-month-badge]: https://data.jsdelivr.com/v1/package/npm/hydrate-text/badge
[jsdelivr-hits-per-month-link]: https://www.jsdelivr.com/package/npm/hydrate-text?version=1.2.7

## Features

- Light-weight
- Dependency-free
- Tree-shakable
- Flexible interpolation options change
- ES Module, CommonJS and UMD options are supported
- Strongly typed with TypeScript

## Installation and examples

### npm

```shell
npm install hydrate-text
```

### Yarn

```shell
yarn add hydrate-text
```

```typescript
// ES Modules syntax
import { hydrateText } from "hydrate-text";
// CommonJS syntax
const hydrateText = require("hydrate-text").hydrateText;

// 'Hello, John Doe!'
console.log(hydrateText("Hello, {username}!", { username: "John Doe" }));
```

### CDN

| CDN provider | Uncompressed                                          | Compressed                                        |
| ------------ | ----------------------------------------------------- | ------------------------------------------------- |
| jsDelivr     | [jsDelivr (uncompressed)][jsdelivr-uncompressed-link] | [jsDelivr (compressed)][jsdelivr-compressed-link] |
| UNPKG        | [UNPKG (uncompressed)][unpkg-uncompressed-link]       | [UNPKG (compressed)][unpkg-compressed-link]       |

[jsdelivr-uncompressed-link]: https://cdn.jsdelivr.net/npm/hydrate-text@1.2.7/dist/umd/index.js
[jsdelivr-compressed-link]: https://cdn.jsdelivr.net/npm/hydrate-text@1.2.7/dist/umd/index.min.js
[unpkg-uncompressed-link]: https://unpkg.com/hydrate-text@1.2.7/dist/umd/index.js
[unpkg-compressed-link]: https://unpkg.com/hydrate-text@1.2.7/dist/umd/index.min.js

```html
<script src="library-CDN-link-here"></script>
<script>
  const { hydrateText } = HydrateText;

  // 'Hello, John Doe!'
  console.log(hydrateText("Hello, {username}!", { username: "John Doe" }));
</script>
```

## More examples

```typescript
import { hydrateText } from "hydrate-text";

const route = "/users/:userId";

// '/users/1'
console.log(hydrateText(route, { userId: 1 }, { prefix: ":" }));
```

Interpolation options can be configured via `configureHydrateText` function,
that returns `hydrateText` function as a result.

```typescript
import { configureHydrateText } from "hydrate-text";

const route = "/users/:userId";
const routeWithCustomInterpolationOptions = "/users/(userId)";

const replaceRouteVariables = configureHydrateText({ prefix: ":" });

// '/users/1'
console.log(replaceRouteVariables(route, { userId: 1 }));

// '/users/1'
console.log(
  replaceRouteVariables(
    routeWithCustomInterpolationOptions,
    { userId: 1 },
    {
      prefix: "(",
      suffix: ")",
    },
  ),
);
```
