import {
  HydrateText,
  ValueTypes,
  Variables,
  configureHydrateText,
  hydrateText,
} from '..';

describe('hydrateText', () => {
  const textSimple = 'Simple text';
  const textWithVariables = 'Hello, {0} {user1} and {1} {user2}';
  const textWithNoise = 'Hello, {0} {{user1}} and {{1}} {user2}';
  const variablesArray: ValueTypes[] = ['mr.', 'miss', 2, true];
  const variablesObject: Variables = {
    0: 'mr.',
    1: 'miss',
    age: 2,
    alive: true,
    user1: 'John',
    user2: 'Sarah',
  };

  const mainPageRoute = '/';
  const route = '/some/route';
  const routeWithVariable = '/some/route/:variableName';
  const routeWithVariables = '/some/route/:variableName/:variableId';
  const oneVariable: Variables = { variableName: 'hello' };
  const twoVariables: Variables = {
    variableName: 'hello',
    variableId: 1,
  };
  const variablesWithUndefinedAndNull: Variables = {
    variableName: null,
    variableId: undefined,
  };

  describe('with default variable borders', () => {
    it(`should keep "simple text" as is
    if "variables" is not provided`, () => {
      expect(hydrateText(textSimple)).toBe(textSimple);
    });

    it('should keep "simple text" as is if "variables" is an array', () => {
      expect(hydrateText(textSimple, variablesArray)).toBe(textSimple);
    });

    it('should keep "simple text" as is if "variables" is an object', () => {
      expect(hydrateText(textSimple, variablesObject)).toBe(textSimple);
    });

    it(`should keep "textWithVariables" as is
    if "variables" is not provided`, () => {
      expect(hydrateText(textWithVariables)).toBe(textWithVariables);
    });

    it(`should replace correct variables in "textWithVariables"
    when "variables" is an array`, () => {
      const resultText = hydrateText(textWithVariables, variablesArray);

      expect(resultText).toBe('Hello, mr. {user1} and miss {user2}');
    });

    it(`should replace correct variables in "textWithVariables"
    when "variables" is an object`, () => {
      const resultText = hydrateText(textWithVariables, variablesObject);

      expect(resultText).toBe('Hello, mr. John and miss Sarah');
    });

    it(`should keep "textWithNoise" as is
    if "variables" is not provided`, () => {
      expect(hydrateText(textWithNoise)).toBe(textWithNoise);
    });

    it(`should replace correct variables in "textWithNoise"
    when "variables" is an array`, () => {
      const resultText = hydrateText(textWithNoise, variablesArray);

      expect(resultText).toBe('Hello, mr. {{user1}} and {miss} {user2}');
    });

    it(`should replace correct variables in "textWithNoise"
    when "variables" is an object`, () => {
      const resultText = hydrateText(textWithNoise, variablesObject);

      expect(resultText).toBe('Hello, mr. {John} and {miss} Sarah');
    });
  });

  describe('with custom variable borders', () => {
    const replaceRouteVariables: HydrateText = (text, variables) =>
      hydrateText(text, variables, { start: ':' });

    it('should keep "mainPageRoute" as is', () => {
      const resultText = replaceRouteVariables(mainPageRoute, oneVariable);

      expect(resultText).toBe(mainPageRoute);
    });

    it('should keep "route" as is', () => {
      const resultText = replaceRouteVariables(route, oneVariable);

      expect(resultText).toBe(route);
    });

    it('should replace correct variables in "routeWithVariable"', () => {
      const resultText = replaceRouteVariables(routeWithVariable, oneVariable);

      expect(resultText).toBe('/some/route/hello');
    });

    it('should replace correct variables in "routeWithVariables"', () => {
      const resultText = replaceRouteVariables(
        routeWithVariables,
        twoVariables,
      );

      expect(resultText).toBe('/some/route/hello/1');
    });

    it(`should keep "routeWithVariables" as is
    if variables are nullish values`, () => {
      const resultText = replaceRouteVariables(
        routeWithVariables,
        variablesWithUndefinedAndNull,
      );

      expect(resultText).toBe('/some/route/:variableName/:variableId');
    });
  });

  describe('configureHydrateText', () => {
    const replaceRouteVariables = configureHydrateText({ start: ':' });
    const routeWithVariableWithDifferentBorders = '/some/route/(variableName)';

    it(`should replace correct variables in "routeWithVariable"
    with borders set in replaceRouteVariables`, () => {
      const resultText = replaceRouteVariables(routeWithVariable, oneVariable);

      expect(resultText).toBe('/some/route/hello');
    });

    it(`should replace correct variables in "routeWithVariable"
    with other borders than set in replaceRouteVariables`, () => {
      const resultText = replaceRouteVariables(
        routeWithVariableWithDifferentBorders,
        oneVariable,
        {
          start: '(',
          end: ')',
        },
      );

      expect(resultText).toBe('/some/route/hello');
    });
  });
});
