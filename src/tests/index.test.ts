import { configureHydrateText, hydrateText } from "..";
import { HydrateText, Variables } from "../types";

describe("hydrateText", () => {
	describe("default interpolation options", () => {
		const textWithoutVariables = "Simple text";
		const variables: Variables = {
			0: "mr.",
			1: "miss",
			age: 2,
			alive: true,
			user1: "John",
			user2: "Sarah",
		};

		it(`should keep "textWithoutVariables" as is
    if "variables" is not provided`, () => {
			const resultText = hydrateText(textWithoutVariables);

			expect(resultText).toBe(textWithoutVariables);
		});

		it(`should keep "textWithoutVariables" as is
    if "variables" is provided`, () => {
			const resultText = hydrateText(textWithoutVariables, variables);

			expect(resultText).toBe(textWithoutVariables);
		});

		const textWithVariables = "Hello, {0} {user1} and {1} {user2}";

		it(`should keep "textWithVariables" as is
    if "variables" is not provided`, () => {
			const resultText = hydrateText(textWithVariables);

			expect(resultText).toBe(textWithVariables);
		});

		it(`should replace correct variables in "textWithVariables"
    if "variables" is provided`, () => {
			const resultText = hydrateText(textWithVariables, variables);

			expect(resultText).toBe("Hello, mr. John and miss Sarah");
		});

		const textWithNoise = "Hello, {0} {{user1}} and {{1}} {user2}";

		it(`should keep "textWithNoise" as is
    if "variables" is not provided`, () => {
			const resultText = hydrateText(textWithNoise);

			expect(resultText).toBe(textWithNoise);
		});

		it(`should replace correct variables in "textWithNoise"
    if "variables" is provided`, () => {
			const resultText = hydrateText(textWithNoise, variables);

			expect(resultText).toBe("Hello, mr. {John} and {miss} Sarah");
		});
	});

	describe("custom interpolation options", () => {
		const oneVariable: Variables = { variableName: "hello" };
		const replaceRouteVariables: HydrateText = (text, variables) =>
			hydrateText(text, variables, { prefix: ":" });

		it('should keep "routeHome" as is', () => {
			const routeHome = "/";

			const resultText = replaceRouteVariables(routeHome, oneVariable);

			expect(resultText).toBe(routeHome);
		});

		it('should keep "routeWithoutVariables" as is', () => {
			const routeWithoutVariables = "/some/route";

			const resultText = replaceRouteVariables(
				routeWithoutVariables,
				oneVariable,
			);

			expect(resultText).toBe(routeWithoutVariables);
		});

		it('should replace correct variables in "routeWithVariable"', () => {
			const routeWithVariable = "/some/route/:variableName";

			const resultText = replaceRouteVariables(routeWithVariable, oneVariable);

			expect(resultText).toBe("/some/route/hello");
		});

		const routeWithVariables = "/some/route/:variableName/:variableId";

		it('should replace correct variables in "routeWithVariables"', () => {
			const twoVariables: Variables = {
				variableName: "hello",
				variableId: 1,
			};

			const resultText = replaceRouteVariables(
				routeWithVariables,
				twoVariables,
			);

			expect(resultText).toBe("/some/route/hello/1");
		});

		it(`should keep "routeWithVariables" as is
    if variables are nullish values`, () => {
			// Check a fallback if types don't work, e.g. when using the CDN script.
			const variablesWithUndefinedAndNull: Variables = {
				variableId: undefined as unknown as any,
				variableName: null as any,
			};

			const resultText = replaceRouteVariables(
				routeWithVariables,
				variablesWithUndefinedAndNull,
			);

			expect(resultText).toBe("/some/route/:variableName/:variableId");
		});
	});
});

describe("configureHydrateText", () => {
	const oneVariable: Variables = { variableName: "hello" };
	const replaceRouteVariables = configureHydrateText({ prefix: ":" });

	it(`should replace correct variables in "routeWithVariable"
  with custom interpolation options set in configureHydrateText`, () => {
		const routeWithVariable = "/some/route/:variableName";

		const resultText = replaceRouteVariables(routeWithVariable, oneVariable);

		expect(resultText).toBe("/some/route/hello");
	});

	it(`should replace correct variables in "routeWithVariable"
  with interpolation options set in replaceRouteVariables`, () => {
		const routeWithVariable = "/some/route/(variableName)";

		const resultText = replaceRouteVariables(routeWithVariable, oneVariable, {
			prefix: "(",
			suffix: ")",
		});

		expect(resultText).toBe("/some/route/hello");
	});
});
