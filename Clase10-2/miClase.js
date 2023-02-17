// LOCALSTORAGE
// localStorage.setItem('usuario', 'Juan')

// const usuario = localStorage.getItem('usuario')
// console.log(usuario)

// Ejemplo 3: Recibir un nombre por prompt y guardarlo en el localStorage

let usuario = localStorage.getItem('usuario')
console.log(usuario)

const titleUsuario = document.querySelector('#bienvenida')


// removeItem: elimina un elemento en particular.
// clear: borra todo el localStorage.

const btnUsuario = document.querySelector('#user-btn')

const pedirUsuario = () =>{
  usuario = prompt('Ingrese el nombre de usuario')
  localStorage.setItem('usuario', usuario)
}

if (!usuario) {
  pedirUsuario()
}

titleUsuario.innerText = `Bienvenido ${usuario}`

btnUsuario.addEventListener('click', () => {
  pedirUsuario()
  // localStorage.removeItem('usuario')
  // usuario = ''
  titleUsuario.innerText = `Bienvenido ${usuario}`
})


const btnLogout = document.querySelector('#logout-btn')

btnLogout.addEventListener('click', () => {
  localStorage.removeItem('usuario')
  usuario = ''
  titleUsuario.innerText = `Bienvenido ${usuario}`
})

// Ejemplo 6
// Implementando un Dark Mode

// const btnDarkMode = document.querySelector('#dark-mode')

// btnDarkMode.addEventListener('click',() => {
//   document.body.classList.toggle('dark')
// })

// Ejemplo 7
// Implementando un Dark Mode persistente

// let darkModeLS = localStorage.getItem('dark')
// if (darkModeLS === 'true') {
//   document.body.classList.add('dark')
// }

// btnDarkMode.addEventListener('click',() => {
  
//   let darkMode = localStorage.getItem('dark')
//   if (darkMode === 'true'){
//     document.body.classList.remove('dark')
//     localStorage.setItem('dark', false)
//   } else {
//     document.body.classList.add('dark')
//     localStorage.setItem('dark', true)
//   }
//   console.log(localStorage.getItem('dark'))
// })


const producto = {
  nombre: "Camiseta",
  marca: "Adidas",
  precio: 39.99,
  tallas: ["S", "M", "L", "XL"]
}

localStorage.setItem('producto', producto)
// console.log(producto)
const productoJSON = JSON.stringify(producto)

// Ejemplo 7

const persona = {
  nombre: 'Juan',
  apellido: 'Pérez',
  edad: 30
}

// console.log(persona)



// JSON.stringify()
const personaJSON = JSON.stringify(persona)
// console.log(personaJSON)

localStorage.setItem('producto', productoJSON)


// Ejemplo final
const inputNombre = document.querySelector('#input-nombre')
const inputRol = document.querySelector('#input-rol')
const btnGuardar = document.querySelector('#btn-guardar')

let usuarios = []

const usuariosEnLS = JSON.parse(localStorage.getItem('usuarios'))

if(usuariosEnLS){
  usuarios = usuariosEnLS
}

const guardarUsuario = () => {
  const valueNombre = inputNombre.value
  const valueRol = inputRol.value

  usuarios.push({
    nombre: valueNombre,
    rol: valueRol
  })
  
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
  inputNombre.value = ''
  inputRol.value = ''

}

btnGuardar.addEventListener('click', guardarUsuario)
console.log(usuarios)