/**
 * Vamos a hacer nuestras funciones genéricas, que no dependan de una estructura
 * rígida que no nos permita poder extender nuestras funciones o reutilizarlas
 *
 * Partiendo de la descripción previa sabemos que tenemos una función credit y que esa función
 * credit acepta un array de monedas y debe de poder sumar las monedas que introduzcamos.
 *
 * Viendo esta descripción se nos ocurre que deberíamos de tener un función de reducir
 * (reduce) que sume las monedas y que esa suma lo haga un reductor (reducer) de suma (add)
 *
 * NOTA:
 * Un reductor es una función que le pasamos 2 parámetros y me devuelve sólo uno
 * Una función reductora es una función que dado un reductor , un valor inicial y un
 * conjunto de datos nos devuelve un único valor
 *
 * @Ejercicio:
 * implementar:
 *  -. una función 'add' que sume dos números
 *  -. una función 'reduce' que use add como reductor. Nota: la función reduce estará curryficada
 *  -. una función getCredit que sepa utilizar la función reduce pasandole un conjunto de datos
 *
 *  ejemplos:
 *  add(5,3) // 8
 *  reduce(add)(0)([1,2,3]) // 6
 *  getCredit([2,1,2]) // 5
 * */

// [1] add :: number -> number -> number
const add = (a,b) => a + b;

// Para guardar los datos dentro de credit podríamos usar una función reductora que nos sumara el crédito que vamos añadiendo
// [2] reduce :: (a -> b) -> number -> c -> number
const reduce = reducer => initial => xs => xs.reduce(reducer,initial);

// [3] getCredit :: (a->b) -> number -> number
const getCredit = reduce(add)(0) // ?

// TODO: Extra, también podríamos utilizar las funciones de Ramda (add, reduce)

module.exports = {getCredit};
