const formTask = document.getElementById('formTask');

/**
 * De la fecha y la hora del momento de presionar "submit"
 * Se crea un ID para la tarea que se va a agregar
 */
const setIdTask = () => {
    const t = getCurrentTime()
    return `${t.year}${t.month}${t.date}${t.hours}${t.minutes}${t.seconds}`
}

formTask.addEventListener('submit', (e) => {

    e.preventDefault()

    const task = {
        id: setIdTask(),
        name: formTask.inputTask.value.trim(),
        bgColor: isColorChecked().color,
        date: formTask.inputDate.value
    }

    validateTaskName(task.name)

    assignBgColor()

    const now = new Date()
    console.log(new Date(task.date) - now);
})