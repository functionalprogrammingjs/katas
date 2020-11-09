
const {products, product} = require("./VendingMachine");

describe('When testing product function ', () => {

  it('given a product list , a row and a column will return a product', () => {
    expect(product(products)("A")(3)).toEqual({product:{name:"Doritos",price:5.75, position:["A",3]}});
  });

  it('given a product list , a row and a column out of  products scope , should return an error array', () => {
    expect(product(products)("J")(3)).toEqual({error: "error no existe el producto"});
  });



});
