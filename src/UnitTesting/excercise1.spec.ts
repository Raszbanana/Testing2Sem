const sum = (number1: number, number2: number): number => {
  return number1 + number2;
}

const subtract = (number1: number, number2: number): number=>  {
  return number1 - number2;
}

const multiply = (number1: number, number2: number): number=>  {
  return number1 * number2;
}

const divide = (number1: number, number2: number): number => { 
  if (number2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return number1 / number2;
}

describe('Calculator Functions', () => {
  test('sum adds two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('subtract subtracts two numbers correctly', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply multiplies two numbers correctly', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divide divides two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero throws an error', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
