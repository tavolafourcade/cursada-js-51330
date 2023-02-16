// const andres = {
//   nombre: 'Andres',
//   edad: 23,
//   rol: 'Estudiante',
//   curso: 'Javascript'
// }

// const maria = {
//   nombre: 'Maria',
//   edad: 18,
//   rol: 'Estudiante',
//   curso: 'Data Science'
// }

// console.log(maria.edad) // Dot notation
// console.log(maria['curso']) // Bracket notation

// const carlos = 'Carlos'
// carlos = 'Estudiante'
// console.log(carlos)

// const producto = {
//   id: 13,
//   nombre: 'Producto 1',
//   categoria: 'zapatillas',
//   precio: 12000,
//   descripcion: 'zapatillas de color rojo'
// }

producto = {
  id: 13,
  nombre: 'Producto 2',
  categoria: 'zapatillas',
  precio: 12000,
  descripcion: 'zapatillas de color rojo'
}

// producto.precio = 10000
// producto.medida = 42
// producto['color'] = 'rojo'
// console.log(producto)


// const usuario = {
//   nombre: 'Maria',
//   edad: 18,
//   rol: 'Estudiante',
//   curso: 'Data Science',
//   tel: {
//     cod: {
//       id: 51,
//       pais: 'Peru'
//     },
//     casa: 234543543,
//     personal: 944858585,
//     oficina: 3423244
//   }
// }

// console.log(usuario.tel.cod.pais)


// Uso de constructores

// const producto = {
//   id: 13,
//   nombre: 'Producto 1',
//   categoria: 'zapatillas',
//   precio: 12000,
//   descripcion: 'zapatillas de color rojo'
// }

// function Producto(id, nombre,categoria,precio,descripcion) {
//   this.id=id
//   this.nombre=nombre
//   this.categoria=categoria
//   this.precio=precio
//   this.descripcion=descripcion
// }

// const producto1 = new Producto(1,'Sal','Abarrotes',100,'Sal de mesa yodada')
// const producto2 = new Producto(2,'Azúcar','Abarrotes',130,'Azúcar rubia')
// console.log(producto1)
// console.log(producto2)


// {
//   Producto()
// }


// function Mascotas(nombre,tipo,edad){
//   this.nombre = nombre
//   this.tipo = tipo
//   this.edad = edad

//   this.saludar = function(){
//     console.log(this.nombre + ' te está saludando!')
//   }

//   this.cumplirAnios = () => {
//     this.edad++
//   }

//   this.calcularEdadHumana = () => {
//     return this.edad * 2
//   }
// }

// const mascota1 = new Mascotas('Ronnie', 'perro', 6)
// const mascota2 = new Mascotas('Dory', 'pez', 1)
// const mascota3 = new Mascotas('Selino', 'gato', 2)
// mascota1.vacunas = true


// console.log(mascota1)
// console.log(mascota2)
// mascota1.saludar()
// mascota2.saludar()
// mascota3.saludar()

// mascota1.cumplirAnios()
// mascota1.cumplirAnios()
// mascota1.cumplirAnios()
// mascota1.cumplirAnios()

// console.log(mascota1)

// console.log(mascota1.calcularEdadHumana())

// console.log('vacunas' in mascota1)
// const nombreMascota = 'Minino'
// for (let i = 0; i < nombreMascota.length; i++){
//   console.log(nombreMascota[i])
// }

// for (const i in mascota1){
//   console.log(mascota1[i])
// }

// console.log(mascota1.edad)
// console.log(mascota1['nombre'])

function Mascotas(nombre,tipo,edad){
  this.nombre = nombre
  this.tipo = tipo
  this.edad = edad

  this.saludar = function(){
    console.log(this.nombre + ' te está saludando!')
  }

  this.cumplirAnios = () => {
    this.edad++
  }

  this.calcularEdadHumana = () => {
    return this.edad * 2
  }
}

const mascota1 = new Mascotas('Ronnie', 'perro', 6)
const mascota2 = new Mascotas('Dory', 'pez', 1)
const mascota3 = new Mascotas('Selino', 'gato', 2)

// console.log(mascota1)
// console.log(mascota2)
// console.log(mascota3)


