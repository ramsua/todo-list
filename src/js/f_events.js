formTask.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = {
        id: setIdTask(),
        name: formTask.inputTask.value.trim(),
        bgColor: isColorChecked(),
        date: formTask.inputDate.value
    }

    if (validateFields(task)) {
        if (validateDate(task.date)) {
            setTasks(task)
        } else {
            showMsg('msg', 'La fecha debe ser posterior a hoy')
        }
    } else {
        showMsg('msg', 'Completa todos los campos')
    }
})

tasksList.addEventListener('click', (e) => {
    if (e.target.textContent === 'Borrar') {
        removeTask(e.target.previousSibling.textContent)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    showTasks()
})