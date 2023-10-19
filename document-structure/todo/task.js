const form = document.querySelector('form')
const tasksList = document.querySelector('.tasks__list')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const tasksInput = document.querySelector('.tasks__input')

  const divTask =  document.createElement('div')
  divTask.className = 'task'


  const divTaskTitle =  document.createElement('div')
  divTaskTitle.className = 'task__title'
  divTaskTitle.textContent = tasksInput.value.trim()

  const aTagRemove =  document.createElement('a')
  aTagRemove.href = '#'
  aTagRemove.className = 'task__remove'
  aTagRemove.textContent = '×'

    if(divTaskTitle.textContent.length > 0) {
    tasksList.appendChild(divTask)
    divTask.appendChild(divTaskTitle)
    divTask.appendChild(aTagRemove)
  }
  form.reset()

  const taskRemove = document.querySelectorAll('.task__remove')


  taskRemove.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.target.parentNode.remove()
    });
  })
})
