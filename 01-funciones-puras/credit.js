// -----------
// 1.- CRÉDITO
// -----------

/**
 * @desc Implementar una función credit a la que se le puedan pasar cantidades y pueda sumarlas
 * @example const totalBalance = credit(50).add(10).add(20)
 * @Hindley-Milner  credit :: number -> a
 * @ADT semigroup (with an empty will be a monoid)
 */
const _credit = balance => ({
  balance,
  add: amount =>  credit(balance + amount),
})



/**
 * Vamos a hacer nuestras funciones genéricas, que no dependan de una estructura
 * rígida que no nos permita poder extender nuestras funciones o reutilizarlas
 * */

// FIXME : la función add podríamos sacarla fuera a una función independiente suma
const add = a => b => a + b;



module.exports = {credit};
