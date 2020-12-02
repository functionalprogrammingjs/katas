

const {getCredit} = require('./01-credit');
const {buyProduct,findProduct} = require('./02-product');
const {Products} = require('./Products');
const {pipe} = require('ramda');

const VendingMachine = credits =>  coord => {

    // const totalCredit = getCredit(credits);
    const product = findProduct(coord)

    return product;

};


VendingMachine([1,2,3])(["A",1]) // ?
