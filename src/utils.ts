import { EscapeRegExp, IsNil } from './types';

/**
  * Used to match `RegExp`
  * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
*/
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

const reHasRegExpChar = RegExp(reRegExpChar.source);

export const escapeRegExp: EscapeRegExp = value => {
  const string = String(value ?? '');

  if (!string || !reHasRegExpChar.test(string)) {
    return string;
  }

  return string.replace(reRegExpChar, '\\$&');
};

export const isNil: IsNil = value => value == null;
