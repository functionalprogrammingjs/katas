// -----------
// 1.- CRÉDITO
// -----------

/**
 * @desc Implementar una función credit a la que se le puedan pasar cantidades y pueda sumarlas
 * @example const totalBalance = credit(50).add(10).add(20)
 * @Hindley-Milner  credit :: number -> a
 */


// con clase
class __credit {
  constructor(val) {
    this.balance = val;
  }

  add (val) {
    this.balance += val;
    return this
  }

}

// con función
const _credit = balance => ({
  balance,
  add: amount =>  _credit(balance + amount),
})



/**
 * Vamos a hacer nuestras funciones genéricas, que no dependan de una estructura
 * rígida que no nos permita poder extender nuestras funciones o reutilizarlas
 * */


/**
 * @desc Implementar varias funciones:
 *  * una función `add` que me sume 2 valores (sin currificar)
 *  * una función reductora `reduce` que pasado un reductor, un valor inicial y un array me realice la reducción (currificada o con aplicación parcial)
 * @example const totalBalance = credit(50).add(10).add(20)
 * @Hindley-Milner  credit :: number -> a
 */






// FIXME : la función add podríamos sacarla fuera a una función independiente suma
// add :: number -> number -> number
const add = (a,b) => a + b;


// FIXME: para guardar los datos dentro de credit podríamos usar una función reductora
//  que nos sumara el crédito que vamos añadiendo

// reduce :: a -> number -> b -> number
const reduce = reducer => initial => xs => xs.reduce(reducer,initial);

const credit = reduce(add)(0) // ?

module.exports = {credit, add, reduce};
