# hydrate-text

A small, dependency-free and strongly typed template engine.

[![Version][version-badge]][package-link]
[![Downloads][downloads-badge]][downloads-link]
[![Depend packages][depend-badge]][depend-link]

[![Minified size][min-size-badge]][size-link]
[![Minified and gzipped size][minzip-size-badge]][size-link]

[![Types][types-badge]][types-link]
[![Code Coverage][coverage-badge]][coverage-link]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-link]

[version-badge]: https://flat.badgen.net/npm/v/hydrate-text
[package-link]: https://www.npmjs.com/package/hydrate-text
[downloads-badge]: https://flat.badgen.net/npm/dt/hydrate-text?color=blue
[downloads-link]: https://npmcharts.com/compare/hydrate-text?interval=30
[depend-badge]: https://flat.badgen.net/npm/dependents/hydrate-text
[depend-link]: https://www.npmjs.com/browse/depended/hydrate-text
[min-size-badge]: https://flat.badgen.net/bundlephobia/min/hydrate-text@2.0.0
[minzip-size-badge]: https://flat.badgen.net/bundlephobia/minzip/hydrate-text@2.0.0
[size-link]: https://bundlephobia.com/result?p=hydrate-text@2.0.0
[types-badge]: https://flat.badgen.net/npm/types/hydrate-text
[types-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/main/src/index.ts#L3-L24
[coverage-badge]: https://flat.badgen.net/coveralls/c/github/vasilii-kovalev/hydrate-text
[coverage-link]: https://coveralls.io/github/vasilii-kovalev/hydrate-text
[vulnerabilities-badge]: https://flat.badgen.net/snyk/vasilii-kovalev/hydrate-text
[vulnerabilities-link]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text

## Features

- **Light-weight**. less then 1 KiB (actual size depends on imported functions).
- **Dependency-free**. Only development dependencies are installed.
- **Tree-shakable**. Only imported code comes to your bundle.
- **ES Modules** and **CommonJS** syntax are supported.
- Strongly typed with **TypeScript**.
- **Flexible interpolation options change**. Change variables' markers in each function or use a special function to configure them once for further usage.

## Examples

```typescript
// ES Modules syntax
import { hydrateText } from "hydrate-text";
// CommonJS syntax
const hydrateText = require("hydrate-text").hydrateText;

// 'Hello, John Doe!'
console.log(hydrateText("Hello, {username}!", { username: "John Doe" }));

// '/users/1'
console.log(hydrateText("/users/:userId", { userId: 1 }, { prefix: ":" }));
```

Interpolation options can be configured via `configureHydrateText` function,
that returns `hydrateText` function as a result.

```typescript
import { configureHydrateText } from "hydrate-text";

const route = "/users/:userId";
const routeWithCustomInterpolationOptions = "/users/(userId)";

const hydrateRoute = configureHydrateText({ prefix: ":" });

// '/users/2'
console.log(hydrateRoute(route, { userId: 2 }));

// '/users/3'
console.log(
  hydrateRoute(
    routeWithCustomInterpolationOptions,
    { userId: 3 },
    {
      prefix: "(",
      suffix: ")",
    },
  ),
);
```

## Installation

### npm

```shell
npm install hydrate-text
```

### Yarn

```shell
yarn add hydrate-text
```

## API

```typescript
type ValueType = string | number | boolean;

type Variables = Record<string, ValueType>;

interface InterpolationOptions {
  prefix?: string;
  suffix?: string;
}

function hydrateText(
  text: string,
  variables?: Variables,
  interpolationOptions?: InterpolationOptions,
) {}

function configureHydrateText(
  interpolationOptions?: InterpolationOptions,
) => typeof hydrateText;
```

## License

[MIT](./LICENSE)
