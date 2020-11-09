const {returningChange} = require('./vendingMachine')

describe('When testing a returningChange function', () => {
  let change;
  beforeEach(() => {
    change = returningChange(10)
  })

  it('should return a structure with a subtract function ', () => {
    expect(change).toHaveProperty('subtract');
  });

  it('should subtract a value and return the value in the structure ', () => {
    expect(change.subtract(4)).toHaveProperty('credit', 6);
  });

});
