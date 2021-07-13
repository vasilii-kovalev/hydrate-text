/*
  Used to match `RegExp`.
  Syntax characters: http://ecma-international.org/ecma-262/7.0/#sec-patterns.
*/
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

const reHasRegExpChar = RegExp(reRegExpChar.source);

/*
  Source: https://github.com/lodash/lodash/blob/master/escapeRegExp.js

  Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+", "?",
  "(", ")", "[", "]", "{", "}", and "|" in `value`.
*/
const escapeRegExp = (value?: string): string => {
  const string = String(value ?? "");

  if (!string || !reHasRegExpChar.test(string)) {
    return string;
  }

  return string.replace(reRegExpChar, "\\$&");
};

/*
  Source: https://github.com/lodash/lodash/blob/master/isUndefined.js

  Checks if `value` is `undefined`.
*/
const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};

export { escapeRegExp, isUndefined };
