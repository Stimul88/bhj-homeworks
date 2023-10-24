const textarea = document.querySelector('#editor')
const button = document.querySelector('.button')
const text = localStorage.getItem('text')


if (text) {
  textarea.value = localStorage.getItem('text')
} else {
  textarea.addEventListener('change', (e) => {
    localStorage.setItem('text', textarea.value);
  })
}

button.addEventListener('click', () => {
  localStorage.removeItem('text');
  textarea.value = ''
})







