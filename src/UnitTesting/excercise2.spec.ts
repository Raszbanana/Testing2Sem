const romanToDecimal = (roman: string): number => {
  const values: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let result = 0;
  let prevValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const current = values[roman[i]];

    if (current >= prevValue) {
      result += current;
    } else {
      result -= current;
    }

    prevValue = current;
  }

  return result;
}

describe('Roman to Decimal Conversion', () => {
  test('converts single numeral', () => {
    expect(romanToDecimal('I')).toBe(1);
    expect(romanToDecimal('V')).toBe(5);
    expect(romanToDecimal('X')).toBe(10);
    expect(romanToDecimal('L')).toBe(50);
    expect(romanToDecimal('C')).toBe(100);
    expect(romanToDecimal('D')).toBe(500);
    expect(romanToDecimal('M')).toBe(1000);
  });

  test('converts larger numerals', () => {
    expect(romanToDecimal('IV')).toBe(4);
    expect(romanToDecimal('IX')).toBe(9);
    expect(romanToDecimal('XL')).toBe(40);
    expect(romanToDecimal('XC')).toBe(90);
    expect(romanToDecimal('CD')).toBe(400);
    expect(romanToDecimal('CM')).toBe(900);
  });

  test('converts complex numerals', () => {
    expect(romanToDecimal('MCMLIV')).toBe(1954);
    expect(romanToDecimal('MCMXC')).toBe(1990);
    expect(romanToDecimal('MMXIV')).toBe(2014);
    expect(romanToDecimal('MCMXCIV')).toBe(1994);
  });
});
