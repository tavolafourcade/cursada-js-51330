// // 1er momento: declaración
// function saludar() {
//   // Código de la función
//   console.log('Hola Mundo')
// }

// // 2do momento: llamado a la función
// saludar()


// let nombre1 = prompt('Ingrese su nombre')
// alert('Bienvenido ' + nombre1)

// let nombre2 = prompt('Ingrese su nombre')
// alert('Bienvenido ' + nombre2)

// let nombre3 = prompt('Ingrese su nombre')
// alert('Bienvenido ' + nombre3)

// let nombre4 = prompt('Ingrese su nombre')
// alert('Bienvenido ' + nombre4)

// let nombre5 = prompt('Ingrese su nombre')
// alert('Bienvenido ' + nombre5)

// function pedirNombre(){
//   let nombre = prompt('Ingrese su nombre')
//   alert('Bienvenido ' + nombre)
// }

// for(let i = 1; i<= 3; i++){
//   pedirNombre()
// }

// Parámetros
// function saludar(usuario, edad){
//   console.log('Bienvenido ' + usuario + ', tienes ' + edad + ' años')
// }

// saludar('Tomás', 25)
// saludar('Oscar', 30)
// saludar('Juan', 18)

function restar(numero1, numero2){
  return numero1 - numero2
  console.log(numero1)
}

// console.log(restar(70, 25)) // 45


// const diferencia = restar(90, 50)
// console.log(diferencia)

// PArámetros son variables

const edadManuel = 50
const edadOscar = 30

// console.log(restar(edadManuel, edadOscar))

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
          break;
      case "-":
          return primerNumero - segundoNumero;
          break;
      case "*":
          return primerNumero * segundoNumero;
          break;
      case "/":
          return primerNumero / segundoNumero;
          break;
      default:
          return 0;
          break;
  }
}
// console.log(calculadora(10, 5, "+"));

// console.log(restar(5,3))
// 5 - undefined = NaN

// Scop

// let usuario ='Tomás'

// function saludar(){
//   // let usuario = 'Manuel'
//   console.log(usuario)
// }

// saludar()


// let usuario ='Tomás'

// function saludar(){
//   // let usuario = 'Manuel'
//   console.log('1' + usuario)
// }

// console.log('2' + usuario)


// saludar()


// let usuario ='Tomás'
// function saludar(){
//   let usuario = 'Manuel'
//   console.log(usuario)
// }

// function saludarOtraVez(){
//   let usuario = 'Raul'
//   console.log(usuario)
// }

// saludar()
// saludarOtraVez()

// Función anónima

// Función tradicional
// function sumarTradicional(num1, num2) {
//   return num1 + num2
// }

// // Función anónima
const suma = function(num1, num2) {
  return num1 + num2
}

// // console.log(suma(5,6))

// // Función flecha
const resta = (a,b) => a - b

const iva = x => x * 0.21
const precioProducto = 500
const descuento = 50

const nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)

console.log(nuevoPrecio)