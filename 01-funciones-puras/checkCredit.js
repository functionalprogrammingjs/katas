// ---------------
// 3.- COMPARACIÓN
// ---------------

/**
 * @desc Implementar una función que reciba un producto y que devuelva una estructura
 * que tenga una función a la que se le puede preguntar si la cantidad es mayor o igual
 * que el precio del producto
 * @Hindley-Milner  balance ::  a -> b
 * @ADT (setoide) -> ord
 */

const checkCredit = product =>  ({
  product,
  gte: amount => amount >= product.price
});

module.exports = {checkCredit}
