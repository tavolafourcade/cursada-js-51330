const btnDarkMode = document.querySelector('#dark-mode')

let darkModeLS = localStorage.getItem('dark')
if (darkModeLS === 'true') {
  document.body.classList.add('dark')
}

btnDarkMode.addEventListener('click',() => {
  
  let darkMode = localStorage.getItem('dark')
  if (darkMode === 'true'){
    document.body.classList.remove('dark')
    localStorage.setItem('dark', false)
  } else {
    document.body.classList.add('dark')
    localStorage.setItem('dark', true)
  }
  console.log(localStorage.getItem('dark'))
})