const form = document.querySelector('form')
const tasksList = document.querySelector('.tasks__list')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const tasksInput = document.querySelector('.tasks__input')
  if(tasksInput.value) {
    const divTask =  document.createElement('div')
    divTask.className = 'task'
    tasksList.appendChild(divTask)

    const divTaskTitle =  document.createElement('div')
    divTaskTitle.className = 'task__title'
    divTaskTitle.textContent = tasksInput.value

    divTask.appendChild(divTaskTitle)

    const aTagRemove =  document.createElement('a')
    aTagRemove.href = '#'
    aTagRemove.className = 'task__remove'
    aTagRemove.textContent = '×'
    divTask.appendChild(aTagRemove)

    form.reset()
  }

  const task = document.querySelectorAll('.task')
  task.forEach((item, i) => {
    const taskRemove = document.querySelectorAll('.task__remove')
    item.addEventListener('click', (e) => {
      task[i].remove();
    })
  })
})




