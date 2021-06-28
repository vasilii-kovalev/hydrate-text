import {
  DEFAULT_INTERPOLATION_OPTIONS,
  EMPTY_INTERPOLATION_OPTIONS,
} from './constants';
import {
  ConfigureHydrateText,
  HydrateText,
  InterpolationOptions,
} from './types';
import { escapeRegExp, isNil } from './utils';

const hydrateText: HydrateText = (
  text,
  variables = {},
  customVariableBorders,
) => {
  const { prefix, suffix }: InterpolationOptions = customVariableBorders
    ? {
        ...EMPTY_INTERPOLATION_OPTIONS,
        ...customVariableBorders,
      }
    : DEFAULT_INTERPOLATION_OPTIONS;

  return Object.entries(variables).reduce((result, [key, value]) => {
    if (isNil(value)) {
      return result;
    }

    const regExpSource = escapeRegExp(`${prefix}${key}${suffix}`);
    const regExp = new RegExp(regExpSource, 'g');

    return result.replace(regExp, String(value));
  }, text);
};

const configureHydrateText: ConfigureHydrateText =
  variableBorders => (text, variables, customVariableBorders) =>
    hydrateText(text, variables, customVariableBorders || variableBorders);

export { configureHydrateText, hydrateText };
