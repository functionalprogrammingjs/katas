# katas
Katas de programación funcional

# Instalación

Este proyecto usa volta para fijar las versiones de node y de yarn

Para poder correr los test tenedremos que instalar las dependencias necesarias
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

La idea es crearnos abstracciones sobre tipos de datos algebraicos que luego podamos usar en nuestra máquina expendedora.
Lo que vamos a intentar es desacoplar nuestras funciones matemáticas de las estructuras para así aprovecharnos de la reutilización y convertir nuestra programación en elementos desacoplados y resilentes al cambio.
Vamos a intentar que el peso de la lógica de negocio recaiga sobre las funciones y que el flujo de la aplicación utilice los datos algebraicos en vez de acoplarlos a nuestros objetos.

Para la primera parte podemos ayudarnos de la librería funcional Ramda
Para la segunda parte introduciremos los tipos de datos algebraicos (ADT) y usaremos
la librería crocks

---
El flujo de nuestra aplicación final sería:
* tenemos una máquina expendedora
* [1] introducimos monedas en la máquina
* [2] Elegimos producto mediante unas coordenadas (fila, columna)
* [3] La máquina comprueba si con el crédito introducido y el producto seleccionado nos lo puede vender
* [4] Si esto es correcto me devolverá el producto , el cambio y restará elproducto a la cantidad. De lo contrario nos informará del error


* [01-credit.js | add ,reduce, getCredit](./01-funciones-puras-ejercicio-1/credit.js):  
  Implementar una función credit a la que se le puedan pasar cantidades y pueda sumarlas,
  Empzaremos con un array de monedas


* [02-product.js | findProduct, buyProduct](./01-funciones-puras-ejercicio-1/product.js): 
  Implementar una función que dado un array de objetos y unas coordenadas fila y columna (array con 2 datos), 
  devuelva una estructura con una propiedad "product" que contenga el objeto del array.
  
* Devolver




* [checkCredit.js](./01-funciones-puras-ejercicio-1/checkCredit.js): Implementar una función que reciba un producto y que devuelva una estructura que tenga una función
 a la que se le puede preguntar si la cantidad es mayor o igual 
* [change.js](./01-funciones-puras-ejercicio-1/change.js): Implementar una función que reciba un saldo  y que devuelva una estructura con un método subtract 
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

## [01-funciones-puras-ejercicio-2]

En esta segunda parte del ejercicio , una vez tenemos creadas las funciones anteriormente descritas
vamos a usarlas para poder componer nuestra máquina expendedora de forma que le pasemos un array de monedas
,unas coordenadas del producto que queremos y nos devolverá el producto seleccionado junto con  la vuelta.

La información de los parámetros de entrada y las firmas se pueden encontrar en el archivo:
`01-funciones-puras/VendingMachine.js`

```bash
 PASS  01-funciones-puras/VendingMachine.spec.js
  When buying a product
    ✓ should return an object with the product and change  (2 ms)
    ✓ should return an error if no product available
    ✓ should return an error message if not enough credit

```
