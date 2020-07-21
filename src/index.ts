import { ConfigureHydrateText, HydrateText, VariableBorders } from './types';
import { escapeRegExp, isNil } from './utils';

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
  const { start, end }: VariableBorders = customVariableBorders
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
};

export const configureHydrateText: ConfigureHydrateText = variableBorders => (
  text,
  variables,
  customVariableBorders,
) => hydrateText(text, variables, customVariableBorders || variableBorders);
