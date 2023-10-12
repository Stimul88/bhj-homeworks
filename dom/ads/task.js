const elem = Array(document.querySelectorAll('.rotator__case'))

elem.forEach((item, i) => {
  setInterval(() => {
    let colorName = item[i].dataset.color
    let speedNum = Number(item[i].getAttribute('data-speed'))

    if (item[i].className === 'rotator__case rotator__case_active') {
      item[i].classList.remove('rotator__case_active')

      if (i === 5){
        i = -1
      }
      i++
      item[i].style = `color:${colorName}`
      item[i].classList.add('rotator__case_active')
      }
  }, 1000)
})
