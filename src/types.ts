type ValueType = string | number | boolean;

interface Variables {
	[key: string]: ValueType;
}

interface InterpolationOptions {
	prefix?: string;
	suffix?: string;
}

interface HydrateText {
	(
		text: string,
		variables?: Variables,
		interpolationOptions?: InterpolationOptions,
	): string;
}

interface ConfigureHydrateText {
	(interpolationOptions?: InterpolationOptions): HydrateText;
}

export type {
	ConfigureHydrateText,
	HydrateText,
	InterpolationOptions,
	Variables,
};
