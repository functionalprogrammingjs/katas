const {checkCredit} = require('./checkCredit')

describe('When testing a checkCredit function', () => {
  let creditOrd;

  beforeEach(() => {
    const product = {name:"Cheetos",price:2.50, position:["A",1]};
    creditOrd = checkCredit(product);
  });


  it('should accept a product and return a structure that have a function gte', () => {
    expect(creditOrd).toHaveProperty('gte');
  });

  it('should return true if a given amount is greater than the price of the product', () => {
    expect(creditOrd.gte(3)).toBe(true);
  });

  it('should return true if a given amount is equal to the price of the product', () => {
    expect(creditOrd.gte(2.5)).toBe(true);
  });

  it('should return false if a given amount is less than the price of the product', () => {
    expect(creditOrd.gte(2)).toBe(false);
  });

});
