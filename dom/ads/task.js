const elem = Array(document.querySelectorAll('.rotator__case'))

elem.forEach((item, i) => {
  setTimeout(function time(){
    let colorName = item[i].dataset.color
    let speedNum = Number(item[i].getAttribute('data-speed'))
    if (item[i].className === 'rotator__case rotator__case_active') {
      item[i].classList.remove('rotator__case_active')
      if (item[i].nextElementSibling  === null){
        i = -1
      }
      i++
      item[i].style = `color:${colorName}`
      item[i].classList.add('rotator__case_active')
    }
    setTimeout(time, speedNum);
  }, 1000)
})

