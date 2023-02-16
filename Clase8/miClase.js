// =========== DOM ============

const titulo = document.getElementById('titulo')
const content = document.getElementById('content')
const container = document.getElementById('container')
// console.log(titulo)
// console.log(content)

const listItems = document.getElementsByClassName('item')
// console.log(listItems)

// for (const item of listItems){
//   console.log(item.innerText)
// }

// console.log(titulo.innerText)
// const nombre = prompt('Ingrese su nombre')
// titulo.innerText = 'Bienvenido ' + nombre
// console.log(titulo.innerText)


for (const item of listItems){
  item.className = 'item bg-item'
}

// container.innerHTML = '<p>Mi primera clase</p>'

const parrafo = document.createElement('p')
parrafo.innerHTML = '<h3>Mi primera clase</h3>'
document.body.prepend(parrafo)
// console.log(parrafo)


// content.insertAdjacentElement('afterend',parrafo)

container.append(
  document.createElement('p'),
  document.createElement('span')
)

// container.appendChild(document.createElement('p'))
// container.appendChild(document.createElement('span'))

// const template = `ID: ${variable}
// PRECIO`