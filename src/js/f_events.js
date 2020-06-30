/**
 * Eventos de escucha
 */
formTask.addEventListener('submit', (e) => {
    e.preventDefault()

    const task = {
        id: setIdTask(),
        name: formTask.inputTask.value.trim(),
        bgColor: isColorChecked().color,
        date: formTask.inputDate.value
    }

    if (validateFields(task)) {
        if (validateDate(task.date)) {
            setItemLocalStorage(task)
        } else {
            showMsg('msg', 'La fecha debe ser posterior a hoy')
        }
    } else {
        showMsg('msg', 'Completa todos los campos')
    }

})
// document.addEventListener('DOMContentLoaded', () => {
//     getItemLocalStorage()
// })

/**
 * Usa clases CSS para modificar
 * la escala del elemento
 */
button.addEventListener('mousedown', () => {
    button.classList.add('scale-down')
    button.addEventListener('mouseup', () => {
        button.classList.remove('scale-down')
    })
})