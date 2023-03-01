// // Operador Ternario

// // Ejemplo 1
// // Verificar si una variable es verdadera o falsa

// let isTrue = false
// let mensaje = isTrue ? 'Es verdadero' : 'Es falso'
// // console.log(mensaje)


// // Ejemplo 2
// let edad = 16
// let permitido = edad >= 18 ? 'Si' : 'No'
// // console.log(permitido)


// // Ejemplo 3
// let hasError = true

// let className = hasError ? 'error' : ''

// // document.getElementById('id').classList.add(className)

// // Ejemplo 4
// let nombre = null
// let mostrarNombre = nombre ? nombre : 'Invitado'
// // console.log(mostrarNombre)

// // Operador lógico && vs AND

// // Ejemplo 5

// let edad2 = 25
// let genero = 'M'

// // if (edad2 >= 18 && genero === 'M') {
// //   console.log('Eres un hombre adulto')
// // } else {
// //   console.log('No eres un hombre')
// // }


// // Ejemplo 6

// const carrito = [2]

// // if (carrito.length === 0){
// //   console.log('Carrito vacío')
// // }

// // carrito.length === 0 && console.log('El carrito está vacío')

// // Operador ||

// const usuario1 = {
//   nombre: 'Daniel',
//   edad: 14
// }

// const usuario2 = null

// // console.log(usuario1 || 'El usuario no existe')
// // console.log(usuario2 || 'El usuario no existe')

// // Operador Nullish

// const variable = NaN
// const resultado = variable ? 'No es nulo' : 'Es NaN'
// // console.log(resultado)

// const resultado2 = variable ?? 'Valor de respaldo'
// // console.log(resultado2)

// const usuario = {
//   nombre: 'Raul'
// }

// console.log(usuario?.trabajos || 'La propiedad no existe')

// DESESTRUCTURACIÓN

const persona = {
  nombre: 'Juan',
  edad: 30,
  email: 'juan@gmail.com',
  telefono: {
    cel: 945454556,
    casa: null
  }
}

// const nombreJuan = persona.nombre
// const edadJuan = persona.edad

const {nombre, edad} = persona
console.log(nombre)

// Desestructurando un arreglo
const frutas = ['manzana', 'pera', 'piña']

// const [ fruta1, fruta2 ] = frutas
const [ ,fruta2, fruta3 ] = frutas

console.log(fruta2)


const { telefono: { cel } } = persona
console.log(cel)

// Alias
const item = {
  item_id: 123,
  product_name: 'Polo'
}

const { item_id: id} = item
console.log(id)

// Desestructuración con parámetros

// function saludar(data){
//   const {nombre, edad} = data
//   console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
// }

const persona2 = {
  nombre: 'Maria',
  edad: 30,
  email: 'maria@gmail.com'
}

function saludar({nombre, edad}){
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`)
}

saludar(persona2)

const nombres = ['Daniel', 'Marilia', 'Jimena']
const nombres2 = [...nombres]
nombres2.push('Romina')
console.log(nombres)
console.log(nombres2)

// Spread operator para concatenar 2 arreglos en uno
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arregloTotal = [...arr1, ...arr2] // [1,2,3, 4,5,6]
// console.log(arregloTotal)

function suma(a,b,c,d,e){
  return a + b +c +d + e
}

const arr = [1,2,3,4,5]
const valor = suma(...arr)
console.log(valor)

function saludo(nombre, edad, ciudad){
  console.log(`Hola, mi nombre es ${nombre}, tengo ${edad}, vivo en ${ciudad}`)
}

const persona3 = ['Lucia', 35, 'Bogotá']

// saludo(...persona3)

// Clonar un objeto
const estadoInicial = { 
  name: 'Jhon',
  edad: 36,
  estudios: 'Universitarios'
}

const objetoClonado = {...estadoInicial, ciudad: 'Lima', edad: 40}
// console.log(objetoClonado)
// console.log(estadoInicial)


const objetosCombinados = {...estadoInicial, ...objetoClonado}
console.log(objetosCombinados)

const obj1 = {nombre: 'Sebastián'}
const obj2 = {ciudad: 'Buenos Aires'}
const obj3 = {edad: 46}


const combinacion = {...obj1, ...obj2, ...obj3}
console.log(combinacion)


function sumatoria(...nums){
  return nums.reduce((acc, curr)=> acc + curr)
}

// const valores = [12,12,12,14,354,35,5,46,567,67867,8,456,345,5]
console.log(sumatoria(12,12,12,14,354,35,5,46,567,67867,8,456,345,5,45,45,67,78,789,56,23))
console.log(sumatoria(2,4))
