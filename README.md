# hydrate-text
Tiny library for dynamic text hydrating

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]

[build-badge]: https://github.com/vasilii-kovalev/hydrate-text/workflows/build-test/badge.svg?branch-master
[build]: https://github.com/vasilii-kovalev/hydrate-text/actions?query=workflow%3Abuild-test+branch%3Amaster

[coverage-badge]: https://img.shields.io/codecov/c/github/vasilii-kovalev/hydrate-text.svg
[coverage]: https://codecov.io/github/vasilii-kovalev/hydrate-text

[version-badge]: https://img.shields.io/npm/v/hydrate-text.svg
[package]: https://www.npmjs.com/package/hydrate-text

[license-badge]: https://img.shields.io/npm/l/hydrate-text.svg
[license]: https://github.com/vasilii-kovalev/hydrate-text/blob/master/LICENSE

## Example
```typescript
import { hydrateText } from 'hydrate-text';

const text1 = 'Hello, {username}!';
const text2 = 'I have to {0} and {1}.';

// 'Hello, John Doe!'
console.log(hydrateText(text1, { username: 'John Doe' }));

// 'I have to run tests and make tea.'
console.log(hydrateText(text2, ['run tests', 'make tea']));
```

## Features
* Dependency-free
* Light-weight (597 bytes gzipped)
* Works with variables as an object and an array
* Strongly typed with TypeScript

## Installation
```shell
npm install hydrate-text
```
