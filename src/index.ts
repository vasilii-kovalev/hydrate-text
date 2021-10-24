/* === Types === */
type ValueType = string | boolean | number | bigint;

type GetVariablesHelper<
	Text extends string,
	Prefix extends string,
	Suffix extends string,
	Accumulator,
> = string extends Text
	? string
	: Prefix extends ""
	? Suffix extends ""
		? // Prefix === "", Suffix === ""
		  Text extends `${infer Letter}${infer Rest}`
			? GetVariablesHelper<Rest, Prefix, Suffix, Letter | Accumulator>
			: Accumulator
		: // Prefix === "", Suffix !== ""
		Text extends `${infer Variable}${Suffix}${infer Rest}`
		? GetVariablesHelper<Rest, Prefix, Suffix, Variable | Accumulator>
		: Accumulator
	: Suffix extends ""
	? // Prefix !== "", Suffix === ""
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  Text extends `${infer _Start}${Prefix}${infer Variable}`
		? Variable extends `${infer _Variable}${Prefix}${infer Rest}`
			? GetVariablesHelper<
					`${Prefix}${Rest}`,
					Prefix,
					Suffix,
					_Variable | Accumulator
			  >
			: Variable | Accumulator
		: Accumulator
	: // Prefix !== "", Suffix !== ""
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Text extends `${infer _Start}${Prefix}${infer Variable}${Suffix}${infer Rest}`
	? Variable extends `${infer _Start}${Prefix}${infer _Variable}`
		? GetVariablesHelper<
				`${_Start}${Prefix}${_Variable}${Suffix}${Rest}`,
				Prefix,
				Suffix,
				Accumulator
		  >
		: GetVariablesHelper<Rest, Prefix, Suffix, Variable | Accumulator>
	: Accumulator;

type GetVariables<
	Text extends string,
	Prefix extends string,
	Suffix extends string,
	// The helper's usage is inspired by: https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#tailrec-conditional
> = GetVariablesHelper<Text, Prefix, Suffix, never>;

interface InterpolationOptions<Prefix extends string, Suffix extends string> {
	prefix: Prefix;
	suffix: Suffix;
}

type DefaultPrefix = "{";

type DefaultSuffix = "}";

interface HydrateText {
	<
		Text extends string,
		Prefix extends string = DefaultPrefix,
		Suffix extends string = DefaultSuffix,
	>(
		text: Text,
		variables?: Record<GetVariables<Text, Prefix, Suffix>, ValueType>,
		interpolationOptions?: InterpolationOptions<Prefix, Suffix>,
	): string;
}

interface ConfigureHydrateText {
	<
		_Prefix extends string = DefaultPrefix,
		_Suffix extends string = DefaultSuffix,
	>(
		interpolationOptions: InterpolationOptions<_Prefix, _Suffix>,
	): <
		Text extends string,
		Prefix extends string = _Prefix,
		Suffix extends string = _Suffix,
	>(
		text: Text,
		variables?: Record<GetVariables<Text, Prefix, Suffix>, ValueType>,
		interpolationOptions?: InterpolationOptions<Prefix, Suffix>,
	) => string;
}

/* === Constants === */
const DEFAULT_INTERPOLATION_OPTIONS: InterpolationOptions<
	DefaultPrefix,
	DefaultSuffix
> = {
	prefix: "{",
	suffix: "}",
};

/* === Utility functions === */
/*
	Used to match `RegExp`.
	Syntax characters: http://ecma-international.org/ecma-262/7.0/#sec-patterns.
*/
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

const reHasRegExpChar = RegExp(reRegExpChar.source);

/*
	Source: https://github.com/lodash/lodash/blob/master/escapeRegExp.js

	Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+", "?",
	"(", ")", "[", "]", "{", "}", and "|" in `value`.
*/
const escapeRegExp = (value: string): string => {
	if (!value || !reHasRegExpChar.test(value)) {
		return value;
	}

	return value.replace(reRegExpChar, "\\$&");
};

/*
	Source: https://github.com/lodash/lodash/blob/master/isUndefined.js

	Checks if `value` is `undefined`.
*/
const isUndefined = (value: unknown): value is undefined => {
	return value === undefined;
};

/* === Main functions === */
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
	(interpolationOptionsFromConfigurer) =>
	(text, variables, interpolationOptionsFromInnerFunction) => {
		const interpolationOptions = isUndefined(
			interpolationOptionsFromInnerFunction,
		)
			? interpolationOptionsFromConfigurer
			: interpolationOptionsFromInnerFunction;

		return hydrateText(
			text,
			variables,
			/*
				`interpolationOptions` inherits `prefix` and `suffix` types from
				`interpolationOptionsFromConfigurer`, so it is not necessary to define
				the union.
			*/
			interpolationOptions as typeof interpolationOptionsFromInnerFunction,
		);
	};

export { configureHydrateText, hydrateText };
export type {
	ConfigureHydrateText,
	DefaultPrefix,
	DefaultSuffix,
	HydrateText,
	InterpolationOptions,
	ValueType,
};
