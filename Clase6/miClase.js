// Definición de un arreglo
const miPrimerArray = []
const miSegundoArray = [1,2,3]
const miTercerArray = ['A','B','C']
const miCuartoArray = [1,'B',true]

// Acceso al contenido de un arreglo

// Ejemplo 1
// Accediendo a un arreglo de objetos de datos personales
const objeto = {
  nombre: 'Juan',
  edad: 28,
}

// // let personas = [
// //   {nombre: 'Juan', edad: 28},
// //   {nombre: 'Nicolás', edad: 19},
// //   {nombre: 'María', edad: 30},
// //   {nombre: 'José', edad: 38},
// //   {nombre: 'Sebastián', edad: 23},
// //   {nombre: 'Juan', edad: 28},
// //   {nombre: 'Nicolás', edad: 19},
// //   {nombre: 'María', edad: 30},
// //   {nombre: 'José', edad: 38},
// //   {nombre: 'Sebastián', edad: 23}
// // ]

// personas.push(  {nombre: 'Nicolás', edad: 50})
// console.log(personas)
// [i]
// let nombrePrimeraPersona = personas[0].nombre
// let edadSegundaPersona = personas[1].edad
// console.log(nombrePrimeraPersona)
// console.log(edadSegundaPersona)

// Ejemplo 2
// Accediendo en la consola a los elementos de un arreglo dinámicamente

// let colores = ['rojo', 'amarillo', 'azul']

// for (let i = 0; i < 3; i++){
//   console.log(colores[i])
// }

// for (let i = 0; i < 5; i++){
//   console.log(personas[i].nombre)
// }

//? Métodos

// LENGTH
// for (let i = 0; i < personas.length; i++){
//   console.log(personas[i].nombre)
// }
// TODO --> Ejemplo 3
// Acceder a una lista de útiles escolares y procesar las ventas

let productos = [
  {nombre: 'Lapiz', precio: 2.5, cantidad: 10},
  {nombre: 'Borrador', precio: 1.5, cantidad: 5},
  {nombre: 'Cuaderno', precio: 3.5, cantidad: 20},
]

// let totalVentas = 0
// // totalVentas = totalVentas + 

// for (let i = 0; i < productos.length; i++){
//   let producto = productos[i]
//   // console.log(producto)
//   let ventaProducto = producto.precio * producto.cantidad
//   // console.log(ventaProducto)
//   totalVentas = totalVentas + ventaProducto
//   console.log('El total de ventas del producto ' + producto.nombre + ' es de $' + ventaProducto)
// }
// console.log('El total de ventas del día fue: $' + totalVentas)


// PUSH
// TODO --> Ejemplo 4

let colores = ['rojo', 'amarillo', 'azul']
colores.push('naranja')

// TODO --> Ejemplo 5
colores.push('verde', 'magenta', 'negro')
// console.log(colores)

// TODO --> Ejemplo 6
colores.unshift('blanco', 'violeta', 'púrpura')
// console.log(colores)

// TODO --> Ejemplo 7
let colorEliminado = colores.pop()
// console.log(colorEliminado)

// TODO --> Ejemplo 8
let colorEliminado2 = colores.shift()
// console.log(colorEliminado2)
// console.log(colores)

// TODO --> Ejemplo 9
let coloresEliminados = colores.splice(1,1)
// console.log(coloresEliminados)

// TODO --> Ejemplo 10
let coloresAString = colores.join(', ')
// console.log(typeof coloresAString)

// CONCAT
// TODO --> Ejemplo 11
let frutas1 = ['manzana', 'banana']
let frutas2 = ['pera', 'naranja']
// console.log(frutas1)
// console.log(frutas2)

let todasLasFrutas = frutas1.concat(frutas2)
// console.log(todasLasFrutas)

// TODO --> Ejemplo 12
let frutas3 = ['kiwi', 'mango']
let todasLasFrutas2 = frutas1.concat(frutas2, frutas3)
// console.log(todasLasFrutas2)


// TODO --> Ejemplo 13
// Extraer 2 elementos a partir de la posición 1 y almacenarlos en una nueva variable
// console.log(todasLasFrutas2)
let frutasExtraidas = todasLasFrutas2.slice(1,3)
// console.log(frutasExtraidas)

// TODO --> Ejemplo 14

let frutasQueMeGustan = ['Mango', 'Manzana', 'Piña', 'Manzana', 'Toronja', 'Melón']
let posicion = frutasQueMeGustan.indexOf('Manzana')
// console.log(posicion)

// if (posicion !== -1) {
//   frutasQueMeGustan.splice(posicion,1)
// }

// console.log(frutasQueMeGustan)

// TODO --> Ejemplo 15

let existe = frutasQueMeGustan.includes('Melón')
console.log(existe)

if(existe){
  console.log('La fruta Melón está en nuestra lista')
} else {
  console.log('La fruta Melón no está en nuestra lista')

}


// TODO --> Ejemplo 16

let numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.reverse()
// console.log(numeros)


// TODO --> Ejemplo 17
for (let fruta of frutasQueMeGustan){
  console.log(fruta)
}


let personas = [
  {nombre: 'Juan', edad: 28},
  {nombre: 'Nicolás', edad: 19},
  {nombre: 'María', edad: 30},
  {nombre: 'José', edad: 38},
  {nombre: 'Sebastián', edad: 23},
  {nombre: 'Juan', edad: 28},
  {nombre: 'Nicolás', edad: 19},
  {nombre: 'María', edad: 30},
  {nombre: 'José', edad: 38},
  {nombre: 'Sebastián', edad: 23}
]

for (let i = 0; i < personas.length; i++){
  console.log(personas[i])
}

for (let persona of personas) {
  console.log(persona)
}