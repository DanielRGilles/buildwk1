const exponentFunc = require('./pow');

describe('test exponent function', () => {
  it('returns the result of the base and exponent of two numbers', () => {
    const actual = exponentFunc(2, 4);
    expect(actual).toEqual(16);
  });
  it('returns the result of the base and exponent of two numbers', () => {
    const actual = exponentFunc(5, 2);
    expect(actual).toEqual(25);
  });
  it('returns the result of the base and exponent of two numbers where one of them is negative', () => {
    const actual = exponentFunc(2, -2);
    expect(actual).toEqual(.25);
  });
  it('returns the result of the base and exponent of two numbers where one of the numbers is 0', () => {
    const actual = exponentFunc(0, 1);
    expect(actual).toEqual(0);
  });
 
});
