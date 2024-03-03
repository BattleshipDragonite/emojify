import {randomElement, randomInteger} from './helpers'


describe('randomInteger', () => {
  interface TestCase {
    min: number;
    max: number;
    description: string;
  }
  const testCases: TestCase[] = [
    { min: 1, max: 1, description: 'min and max are the same' },
    { min: 0, max: 100, description: 'range 0 to 100' },
    { min: -100, max: 100, description: 'range including negative numbers' },
    { min: 100, max: 1000, description: 'large range' },
  ];
  testCases.forEach(({ min, max, description }) => {
    test(`should return a value within range for ${description}`, () => {
      const result = randomInteger(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(result).toBe(Math.floor(result));
    });
  });
});

describe('randomElement', () => {  
  it('returns an element from the array', () => {
    const array = ['a', 'b', 'c'];
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
    const element = randomElement(array);
    expect(array).toContain(element);
  });

  it('handles an empty array by throwing an error', () => {
    expect(() => {
      randomElement([]);
    }).toThrow("Array cannot be empty");
  });

  // Restore the original Math.random so it's not mocked for other tests
  afterEach(() => {
    jest.spyOn(Math, 'random').mockRestore();
  });
});