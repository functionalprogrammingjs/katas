
const products = [
  {name:"Cheetos",price:2.50, position:["A",1]},
  {name:"Ritz",price:3, position:["A",2]},
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
 * @desc Implementar una función credit a la que se le puedan pasar cantidades y pueda sumarlas
 * @example const totalBalance = credit(50).add(10).add(20)
 * @Hindley-Milner  credit :: number -> a
 * @ADT semigroup (with an empty will be a monoid)
 */
const credit = balance => ({
  balance,
  add: amount =>  credit(balance + amount),
})


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

// --------------
// 5 .- EJERCICIO
// --------------

/**
 * @desc Implementar una máquina expendedora de forma que le pasemos un array de monedas
 * unas coordenadas del producto que queremos y nos devolverá el producto seleccionado
 * junto a la vuelta.
 *
 * En caso de que no tengamos saldo suficiente nos mostrará un mensaje. y nos devolverá
 * el dinero
 *
 * En cualquier otro caso la máquina debería devolver un mensaje de error y el dinero
 * (ej. no hay producto para  esa coordenada)
 *
 * @nota Por simplicidad entendemos que el array de productos lo conoce la máquina y que
 * no necesita acceder a ningún componente externo para recuperar la información
 *
 * @example buyProduct([0.10,0.25,1,2],["A",2]) // --> {product:'Ritz', change:'0.35' }
 */


VendingMachine = {
  products : [
    {name:"Cheetos",price:2.50, position:["A",1]},
    {name:"Ritz",price:3, position:["A",2]},
    {name:"Doritos",price:5.75, position:["A",3]},
    {name:"Ruffles",price:4.90, position:["B",1]},
    {name:"Bocabits",price:2, position:["B",2]},
    {name:"Coca-cola",price:1.50, position:["B",3]},
    {name:"Fanta",price:1.50, position:["C",1]},
    {name:"Sprite",price:3.0, position:["C",2]},
    {name:"Trina",price:2.50, position:["C",3]},
  ]
}

VendingMachine.buyProduct = (coins , coordinates) => {
  // insertar monedas
  const balance = coins.reduce((acc,cur) => acc.add(cur),credit(0)) // ?
  // seleccionar producto
  const selectedProduct = product(products)(coordinates[0])(coordinates[1]) // ?
  // comprobar si hay error
  if (selectedProduct.error) {
    return {...selectedProduct , change:balance.balance}; // ?
  }
  // ver si tengo crédito suficiente para comprar el producto
  const hasCredit = checkCredit(selectedProduct.product).gte(balance.balance) // ?
  if (!hasCredit) {
    return {
      error: 'no tiene suficiente dinero para comprar el producto',
      change: balance.balance
    }
  }
  // calcular el cambio
  const givenChange = change(balance.balance).subtract(selectedProduct.product.price) // ?
  // retornamos un objeto con el producto y el cambio
  return {
    product: selectedProduct.product.name,
    change:givenChange.credit
  }

}

VendingMachine.buyProduct([0.10,0.25,1,0.2],["A",7])  // ?


module.exports = {products, credit, product, checkCredit, change, VendingMachine}
