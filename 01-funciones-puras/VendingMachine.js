
/*
const _insertCoin = () => "increment" // recursividad, closure

const selectProduct => col => row => product

const checkCredit => quantity => product => true;

const buyProduct =>  quantity => product => "product";

const returnChange =>  quantity => product => "change";
*/

const products = [
  {name:"Cheetos",price:2.50, position:["A",1]},
  {name:"Ritz",price:3, position:["A",2],},
  {name:"Doritos",price:5.75, position:["A",3]},
  {name:"Ruffles",price:4.90, position:["B",1]},
  {name:"Bocabits",price:2, position:["B",2]},
  {name:"Coca-cola",price:1.50, position:["B",3]},
  {name:"Fanta",price:1.50, position:["C",1]},
  {name:"Sprite",price:3.0, position:["C",2]},
  {name:"Trina",price:2.50, position:["C",3]},
]

// -----------
// 1.- CRÉDITO
// -----------

/**
 * @desc Implementar una estructura balance a la que se le puedan pasar cantidades y pueda
 * sumarlas
 * @param balance
 * @returns {object}
 * @example const totalBalance = credit(50).add(10).add(20)
 * @Hindley-Milner  credit :: number -> a
 * @ADT semigroup (with an empty will be a monoid
 */
const credit = balance => ({
  balance,
  add: (amount) =>  credit(balance + amount),
})
// credit.empty =  () => creditMonoid(0)

// -------------
// 2.- PRODUCTO
// -------------



module.exports = {credit}






