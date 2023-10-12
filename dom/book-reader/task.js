const buttonFont = Array.from(document.querySelectorAll('.font-size'))
const fontSize = document.querySelector('#book')
const arrayColor = Array.from(document.querySelectorAll('.color'))


buttonFont.forEach((item, i) => {
  item.onclick = () => {
    let dataName = item.dataset.size
    switch(dataName) {
      case 'small':
        fontSize.classList.add('book_fs-small')
        fontSize.classList.remove('font-size_big')
        if(item.classList.contains('font-size_active')){
          break
        } else {
          console.log(buttonFont[1].className)
          item.classList.add('font-size_active')
          buttonFont[1].className = 'font-size'
          buttonFont[2].className = 'font-size font-size_big'
          break
        }
      case 'big':
        fontSize.classList.add('book_fs-big')
        fontSize.classList.remove('book_fs-small')
        if(item.classList.contains('font-size_active')){
          break
        } else {
          item.classList.add('font-size_active')
          buttonFont[0].className = 'font-size font-size_small'
          buttonFont[1].className = 'font-size'
          break
        }
      case undefined:
        // fontSize.className = 'book'
        fontSize.classList.remove('book_fs-big')
        fontSize.classList.remove('book_fs-small')
        if(item.classList.contains('font-size_active')){
          break
        } else {
          item.classList.add('font-size_active')
          buttonFont[0].className = 'font-size'
          buttonFont[2].className = 'font-size font-size_big'
          break
        }
    }
  }
})

arrayColor.forEach((item, i) => {
  let textColorName = item.dataset.textColor
  let bgColorName = item.dataset.bgColor
  console.log(textColorName)
  item.addEventListener('click', () => {
    switch(textColorName) {
      case 'black':
        fontSize.classList.add('book_color-black')
        fontSize.classList.remove('book_color-gray')
        fontSize.classList.remove('book_color-whitesmoke')
        if (item.classList.contains('color_active')) {
          break
        } else {
          item.classList.add('color_active')
          arrayColor[1].className = 'color text_color_gray'
          arrayColor[2].className = 'color text_color_whitesmoke'
          break
        }
      case 'gray':
        fontSize.classList.add('book_color-gray')
        fontSize.classList.remove('book_color-black')
        fontSize.classList.remove('book_color-whitesmoke')
        if (item.classList.contains('color_active')) {
          break
        }else {
          item.classList.add('color_active')
          arrayColor[0].className = 'color text_color_black'
          arrayColor[2].className = 'color text_color_whitesmoke'
          break
        }
      case 'whitesmoke':
        fontSize.classList.remove('book_color-black')
        fontSize.classList.remove('book_color-gray')
        fontSize.classList.add('book_color-whitesmoke')
        if (item.classList.contains('color_active')) {
          break
        }else {item.classList.add('color_active')
          arrayColor[0].className = 'color text_color_black'
          arrayColor[1].className = 'color text_color_gray'
          break}

    }
    switch(bgColorName) {
      case 'black':
        fontSize.classList.add('book_bg-black')
        fontSize.classList.remove('book_bg-gray')
        fontSize.classList.remove('book_bg-white')
        if (item.classList.contains('color_active')) {
          break
        } else {
          item.classList.add('color_active')
          arrayColor[4].className = 'color bg_color_gray'
          arrayColor[5].className = 'color bg_color_white'
          break
        }
      case 'gray':
        fontSize.classList.add('book_bg-gray')
        fontSize.classList.remove('book_bg-black')
        fontSize.classList.remove('book_bg-white')
        if (item.classList.contains('color_active')) {
          break
        } else {
          item.classList.add('color_active')
          arrayColor[3].className = 'color text_color_black'
          arrayColor[5].className = 'color bg_color_white'
          break
        }
      case 'white':
        fontSize.classList.add('book_bg-white')
        fontSize.classList.remove('book_bg-gray')
        fontSize.classList.remove('book_bg-white')
        if (item.classList.contains('color_active')) {
          break
        } else {
          item.classList.add('color_active')
          arrayColor[3].className = 'color text_color_black'
          arrayColor[4].className = 'color text_color_gray'
          break
        }
    }
  })
})

