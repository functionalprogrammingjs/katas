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
 * @example VendingMachine.buyProduct([0.10,0.25,1,2],["A",2]) // --> {product:'Ritz', change:'0.35' }
 */


const {products} = require('./products');
const {credit} = require('./credit');
const {product} = require('./product');
const {checkCredit} = require('./checkCredit');
const {change} = require('./change');

VendingMachine = {
  products
}

// VendingMachine.buyProduct = (coins , coordinates) => ...

