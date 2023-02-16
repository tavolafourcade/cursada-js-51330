// console.log('Bienvenidos a la clase 2: Control de flujos')

// const edad1 = 10
// const edad2 = '10'
// if (edad1 === edad2) {
//   console.log('Tenemos la misma edad!')
// }


// = operador de asignación

// == operador que permite comparar el valor
// === operador que nos va a permitir comparar el tipo y el valor (estrictamente igual)

// const edadPepe = 19

// if (edadPepe >= 18) { // true
//   console.log('Puedes ingresar')
// } else {
//   console.log('No tienes autorizado el acceso')
// }

// let usuario = prompt('Ingrese su nombre')

// if (usuario ==='Esteban') { // true
//   alert('Bienvenido Tutor')
// } else if (usuario === 'Vani') { // false
//   alert('Bienvenida Tutora')
// } else {
//   alert('Bienvenido alumno ' + usuario)
// }

// const valor = true // 1
// const valor2 = false // 0
// const resultado = valor * 10
// console.log(resultado)

// let number = 6

// let number2 = (number > 5) //true
// console.log(number2)

// let temperatura = 31

// if (temperatura >= 30){
//   alert('Que calor!')
// } else if (temperatura >= 15) {
//   alert('Hace un dia agradable')
// } else {
//   alert('Hace frio!')
// }

// if (temperatura >= 15){
//   alert('Hace un dia agradable')
// } else if (temperatura >= 30) {
//   alert('Que calor!')
// } else {
//   alert('Hace frio!')
// }

/*
1. Estandarización del user
2. Convertir el resultado de pass a Number
*/
// let user = prompt('Ingrese el usuario').toLowerCase()
// let pass = parseInt(prompt('Ingrese la contraseña'))
// let palabraMagica = prompt('Ingrese la palabra magica')

// if ( user==='carlos' && (pass===1234 || palabraMagica === 'Coder')){
//   alert('Bienvenido Carlos')
// } else {
//   alert('Usuario o contraseña incorrectos')
// }

// let estudiante = prompt('Ingrese el nombre del estudiante')

// let nota1 = Number(prompt('Ingrese la nota 1'))
// let nota2 = Number(prompt('Ingrese la nota 2'))
// let nota3 = Number(prompt('Ingrese la nota 3'))

// if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10){
//   let promedio = (nota1 + nota2 + nota3)/3
//   if (promedio >= 7){
//     alert('El estudiante ' + estudiante + ' aprobó con una nota promedio de: ' + promedio)
//   } else {
//     alert('El estudiante ' + estudiante + ' desaprobó con una nota promedio de: ' + promedio)
//   }
// }

// const sol = true
// if (!sol) {
//   console.log('No hay sol')
// }

let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="" && nombreIngresado.length>= 3) && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

