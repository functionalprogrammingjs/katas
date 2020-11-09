// -------------
// 2.- PRODUCTO
// -------------

/**
 * @desc Implementar una función que dado un array de objetos y unas coordenadas fila y
 * columna , devuelva una estructura con una propiedad "product" que contenga el objeto del array.
 * Si las coordenadas son erróneas debería de devolver un objeto error
 * @example const selectedProduct = product(products)("A")(3) // {product: {name:"Doritos",price:5.75, position:["A",3]}}
 * @example const selectedProduct = product(products)("K")(1) // {error:"error no existe el producto"}
 * @Hindley-Milner  products :: [a] -> string -> number -> a
 * @ADT podríamos llevarlo a un functor option / maybe / either y generalizarlo de esa forma,
 * o incluso llevarlo a una monada si quisiéramos trabajar en multiples contextos
 */
const product = products => row => col =>{
  const result = products.filter(product =>
    product.position[0] === row && product.position[1] === col
  ) ;
  return result.length > 0 ? {product:result[0]} : {error:"error no existe el producto"};
}

module.exports = {product};
