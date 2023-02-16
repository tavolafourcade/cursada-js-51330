// FUNCIONES DE ORDEN SUPERIOR

// EJEMPLO 1
function ejecutarFuncion(func) {
  return func()
}

function miFuncion() {
  return 'Hola, soy una funcion'
}

// console.log(ejecutarFuncion(miFuncion))

// EJEMPLO 2
function aplicarOperacion(operacion, num1, num2){
  return operacion(num1, num2)
}

function sumar(a,b){
  return a + b
}

function restar(a,b){
  return a - b
}

function multiplicar(a,b){
  return a * b
}

// console.log(aplicarOperacion(sumar, 5,10))
// console.log(aplicarOperacion(restar, 34,20))
// console.log(aplicarOperacion(multiplicar, 4,8))

// EJEMPLO 3
// function procesarArray(array, func){
//   let resultado = []
//   for (let i =0; i < array.length; i++){
//     resultado.push(func(array[i]))
//   }
//   return resultado
// }

// function doble(num){
//   return num * 2
// }

// function cuadrado(num){
//   return num * num
// }

// function cubo(num){
//   return num * num * num
// }
// console.log(procesarArray([1,2,3,4,5], doble))
// console.log(procesarArray([1,2,3,4,5], cuadrado))
// console.log(procesarArray([1,2,3,4,5], cubo))


// EJEMPLO 4
const procesarArray = (array, func) => {
  let resultado = []
  for (let i =0; i < array.length; i++){
    resultado.push(func(array[i]))
  }
  return resultado
}

const doble = num => num * 2
const cuadrado = num => num * num
const cubo = num => num * num * num

// console.log(procesarArray([1,2,3,4,5], doble))
// console.log(procesarArray([1,2,3,4,5], cuadrado))
// console.log(procesarArray([1,2,3,4,5], cubo))

// CALLBACKS
// EJEMPLO 5

// setTimeout(function(){
//   console.log('Han pasado 2 segundos')
// }, 2000)

// MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN
// forEach()

// EJEMPLO 6
// Imprimir cada elemento de un array
const numeros = [1,2,3,4,5]

numeros.forEach(function(num) {
//   console.log(num)
// })

// EJEMPLO 7

// numeros.forEach(function(num, indice) {
//   console.log('El número en la posición ' + indice + ' es ' + num)
// })

// EJEMPLO 8

let suma = 0

numeros.forEach(function(num) {
  suma = suma + num // suma += num
})

// console.log(suma)

// EJEMPLO 9
const personas = [
  {nombre: 'Solange', edad: 20},
  {nombre: 'Brayan', edad: 25},
  {nombre: 'Jesus', edad: 24},
  {nombre: 'Pedro', edad: 30}
]

// personas.forEach(persona => console.log(persona.nombre))

// find()

// EJEMPLO 10
const personaEncontrada = personas.find(function(persona) {
  return persona.nombre === 'Jesus'
})

// console.log(personaEncontrada)

// filter()

// EJEMPLO 11

const numbers = [1,2,3,4,5,6,7,8,9,10]
const numPares = numbers.filter(function(num){
  return num % 2 === 0
})

// console.log(numPares)

// some()

// EJEMPLO 12
const tieneNumPares = numbers.some(num => num % 2 === 0)
// console.log(tieneNumPares)

// map()

// EJEMPLO 12
const doubledNumbers = numbers.map(num => num *2)
// console.log(doubledNumbers)

// reduce()

// EJEMPLO 13
const sum = numbers.reduce((suma, num) => suma + num)
// console.log(sum)

// let suma = 0

// numeros.forEach(function(num) {
//   suma = suma + num // suma += num
// })

// EJEMPLO 14
const compras = [
  {item: 'manzana', precio: 0.5, cantidad: 2},
  {item: 'pera', precio: 3.5, cantidad: 6},
  {item: 'plátano', precio: 2.6, cantidad: 1},
  {item: 'maracuyá', precio: 4, cantidad: 5}


]

const costoTotal = compras.reduce((acc, compra) => {
  return acc + compra.precio * compra.cantidad
}, 0)
// console.log(costoTotal)

// sort()
// EJEMPLO 15
const numerosOrdenados = numbers.sort((a, b) => a - b)
// console.log(numerosOrdenados)

// MATH
// MIN MAX

// EJEMPLO 16
// min(), max()

let min = Math.min(1,2,3,4,5,6,7,8,9,10)
let max = Math.max(1,2,3,4,5,6,7,8,9,10)
// console.log(min)
// console.log(max)
// spread operator

// CEIL, FLOOR, ROUND
const x = 4.3

const ceilX = Math.ceil(x)
const floorX = Math.floor(x)
const roundX = Math.round(x)

// console.log(ceilX,floorX,roundX)

// SQUARE ROOT
let sqrtX = Math.sqrt(x)
// console.log(sqrtX)

// RANDOM
// [ 0, 1 >
let randomNumber = Math.random() * 100
// console.log(randomNumber)

let date = new Date()
console.log(date)

// getMonth()
//getDate()
//getFullYear()

let mes = date.getMonth()
console.log(mes)

date.