// -------------
// 2.- PRODUCTO
// -------------

/**
 * @desc TODO
 * @example const selectedProduct = product(products,["A",3]) // {product: {name:"Doritos",price:5.75, position:["A",3]}}
 * @example const selectedProduct = product(products,["K",1]) // {error:"error no existe el producto"}
 * @Hindley-Milner  TOD
 * @ADT podríamos llevarlo a un functor option / maybe / either y generalizarlo de esa forma,
 * o incluso llevarlo a una monada si quisiéramos trabajar en multiples contextos
 *
 * * @Ejercicio:
 *  [1] Implementar una función findProduct a la que le pasamos:
 *   -. la posición del producto a buscar (predicado)
 *   -. la función comparadora
 *   -. el array de productos (este dato viene dado en Products.js)
 *
 *
 */

/**
 * [1] una función que busque nuestro producto pasándole una posición findProduct
 * @extra Podemos crearnos nuestra función find o usar la de ramda
 */

const {find} = require('ramda');
const {Products} = require('./Products')


const comparacion =  position => product =>
  product.position[0] === position[0] && product.position[1] === position[1]

// findProduct :: a -> (b → Boolean) → [c] → c | undefined
const findProduct = position =>
  find(comparacion(position), Products);

// todo: Alternativo hacer la función find
const _find = (fn, arr) => arr.find(fn)
const _findProduct = position => _find(comparacion(position), Products);


findProduct(['A',1]); // ?
_findProduct(['A',1]); // ?

/**
 * [2] Crear una función que compre el producto buyProduct
 */

const {getCredit} = require('./01-credit');

// buyPorduct :: [number] -> [string, number] -> a
const buyProduct = (credits, position) => {
  const credit = getCredit(credits);
  const product = findProduct(position);
  return (product && product.price <= credit) ? product : new Error('Ha sucedido un error')
}

buyProduct([1,0.5,1],["A",1]) // ?


module.exports = {findProduct};


