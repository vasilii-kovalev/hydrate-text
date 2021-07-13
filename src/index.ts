import { DEFAULT_INTERPOLATION_OPTIONS } from "./constants";
import { ConfigureHydrateText, HydrateText } from "./types";
import { escapeRegExp, isUndefined } from "./utils";

const hydrateText: HydrateText = (text, variables, interpolationOptions) => {
  if (isUndefined(variables)) {
    return text;
  }

  const { prefix, suffix } = isUndefined(interpolationOptions)
    ? DEFAULT_INTERPOLATION_OPTIONS
    : interpolationOptions;

  const resultText = Object.entries(variables).reduce<string>(
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
    const interpolationOptions = isUndefined(
      interpolationOptionsFromInnerFunction,
    )
      ? interpolationOptionsFromConfigurer
      : interpolationOptionsFromInnerFunction;

    return hydrateText<
      typeof text,
      typeof interpolationOptions.prefix,
      typeof interpolationOptions.suffix
    >(text, variables, interpolationOptions);
  };

export { configureHydrateText, hydrateText };
export type {
  ConfigureHydrateText,
  DefaultPrefix,
  DefaultSuffix,
  HydrateText,
  InterpolationOptions,
  ValueType,
} from "./types";
