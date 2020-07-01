/**
 * Validar campos
 */
const validateFields = (fields) => {
    for (const field in fields) {
        if (fields.hasOwnProperty(field)) {
            const element = fields[field];
            if (element === '' || element === undefined) {
                return false
            }
        }
    }
    return true
}

/**
 * Al momento de presionar "submit"
 * Se crea un ID con la fecha y hora 
 * para la tarea que se va a agregar
 */
const setIdTask = () => {
    const t = getCurrentTime()
    return `${t.year}${t.month}${t.date}${t.hours}${t.minutes}${t.seconds}`
}

/**
 * Si falta completar algún input
 * Muestra el msj correspondiente
 */
const showMsg = (elem, msg) => {
    const el = document.getElementById(elem);
    el.textContent = msg
    setTimeout(() => {
        el.textContent = `Tareas`
    }, 2500);
}

const noTasks = (parentElem) => {
    const el = document.createElement('P')
    el.classList.add('no-task')
    el.textContent = 'No hay tareas que mostrar'
    parentElem.appendChild(el)
}