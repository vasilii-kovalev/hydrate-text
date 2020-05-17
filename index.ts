type ValueTypes = string | number | boolean;

interface Variables {
  [key: string]: ValueTypes;
}

interface HydrateText {
  (text: string, variables?: Variables | ValueTypes[]): string;
}

export const hydrateText: HydrateText = (
  text,
  variables = {},
) => Object.entries(variables).reduce(
  (result, [key, value]) => {
    const regexp = new RegExp(`\\{${key}\\}`, 'g');

    return result.replace(regexp, String(value));
  },
  text,
);
