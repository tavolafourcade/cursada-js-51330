const productos = [
  { id: 1, nombre: "Camisa roja", precio: 25, talla: "M" },
  { id: 2, nombre: "Pantalón azul", precio: 35, talla: "L" },
  { id: 3, nombre: "Vestido negro", precio: 45, talla: "S" },
  { id: 4, nombre: "Sudadera gris", precio: 55, talla: "XL" },
  { id: 5, nombre: "Zapatos negros", precio: 65, talla: "S" },
  { id: 6, nombre: "Bolsa marrón", precio: 75, talla: "única" },
  { id: 7, nombre: "Camiseta blanca", precio: 15, talla: "M" },
  { id: 8, nombre: "Jeans azules", precio: 45, talla: "M" },
  { id: 9, nombre: "Abrigo gris", precio: 125, talla: "L" },
  { id: 10, nombre: "Botas marrones", precio: 85, talla: "XSS" },
  { id: 11, nombre: "Zapatos negros", precio: 65, talla: "L" },
  { id: 12, nombre: "Bolsa marrón", precio: 75, talla: "única" },
  { id: 13, nombre: "Camiseta blanca", precio: 15, talla: "M" },
  { id: 14, nombre: "Jeans azules", precio: 45, talla: "M" },
  { id: 15, nombre: "Abrigo gris", precio: 125, talla: "L" },
  { id: 16, nombre: "Botas marrones", precio: 85, talla: "L" }
];

const producto1 = { id: 10, nombre: "Botas marrones", precio: 85, talla: "41" }

const containerProducto = document.getElementById('producto')
const divProducto = document.createElement('div')

divProducto.innerHTML = `
<h3>Nombre: ${producto1.nombre}</h3>
<p>Precio: ${producto1.precio}</p>
<p>Talla: ${producto1.talla}</p>
`
// console.log(divProducto)

// containerProducto.append(divProducto)

const tablaProductos = document.getElementById('tablaProductos')
const productoHead = document.getElementById('producto_head')

productoHead.className = 'background-table'
productos.forEach(function(producto) {
  let fila = document.createElement('tr')
  let celdaId = document.createElement('td')
  let celdaNombre = document.createElement('td')
  let celdaPrecio = document.createElement('td')
  let celdaTalla = document.createElement('td')

  celdaId.textContent = producto.id
  celdaNombre.textContent = producto.nombre
  celdaPrecio.textContent = producto.precio
  celdaTalla.textContent = producto.talla

  fila.append(celdaId)
  fila.append(celdaNombre)
  fila.append(celdaPrecio)
  fila.append(celdaTalla)

  tablaProductos.append(fila)

})

let parrafo2 = document.querySelectorAll('#content p')

for (const p of parrafo2){
  console.log(p.textContent)
} 
// console.log(parrafo2)