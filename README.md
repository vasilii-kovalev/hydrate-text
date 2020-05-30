# hydrate-text
Tiny library for dynamic text hydrating

[![Version][version-badge]][package]
[![MIT License][license-badge]][license]
[![GitHub Release][releases-badge]][releases]

[![Minified size][min-size-badge]][size]
[![Minified and gzipped size][minzip-size-badge]][size]
[![Dependecy Status][dependencies-badge]][dependencies]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies]

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities]

[version-badge]: https://img.shields.io/npm/v/hydrate-text.svg
[package]: https://www.npmjs.com/package/hydrate-text

[releases-badge]: https://img.shields.io/github/v/release/vasilii-kovalev/hydrate-text.svg
[releases]: https://github.com/vasilii-kovalev/hydrate-text/releases

[license-badge]: https://img.shields.io/npm/l/hydrate-text.svg
[license]: https://github.com/vasilii-kovalev/hydrate-text/blob/master/LICENSE

[min-size-badge]: https://badgen.net/bundlephobia/min/hydrate-text
[minzip-size-badge]: https://badgen.net/bundlephobia/minzip/hydrate-text
[size]: https://bundlephobia.com/result?p=hydrate-text

[dependencies-badge]: https://david-dm.org/vasilii-kovalev/hydrate-text.svg
[dependencies]: https://david-dm.org/vasilii-kovalev/hydrate-text
[dev-dependencies-badge]: https://david-dm.org/vasilii-kovalev/hydrate-text/dev-status.svg
[dev-dependencies]: https://david-dm.org/vasilii-kovalev/hydrate-text?type=dev

[build-badge]: https://github.com/vasilii-kovalev/hydrate-text/workflows/build-test/badge.svg?branch=master
[build]: https://github.com/vasilii-kovalev/hydrate-text/actions?query=workflow%3Abuild-test+branch%3Amaster

[coverage-badge]: https://coveralls.io/repos/github/vasilii-kovalev/hydrate-text/badge.svg?branch=master
[coverage]: https://coveralls.io/github/vasilii-kovalev/hydrate-text?branch=master

[vulnerabilities-badge]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text/badge.svg?targetFile=package.json
[vulnerabilities]: https://snyk.io/test/github/vasilii-kovalev/hydrate-text?targetFile=package.json

## Installation
```shell
npm install hydrate-text
```

## Features
* Dependency-free
* Light-weight
* Works with variables as an object and an array
* Strongly typed with TypeScript

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
