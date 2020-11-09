const {VendingMachine} = require('./VendingMachine')

describe('When buying a product', () => {

  it('should return an object with the product and change ', () => {
    const result = VendingMachine.buyProduct([10],["A",1]);
    expect(result).toEqual({change: 7.5, product: "Cheetos"})
  });

  it('should return an error if no product available', () => {
    const result = VendingMachine.buyProduct([10],["A",9]);
    expect(result).toEqual({change: 10, error: "error no existe el producto"})
  });

  it('should return an error message if not enough credit', () => {
    const result = VendingMachine.buyProduct([1, 0.5, 0.1],["A",1]);
    expect(result).toEqual({change: 1.6, error:"no tiene suficiente dinero para comprar el producto"})
  });

});
