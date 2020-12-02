// --------------
// 5 .- EJERCICIO
// --------------

/**
 * @desc Con las funciones anteriormente creadas vamos a implementar una máquina
 * expendedora de forma que le pasemos un array de monedas unas coordenadas del producto
 * que queremos y nos devolverá el producto seleccionado junto a la vuelta.
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


const {products} = require('./products');
const {credit} = require('./credit');
const {product} = require('./product');
const {checkCredit} = require('./checkCredit');
const {change} = require('./change');

VendingMachine = {
  products
}

VendingMachine.buyProduct = (coins , coordinates) => {
  // insertar monedas
  const balance = coins.reduce((acc,cur) => acc.add(cur), credit(0)) // ?
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

module.exports = {VendingMachine}

