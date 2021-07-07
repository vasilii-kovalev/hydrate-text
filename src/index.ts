import {
  DEFAULT_INTERPOLATION_OPTIONS,
  EMPTY_INTERPOLATION_OPTIONS,
} from "./constants";
import {
  ConfigureHydrateText,
  HydrateText,
  InterpolationOptions,
} from "./types";
import { escapeRegExp } from "./utils";

const hydrateText: HydrateText = (
  text,
  variables = {},
  interpolationOptions,
) => {
  const { prefix, suffix }: InterpolationOptions = interpolationOptions
    ? {
        ...EMPTY_INTERPOLATION_OPTIONS,
        ...interpolationOptions,
      }
    : DEFAULT_INTERPOLATION_OPTIONS;

  const resultText = Object.entries(variables).reduce(
    (resultText, [name, value]) => {
      const regExpSource = escapeRegExp(`${prefix}${name}${suffix}`);
      const regExp = new RegExp(regExpSource, "g");

      return resultText.replace(regExp, String(value));
    },
    text,
  );

  return resultText;
};

const configureHydrateText: ConfigureHydrateText =
  interpolationOptionsFromConfigurer =>
  (text, variables, interpolationOptionsFromInnerFunction) => {
    const interpolationOptions =
      interpolationOptionsFromInnerFunction ??
      interpolationOptionsFromConfigurer;

    return hydrateText(text, variables, interpolationOptions);
  };

export { configureHydrateText, hydrateText };
export type {
  ConfigureHydrateText,
  HydrateText,
  InterpolationOptions,
  ValueType,
  Variables,
} from "./types";
