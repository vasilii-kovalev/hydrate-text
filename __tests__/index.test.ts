import { hydrateText } from '..';

describe('hydrateText', () => {
  const textSimple = 'Simple text';
  const textWithVariables = 'Hello, {0} {user1} and {1} {user2}';
  const textWithNoise = 'Hello, {0} {{user1}} and {{1}} {user2}';
  const variablesArray = ['mr.', 'miss', 2, true];
  const variablesObject = {
    0: 'mr.',
    1: 'miss',
    age: 2,
    alive: true,
    user1: 'John',
    user2: 'Sarah',
  };

  it('should keep "simple text" as is if "variables" is not provided', () => {
    expect(hydrateText(textSimple)).toBe(textSimple);
  });

  it('should keep "simple text" as is if "variables" is the array', () => {
    expect(hydrateText(textSimple, variablesArray)).toBe(textSimple);
  });

  it('should keep "simple text" as is if "variables" is the object', () => {
    expect(hydrateText(textSimple, variablesObject)).toBe(textSimple);
  });

  it('should keep "textWithVariables" as is if "variables" is not provided', () => {
    expect(hydrateText(textWithVariables)).toBe(textWithVariables);
  });

  it('should replace correct variables in "textWithVariables" when "variables" is the array', () => {
    const resultText = hydrateText(textWithVariables, variablesArray);

    expect(resultText).toBe('Hello, mr. {user1} and miss {user2}');
  });

  it('should replace correct variables in "textWithVariables" when "variables" is the object', () => {
    const resultText = hydrateText(textWithVariables, variablesObject);

    expect(resultText).toBe('Hello, mr. John and miss Sarah');
  });

  it('should keep "textWithNoise" as is if "variables" is not provided', () => {
    expect(hydrateText(textWithNoise)).toBe(textWithNoise);
  });

  it('should replace correct variables in "textWithNoise" when "variables" is the array', () => {
    const resultText = hydrateText(textWithNoise, variablesArray);

    expect(resultText).toBe('Hello, mr. {{user1}} and {miss} {user2}');
  });

  it('should replace correct variables in "textWithNoise" when "variables" is the object', () => {
    const resultText = hydrateText(textWithNoise, variablesObject);

    expect(resultText).toBe('Hello, mr. {John} and {miss} Sarah');
  });
});
