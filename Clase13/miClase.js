const btn = document.querySelector('#btn')
const btnToastify = document.querySelector('#btn-toastify')

btn.addEventListener('click',() => {
  Swal.fire({
    title: 'Quieres eliminar el producto?',
  text: "No podrás revertir esta acción",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, elimínalo!'
  }).then((resultado) => {
    // codigo para borrar
    if (resultado.isConfirmed){
      Toastify({
        text: 'Hola Mundo',
        duration: 3000,
        position: 'left',
        gravity: 'bottom',
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast()
    }
  })
})

btnToastify.addEventListener('click', ()=>{
  Toastify({
    text: 'Hola Mundo',
    duration: 3000,
    position: 'left',
    gravity: 'bottom',
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: () => {
      Toastify({
        text: 'Me clickeaste',
        duration: 1500,
        position: 'left',
        gravity: 'top',
      }).showToast()
    }
  }).showToast()
})

// LUXON

// const DateTime = luxon.DateTime
const { DateTime } = luxon

const now = DateTime.now()
// console.log(now)

const dt = DateTime.local(2023,1,25,12,10)
console.log(dt.toString())

console.log(now.year)
console.log(now.month)
console.log(now.day)
console.log(now.weekday)
console.log(now.daysInMonth)


// console.log(dt.toLocaleString(DateTime.DATETIME_HUGE))


// Operaciones con fechas

// console.log(now.toLocaleString(DateTime.DATETIME_HUGE))

// const suma = now.plus({days:10, hours: 15})
// console.log(suma.toLocaleString(DateTime.DATETIME_HUGE))


const { Duration } = luxon

const dur = Duration.fromObject({days: 5})
console.log(dur)

const entregaFinal = now.plus(dur)
console.log(entregaFinal.toLocaleString(DateTime.DATETIME_HUGE))


// diff
const navidad = DateTime.local(2023, 12, 25)

const diferencia = navidad.diff(now, ['days', 'hours', 'minutes'])
console.log(diferencia)

// Interval
const { Interval } = luxon
const intervalo = Interval.fromDateTimes(now,navidad)
console.log(intervalo.length('days'))
console.log(intervalo.length('hours'))
console.log(intervalo.length('minutes'))