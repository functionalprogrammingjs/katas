const dummy = require('./dummy')

test('adds 1 + 2 to equal 3', () => {
  expect(dummy(1, 2)).toBe(3);
});
