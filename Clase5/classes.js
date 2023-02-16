class Mascota {
  // constructor
  constructor(nombre, tipo, edad){
    this.nombre = nombre
    this.tipo = tipo
    this.edad = edad
    this.vivo = true
  }
  // listar métodos
  saludar() {
    console.log(this.nombre + ' te está saludando!')
  }

  cumplirAnios(){
    this.edad++
    if (this.edad === 10){
      this.fallecer()
    }
  }

  fallecer(){
    this.vivo = false
  }
}

const mascota4 = new Mascota('Ronnie', 'perro', 6)
const mascota5 = new Mascota('Dory', 'pez', 4)
const mascota6 = new Mascota('Selino', 'gato', 2)

// console.log(mascota4)
// console.log(mascota5)
// console.log(mascota6)

mascota4.saludar()
mascota4.cumplirAnios()// +1
mascota4.cumplirAnios()// 
mascota4.cumplirAnios()// +1
mascota4.cumplirAnios()// +1


// mascota4.fallecer()

console.log(mascota4)