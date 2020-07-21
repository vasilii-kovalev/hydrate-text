/**
  * Used to match `RegExp`
  * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

const reHasRegExpChar = RegExp(reRegExpChar.source);

/**
  * Source: https://github.com/lodash/lodash/blob/master/escapeRegExp.js
  * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
  * "?", "(", ")", "[", "]", "{", "}", and "|" in `value`.
  * @param {string} [value=''] The string to escape.
  * @returns {string} Returns the escaped string.
*/
export const escapeRegExp = (value?: string): string => {
  const string = String(value ?? '');

  if (!string || !reHasRegExpChar.test(string)) {
    return string;
  }

  return string.replace(reRegExpChar, '\\$&');
};

/**
  * Source: https://github.com/lodash/lodash/blob/master/isNil.js
  * Checks if `value` is `null` or `undefined`.
  * @param {*} value The value to check.
  * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
*/
export const isNil = (value: any): boolean => value == null;
