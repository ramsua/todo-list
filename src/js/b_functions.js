/**
 * String vacío o undefined retornan false, sino retorna true
 * 
 * @param {Object} fields - Recorre el objeto y retorna un booleano
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
 * Solo se ejecuta si los campos no están todos validados
 * 
 * @param {HTMLElement} elem Donde se imprimirá el mensaje
 * @param {String} msg Mensaje a mostrar
 */
const showMsg = (elem, msg) => {
    const el = document.getElementById(elem);
    el.textContent = msg
    setTimeout(() => {
        el.textContent = `Tareas`
    }, 2500);
}

/**
 * Si no hay datos en localStorage, muestra un mensaje de que no hay tareas
 * 
 * @param {HTMLElement} parentElem Elemento padre donde se mostraá el mensaje
 */
const noTasks = (parentElem) => {
    const el = document.createElement('P')
    el.classList.add('no-task')
    el.textContent = 'No hay tareas que mostrar'
    parentElem.appendChild(el)
}