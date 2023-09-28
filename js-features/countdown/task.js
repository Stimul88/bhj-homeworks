const sec = document.getElementById('timer')

let timerId = setInterval(() => {
  if (sec.textContent > 0) {
    sec.textContent--
  } else {
    clearInterval(timerId); alert('Вы победили в конкурсе!')
  }
}, 1000);