export type ValueTypes = string | number | boolean | undefined | null;

export interface Variables {
  [key: string]: ValueTypes;
}

export interface VariableBorders {
  start?: string;
  end?: string;
}

export interface HydrateText {
  (
    text: string,
    variables?: Variables | ValueTypes[],
    customVariableBorders?: VariableBorders,
  ): string;
}

export interface ConfigureHydrateText {
  (variableBorders?: VariableBorders): HydrateText;
}

/**
  * Source: https://github.com/lodash/lodash/blob/master/escapeRegExp.js
  * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
  * "?", "(", ")", "[", "]", "{", "}", and "|" in `value`.
  * @param {string} [value=''] The string to escape.
  * @returns {string} Returns the escaped string.
*/
export interface EscapeRegExp {
  (value?: string): string;
}

/**
  * Source: https://github.com/lodash/lodash/blob/master/isNil.js
  * Checks if `value` is `null` or `undefined`.
  * @param {*} value The value to check.
  * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
*/
export interface IsNil {
  (value: any): boolean;
}
