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
[min-size-badge]: https://flat.badgen.net/bundlephobia/min/hydrate-text
[minzip-size-badge]: https://flat.badgen.net/bundlephobia/minzip/hydrate-text
[size-link]: https://bundlephobia.com/package/hydrate-text
[types-badge]: https://flat.badgen.net/npm/types/hydrate-text
[types-link]: https://github.com/vasilii-kovalev/hydrate-text/blob/main/src/index.ts#L1-L75
[coverage-badge]: https://flat.badgen.net/coveralls/c/github/vasilii-kovalev/hydrate-text
[coverage-link]: https://coveralls.io/github/vasilii-kovalev/hydrate-text
[vulnerabilities-badge]: https://flat.badgen.net/snyk/vasilii-kovalev/hydrate-text
[vulnerabilities-link]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text

## Features

- **Light-weight**. Less than 1 KiB (actual size depends on imported functions).
- **Dependency-free**. Only bundled JavaScript files and TypeScript type declarations are included.
- **Tree-shakable**. Only imported code comes to your bundle.
- Strongly typed with **TypeScript**. All types are exported alongside with the core functions.
- **Flexible interpolation options change**. Change variables' markers in each function or use a special function to configure them once for further usage.

## Examples

```typescript
import { hydrateText } from "hydrate-text";

// "Hello, John!"
console.log(
  hydrateText("Hello, {username}!", {
    username: "John",
  }),
);

// "/users/42"
console.log(
  hydrateText(
    "/users/:id",
    { id: 42 },
    {
      prefix: ":",
      suffix: "",
    },
  ),
);
```

TypeScript checks that all the variables defined in the given string are provided.

```typescript
console.log(
  hydrateText(
    "Hello, {username}!",
    // No errors
    {
      username: "John",
    },
  ),
);

console.log(
  hydrateText(
    "Hello, {username}!",
    // Error: `username` is missing
    {},
  ),
);
```

Interpolation options can be configured via `configureHydrateText` function,
that returns `hydrateText` function as a result.

```typescript
import { configureHydrateText } from "hydrate-text";

const hydrateRoute = configureHydrateText({ prefix: ":" });

// "/users/42"
console.log(hydrateRoute("/users/:id", { id: 42 }));

// "/users/42"
console.log(
  hydrateRoute(
    "/users/(id)",
    { id: 42 },
    {
      prefix: "(",
      suffix: ")",
    },
  ),
);
```

Check out other [correct](./src/tests/index.types.ts) and [incorrect](./src/tests/index.errors.ts) usage examples.

## Installation

### npm

```shell
npm install hydrate-text
```

### Yarn

```shell
yarn add hydrate-text
```

## API (simplified)

```typescript
type ValueType = string | boolean | number | bigint;

interface InterpolationOptions {
  prefix: string;
  suffix: string;
}

function hydrateText(
  text: string,
  variables?: Record<string, ValueType>,
  interpolationOptions?: InterpolationOptions,
) {}

function configureHydrateText(
  interpolationOptions: InterpolationOptions,
) => typeof hydrateText;
```

Check out [the types section](https://github.com/vasilii-kovalev/hydrate-text/blob/next/src/index.ts#L1-L89) for more information.

## Background

[Why I wrote "hydrate-text" library](https://vasilii-kovalev.github.io/blog/posts/why-i-wrote-hydrate-text-library)

## License

[MIT](./LICENSE)
