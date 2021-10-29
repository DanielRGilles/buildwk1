const exponentFunc = require('./pow');

describe('test exponent function', () => {
  it('returns the result of the base and exponent of two numbers', () => {
    const actual = exponentFunc(2, 4);
    expect(exponentFunc(actual)).toEqual(16);
  });
 
});
