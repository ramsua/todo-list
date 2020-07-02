formTask.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = {
        id: setIdTask(),
        name: formTask.inputTask.value.trim(),
        bgColor: isColorChecked(),
        date: formTask.inputDate.value
    }

    countDown(task.date)
    if (validateFields(task)) {
        if (validateDate(task.date)) {
            setTasks(task)
        } else {
            showMsg('msg', 'La fecha debe ser posterior a hoy')
        }
    } else {
        showMsg('msg', 'Completa todos los campos')
    }

    formTask.reset()
})

tasksList.addEventListener('click', (e) => {
    removeTask(e.target.dataset.id)
})

document.addEventListener('DOMContentLoaded', () => {
    getTasks()
})