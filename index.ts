import { escapeRegExp, isNil } from './utils';

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

export const defaultVariableBorders: VariableBorders = {
  start: '{',
  end: '}',
};

export const emptyVariableBorders: VariableBorders = {
  start: '',
  end: '',
};

export const hydrateText: HydrateText = (
  text,
  variables = {},
  customVariableBorders,
) => {
  const { start, end } = customVariableBorders
    ? {
      ...emptyVariableBorders,
      ...customVariableBorders,
    }
    : defaultVariableBorders;

  return Object.entries(variables).reduce(
    (result, [key, value]) => {
      if (isNil(value)) {
        return result;
      }

      const regExpSource = escapeRegExp(`${start}${key}${end}`);
      const regExp = new RegExp(regExpSource, 'g');
  
      return result.replace(regExp, String(value));
    },
    text,
  );
}
