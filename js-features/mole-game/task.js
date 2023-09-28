const killHole = document.getElementById('dead')
const missHole = document.getElementById('lost')


getHole = index => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i++) {
  getHole( i ).onclick = () => {
    if (getHole( i ).className === 'hole hole_has-mole') {
      killHole.textContent++;
      if (killHole.textContent === '10') {
        alert('Победа!')
        missHole.textContent = '0'
        killHole.textContent = '0'
      }
    } else {
      missHole.textContent++;
      if (missHole.textContent === '5') {
        alert('Вы проиграли!')
        missHole.textContent = '0'
        killHole.textContent = '0'
      }
    }
  }
}

