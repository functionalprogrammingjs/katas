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
El flujo de nuestra aplicación sería:
* tenemos una máquina expendedora
* [1] introducimos monedas en la máquina
* [2] Elegimos producto mediante unas coordenadas (fila, columna)
* [3] La máquina comprueba si con el crédito introducido y el producto seleccionado nos lo puede vender
* [4] Si esto es correcto me devolverá el producto , el cambio y restará el producto a la cantidad. De lo contrario nos informará del error

## Primera parte

* [01-credit.js | add ,reduce, getCredit](./01-funciones-puras-ejercicio-1/credit.js):  
  Implementar una función credit a la que se le puedan pasar cantidades y pueda sumarlas.


* [02-product.js | findProduct, buyProduct](./01-funciones-puras-ejercicio-1/product.js): 
  Implementar una función que dado un array de creditos y unas coordenadas fila y columna 
  devuelva un producto o un mensaje de error
