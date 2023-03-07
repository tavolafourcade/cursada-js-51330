// 1 op - 5 segundos
// 2 op - 10 segundos

// Programación sincrónica
// 1 op --> 2 op ---> 15 segundos

// Progrmaación asincrónica
// 1 op --> 5 seg
// 2 op --> 10 seg

// 10 segundos

// Ejemplo 2

// console.log('Inicio del programa')

// setTimeout(() => {
//   console.log('Soy un setTimeout')
// }, 5000)

// console.log('Final del programa')



// Ejemplo 3

// for (let letra of 'hola'){
//   console.log(letra)
// }

// for (let letra of 'mundo'){
//   setTimeout(() => {
//     console.log(letra)
//   }, 3000)
// }

// Ejemplo 4
// setInterval(() => {
//   console.log('Hola mundo')
// }, 1000)

// Ejemplo 5
// const counterContainer = document.querySelector('#counter')
// let counter = 10

// counterContainer.innerText = counter

// const intervalo = setInterval(() => {
//   counter--
//   counterContainer.innerText = counter

//   if (counter === 0){
//     clearInterval(intervalo)
//   }
// }, 1000)



// const images = document.querySelectorAll('.carousel img')
// let index = 0

// function carousel() {
//   images[index].classList.remove('active')
//   index = (index + 1) % images.length
//   console.log(index)
//   images[index].classList.add('active')
// }

// setInterval(carousel, 3000)

// PROMESAS

// const promesa = new Promise((resolve, reject) => {
//   // Cuerpo de la promesa
//   // la lógica de la función
// })

// console.log(promesa)

// pending
// fulfilled
// rejected

// const pedirDatos = (ckeck) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(ckeck){
//         resolve('Los datos han sido recibidos')
//       } else {
//         reject('No se ha podido recibir los datos')
//       }
//     },5000)

//   })
// }

// console.log(pedirDatos(true))

// Then & Catch

// const pedirDatos = (ckeck) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(ckeck){
//         resolve('Los datos han sido recibidos')
//       } else {
//         reject('No se ha podido recibir los datos')
//       }
//     },3000)

//   })
// }

// pedirDatos(false)
//   .then((response) => console.log(response))
//   .catch((e) => console.log(e))
//   .finally(() => console.log('Fin del proceso'))


// Ejercicio aplicado

const lista = document.querySelector('#lista-productos')
const loeader = document.querySelector('#loader')
const inventario = [
  {
    nombre: 'Producto 1',
    precio: 100
  },
  {
    nombre: 'Producto 2',
    precio: 200
  },
  {
    nombre: 'Producto 3',
    precio: 300
  },
  {
    nombre: 'Producto 4',
    precio: 400
  },
  {
    nombre: 'Producto 5',
    precio: 500
  }
]

const pedirProductos = (Logged) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Logged) {
          resolve(inventario)
        } else {
          reject('Error de autenticación')
        }
    },3000)

  })
}

loeader.classList.add('loader-active')
pedirProductos(true)
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement('li')
      li.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: ${producto.precio}</p>
      `
    
      lista.append(li)
    })
  })
  .catch((error) => lista.innerHTML = `<p>Hubo un problema: ${error}</p>`)
  .finally(() => {
    loeader.classList.remove('loader-active')
  })

//   .then((response) => console.log(response))
//   .catch((e) => console.log(e))
//   .finally(() => console.log('Fin del proceso'))
