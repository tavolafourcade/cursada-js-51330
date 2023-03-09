
// //              dominio               | endpoint
// const url = 'https://www.coderhouse.com/search?cursada=51111&asistencia=true&limit=20'
// //                                      /alumnos/:id
// const url2 = 'https://www.coderhouse.com/alumnos/10'

const listaPosts = document.getElementById('posts')

// FETCH
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => {
//     // Sincronizar las acciones
//     console.log(data)
//     const li = document.createElement('li')
//     li.innerHTML = `
//       <h4>${data.title}</h4>
//       <p>${data.body}</p>
//     `

//     listaPosts.append(li)
//   })

// Traer todos los posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     // Sincronizar las acciones
//     console.log(data)
//     data.forEach(post => {
//       const li = document.createElement('li')
//     li.innerHTML = `
//       <h4>${post.title}</h4>
//       <p>${post.body}</p>
//     `
//     listaPosts.append(li)

//     })
//   })

  // Implementar método POST

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(
  //     {
  //       title: 'Mensaje',
  //       body: 'Hola Mundo',
  //       userID: 10,
  //     }
  //   ),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   }
  // })
  // .then(res => res.json())
  // .then(data => console.log(data))

  
  // FETCH a un archivo local

  // fetch('/data.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     data.forEach(producto => {
  //       const li = document.createElement('li')
  //   li.innerHTML = `
  //     <h4>${producto.nombre}</h4>
  //     <p>${producto.precio}</p>
  //   `
  //   listaPosts.append(li)
  //     })
  //   })



async function pedirPosts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json()
  console.log(data)
    data.forEach(post => {
            const li = document.createElement('li')
          li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
          `
          listaPosts.append(li)
      
          })
}

pedirPosts()