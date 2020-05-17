# hydrate-text
Tiny library for dynamic text hydrating

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
* Light-weight (597 bytes)
* Works with variables as an object and an array
* Strongly typed with TypeScript

## Installation
```shell
npm install hydrate-text
```
