const img = document.getElementById('cookie')
const click = document.getElementById('clicker__counter')
const clickSp = document.getElementById('clicker__speed')

img.onclick = () => {
  if (img.width === 200) {
    img.width += 10;
    img.height += 10;
  } else {
    img.width -= 10;
    img.height -= 10;
  }
}

function clickCount() {
  click.textContent++  ;
}


let lastClicked = 0;
function clickSpeed() {
  if (click.textContent === '1') {
    lastClicked = (new Date()).getTime();
    clickSp.textContent = '0'
  } else {
    let timeNow = (new Date()).getTime();
    let timeDelta = 1/((timeNow - lastClicked)/1000)
    clickSp.textContent = timeDelta.toPrecision(3);
    lastClicked = timeNow;
  }
}

img.addEventListener('click', clickCount);
img.addEventListener('click', clickSpeed);