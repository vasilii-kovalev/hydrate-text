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
});
