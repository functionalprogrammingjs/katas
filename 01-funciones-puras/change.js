
// ------------
// 4 .- RETORNO
// ------------

/**
 * @desc Implementar una función que reciba un saldo  y que devuelva una
 * estructura con un método subtract que pueda restar un precio de un producto
 *
 * @Hindley-Milner  change ::  number -> a
 * @ADT semigroup
 */

const change = credit => ({
  credit,
  subtract: price => change(credit - price)
});


module.exports = {change}
