// EVENTOS

// Ejemplo 1

// Crear un evento que cambie el texto del título

const titulo = document.getElementById('titulo')
console.log(titulo)

//addEventListener
titulo.addEventListener('click', ()=>{
  // Cambiar el texto del elemento h1
  titulo.innerText = 'Clase 9: Aprendiendo a manejar eventos'
})

// Ejemplo 2
// Agregar un subtítulo
// titulo.addEventListener('click', () => {
//   const subtitle = document.createElement('span')
//   subtitle.textContent = 'Interactúa con tu sitio web: aprende como utilizar eventos con ejemplos'

//   titulo.insertAdjacentElement('afterend',subtitle)
// })

// Ejemplo 3
// Validar que el subtítulo no exista

let spanAgregado = false
titulo.addEventListener('click', () => {

  if (!spanAgregado){
    const subtitle = document.createElement('span')
    subtitle.textContent = 'Interactúa con tu sitio web: aprende como utilizar eventos con ejemplos'
  
    titulo.insertAdjacentElement('afterend',subtitle)

    spanAgregado = true

    subtitle.addEventListener('click', function(){
      subtitle.remove()
      spanAgregado = false
    })
  }
})

// Ejemplo 4
// Cuando le de click al span quiero que este desaparezca


// Ejemplo 5
const tituloContentSection = document.querySelector('#titulo-content-section')
const listaTemas = document.querySelector('#lista-temas')

tituloContentSection.addEventListener('click', () => {
  if (listaTemas.style.display === 'none') {
    listaTemas.style.display = 'block'
  } else {
    listaTemas.style.display = 'none'
  }
})

// EVENTOS DE TIPO MOUSE
// mousedown/mouseup

// Ejemplo 6
const btnMousedown = document.querySelector('#btn-mousedown')
btnMousedown.addEventListener('mousedown', () => {
  const intervalo = setInterval(() => {
    console.log('Botón está presionado')
  }, 1000)

  btnMousedown.addEventListener('mouseup', () => {
    clearInterval(intervalo)
  })
})

// Ejemplo 7
// Div que cambie de color cuando ponga el mouse encima

const miDivMouseOver = document.querySelector('#mi-div-mouseover')
miDivMouseOver.addEventListener('mouseover', () => {
  miDivMouseOver.style.backgroundColor = 'green'
})
miDivMouseOver.addEventListener('mouseout', () => {
  miDivMouseOver.style.backgroundColor = 'blue'
})

// mousemove

// Ejemplo 8
const container = document.getElementById('container-mousemove')
const position = document.getElementById('position')

// container.addEventListener('mousemove', (event) => {
//   console.log(event)
//   const x = event.clientX
//   const y = event.clientY

//   position.textContent = `X: ${x}, Y: ${y}`
// })

// keydown
// Ejemplo 9
// Obtengamos el texto escrito en un input

const cajaTexto = document.getElementById('caja-texto')
cajaTexto.addEventListener('keydown', (e) => {
  const tecla = e.key
  // console.log('La tecla presionada es: ', tecla)
})

// change
// Ejemplo 10

const inputNombre = document.getElementById('input-nombre')
inputNombre.addEventListener('change', (event) => {
  console.log('Nuevo valor del input:', event.target.value)
})

// input
// Ejemplo 11

const inputText = document.querySelector('#input-text')
const output = document.querySelector('#output')

inputText.addEventListener('input', () => {
  console.log(inputText.value)
  output.textContent = `Has escrito: ${inputText.value}`
})

// submit
// Ejemplo 12
const form = document.getElementById('myForm')
form.addEventListener('submit', (e)=> {
  e.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value

  console.log(`Nombre: ${name}  Email: ${email}`)
})