const elem = document.querySelectorAll('.reveal')

window.onscroll = () => {
  elem.forEach((el) => {
    const {top, bottom} = el.getBoundingClientRect()
    if (bottom > 0 && top < window.innerHeight) {
      el.classList.add('reveal_active')
      console.log(bottom, top)
    } else {
      el.classList.remove('reveal_active')
    }
  })
}