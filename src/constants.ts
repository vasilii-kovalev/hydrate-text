import { InterpolationOptions } from "./types";

const DEFAULT_INTERPOLATION_OPTIONS: InterpolationOptions = {
  prefix: "{",
  suffix: "}",
};

const EMPTY_INTERPOLATION_OPTIONS: InterpolationOptions = {
  prefix: "",
  suffix: "",
};

export { DEFAULT_INTERPOLATION_OPTIONS, EMPTY_INTERPOLATION_OPTIONS };
