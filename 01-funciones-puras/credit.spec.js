
const {credit} = require("./vendingMachine");

describe('When testing credit function ', () => {

  it('should return an object with a balance property', () => {
    expect(credit(50)).toHaveProperty('balance');
  });

  it('should return an object with balance set equal to given amount', () => {
    expect(credit(50)).toHaveProperty("balance", 50);
  });


  it('should return an object with a add property', () => {
    expect(credit(50)).toHaveProperty('add');
  });

  it('should be posible to add credit and get an updated balance', () => {
    const totalBalance = credit(50).add(10).add(25)
    expect(totalBalance.balance).toBe(85);
  })

});
