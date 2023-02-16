
// FOR

// for (contador; condicion; actualizacion){
//     // codigo a ejecutar
// }

//      0           1     3 
// for (let i = 1; i <= 5; i++){
//     // 2
//     console.log(i + 'Hola Mundo')
// }

// for (let i = 20; i > 0; i--){
//     // 2
//     console.log(i)
// }

// i++
// i = i + 1
// i += 1

// let tabla = Number(prompt('Ingrese el número deseado'))

// for (let i = 1; i <= 10; i++){
//     console.log(i*tabla)
// }


// let numeroProhibido = 66

// for (let i = 0; i <= 100; i++){
    
//     if( i === numeroProhibido) {
//         console.log('EL NUMERO ES PROHIBIDO')
//         break
//     }
//     console.log(i)
// }

// for (let i = 0; i <= 100; i++){
    
//     if( i === numeroProhibido) {
//         continue
//     }
//     console.log(i)
// }

// Cuantos múltiplos de 6 tengo entre 1 y 10000?

// let conteo = 0
// for (let i = 1; i <= 10000; i++){
//     if( i % 6 === 0) {
//         conteo++
//     }

// }
// console.log(conteo)



// console.log(10%4)

// 10 / 5 = 2 residuo: 0
// 10 / 3 = 3 residuo: 1

// Contexto global
// Contexto local

// WHILE
// let pass = prompt('Ingrese su contraseña')
// let contador = 1

// while (pass !== "Coder" && contador < 3){
//     alert("Acceso denegado, pruebe de nuevo")
//     contador++
//     pass = prompt('Ingrese su contraseña')
// }

// if (contador === 3) {
//     alert('Límite de ingresos fallidos, vuelva después')
// } else {
//     alert('Bienvenido a la aplicación')
// }

// for (let i = 1; i <= 3; i++){
//     let pass = prompt('Ingrese su contraseña')

//     if( pass==='Coder'){
//         alert('Bienvenido a la aplicación')
//         break
//     } else if( i === 3) {
//         alert('Límite de ingresos fallidos, vuelva después')
//     } else {
//         alert('Ingresor incorrecto, pruebe de nuevo')
//     }
    
// }

// DO WHILE
// let pass // undefined

// do {
//     pass = prompt('Ingrese la contraseña')
// } while (pass !== 'Coder')

// alert('Bienvenido a la aplicación')

// SWITCH
// let banco = prompt('Ingrese su banco')

// if(banco === 'Santander'){
//     console.log('Tasa de interés: 15%')
// } else if  (banco === 'BBVA') {
//         console.log('Tasa de interés: 12%')
// } else if  (banco === 'Galicia') {
//     console.log('Tasa de interés: 20%')
// }  else if  (banco === 'Provincia') {
//     console.log('Tasa de interés: 25%')
// }
// let monto = 100000
// switch(banco) {
//     case 'Santander':
//         interes = 1.15
//         console.log('Interés 15%')
//         break
//     case 'BBVA':
//         interes = 1.12
//         console.log('Interés 12%')
//         break
//     case 'Galicia':
//         interes = 1.20
//         console.log('Interés 20%')
//         break
        
//     default:
//         alert('No encontramos ese banco')
// }
// alert('Tiene que devolver: ' + monto * interes)


// let numeroPedido  = Number(prompt('Ingrese un número'))
// for (let i = 1; i <= 5; i++) {
//     console.log('Salida: ' + (numeroPedido+i))
// }

// let concatenado  = ''
// do {
//     texto  = prompt('Ingrese un texto o ESC para salir')
//     concatenado += texto
//     if (texto !== 'ESC') { console.log(concatenado) }
// } while (texto !== 'ESC')
