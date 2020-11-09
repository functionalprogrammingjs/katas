# katas
Katas de programación funcional

# Instalación

Este proyecto usa volta para fijar las versiones de node y de yarn

Para poder correr los test tendremos que instalar las dependencias necesarias
```bash
yarn install
```

## Cómo correr los test

puedes ejecutar todos los tests con 

```bash
yarn test
```

De manera alternativa también se pueden correr los tests de forma individual:
```bash
jest 01-funciones-puras/credit.spec.js
```

O bien puedes ejecutar los tests con el modo watch :
```bash
yarn test:watch
```

# Kata 01 - Máquina expendedora

## [01-funciones-puras-ejercicio-1]
Vamos a crearnos una máquina expendedora.

Para esta primera parte de la kata tendremos que implementar
varias funciones:

* [credit.js](./01-funciones-puras/credit.js):  Implementar una función credit a la que se le puedan pasar cantidades y pueda sumarlas
* [product.js](./01-funciones-puras/product.js): Implementar una función que dado un array de objetos y unas coordenadas fila y columna , 
devuelva una estructura con una propiedad "product" que contenga el objeto del array.
* [checkCredit.js](./01-funciones-puras/checkCredit.js): Implementar una función que reciba un producto y que devuelva una estructura que tenga una función
 a la que se le puede preguntar si la cantidad es mayor o igual 
* [change.js](./01-funciones-puras/change.js): Implementar una función que reciba un saldo  y que devuelva una estructura con un método subtract 
que pueda restar un precio de un producto

La información de los parámetros de entrada y las firmas se pueden encontrar en los correspondientes archivos

Las funciones deberían de pasar los tests:
```bash

 PASS  01-funciones-puras/checkCredit.spec.js
  When testing a checkCredit function
    ✓ should accept a product and return a structure that have a function gte (3 ms)
    ✓ should return true if a given amount is greater than the price of the product
    ✓ should return true if a given amount is equal to the price of the product
    ✓ should return false if a given amount is less than the price of the product

 PASS  01-funciones-puras/change.spec.js
  When testing a returningChange function
    ✓ should return a structure with a subtract function  (3 ms)
    ✓ should subtract a value and return the value in the structure  (1 ms)

 PASS  01-funciones-puras/credit.spec.js
  When testing credit function 
    ✓ should return an object with a balance property (3 ms)
    ✓ should return an object with balance set equal to given amount
    ✓ should return an object with a add property
    ✓ should be posible to add credit and get an updated balance

 PASS  01-funciones-puras/product.spec.js
  When testing product function 
    ✓ given a product list , a row and a column will return a product (3 ms)
    ✓ given a product list , a row and a column out of  products scope , should return an error array

```
