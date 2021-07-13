import { DefaultPrefix, DefaultSuffix, InterpolationOptions } from "./types";

const DEFAULT_INTERPOLATION_OPTIONS: InterpolationOptions<
  DefaultPrefix,
  DefaultSuffix
> = {
  prefix: "{",
  suffix: "}",
};

export { DEFAULT_INTERPOLATION_OPTIONS };
