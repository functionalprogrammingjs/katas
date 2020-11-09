const {change} = require('./change')

describe('When testing a returningChange function', () => {
  let returningChange;
  beforeEach(() => {
    returningChange = change(10)
  })

  it('should return a structure with a subtract function ', () => {
    expect(returningChange).toHaveProperty('subtract');
  });

  it('should subtract a value and return the value in the structure ', () => {
    expect(returningChange.subtract(4)).toHaveProperty('credit', 6);
  });

});

