const titleUsuario = document.querySelector('#bienvenida')

const usuario = localStorage.getItem('usuario')
titleUsuario.innerText = `Bienvenido(a) ${usuario} a la sección de Nosotros`

const productoEnLS = localStorage.getItem('producto')
console.log('NOSOTROS', productoEnLS)
const producto = JSON.parse(productoEnLS)
console.log(producto)

const listaUsuarios = document.querySelector('#lista-usuarios')
const usuarios = localStorage.getItem('usuarios')
const usuariosParse = JSON.parse(usuarios)
// console.log(usuariosParse)

usuariosParse.forEach((usuario) => {
  const li = document.createElement('li')
  li.innerHTML = `
    <h4>Nombre: ${usuario.nombre}</h4>
    <p>Rol: ${usuario.rol}</p>
  `
  listaUsuarios.append(li)
})