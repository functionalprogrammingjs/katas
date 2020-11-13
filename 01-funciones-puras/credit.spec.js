
const {credit, add, reduce} = require("./credit");

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

// =======================================================================================

describe("When testing functions to be use with credit", () => {

  describe("When testing `add` function", () => {
    it('should add 2 numbers', () => {
      expect(add(5,3)).toBe(8);
    });

  })

  describe("When testing `reduce` function", () => {
    it('should reduce and array of values into a given reducer', () => {
      expect(reduce((a,b) => a.concat(b))("")(["hola ", "mundo"])).toBe("hola mundo");
    });
  })

  describe("When testing `credit` function", () => {
    it('should add a given array of credits', () => {
      expect(credit([10,20,30])).toBe(60);
    });
  })



  })
