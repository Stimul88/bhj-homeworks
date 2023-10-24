const signin = document.querySelector('.signin')
const form = document.querySelector('form')
const welcome = document.querySelector('.welcome')
const userId = document.querySelector('#user_id')

if (localStorage.getItem('id')) {
  signin.classList.remove('signin_active')
  userId.innerText = localStorage.getItem('id')
  welcome.classList.add('welcome_active')
} else {
  form.addEventListener(('submit'), (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load',(event) => {

      const res = JSON.parse(xhr.responseText)

      if (res.success) {
        signin.classList.remove('signin_active')
        userId.innerText = res['user_id']
        welcome.classList.add('welcome_active')
        localStorage.setItem('id', res['user_id']);
      } else {
        alert('Неверный логин/пароль')
      }
    })

    xhr.open('POST',
      'https://students.netoservices.ru/nestjs-backend/auth', true);

    xhr.send(formData);
    form.reset()
  })
}