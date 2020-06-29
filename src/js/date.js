/**
 * Obtiene la fecha y hora 
 * del momento que se guarda la tarea
 */
const getCurrentTime = () => {
    let time = new Date,
        year = time.getFullYear(),
        month = time.getMonth() + 1,
        date = time.getDate(),
        hours = ("0" + time.getHours()).slice(-2),
        minutes = ("0" + time.getMinutes()).slice(-2),
        seconds = ("0" + time.getSeconds()).slice(-2);
    return {
        year, month, date, hours, minutes, seconds
    }
}

/**
 * Ejecuta la función que obtiene la 
 * fecha y la imprime en pantalla
 * 
 * @param {string} elem ID del elemento html 
 * donde se va a imprimir
 */
const showDateOfAddedTask = (elem) => {

    const taskDate = getCurrentTime()

    elem.textContent = `Agregada el ${taskDate.date} / ${taskDate.month} / ${taskDate.year} a las ${taskDate.hours}:${taskDate.minutes}:${taskDate.seconds}`
}

/**
 * Obtener fecha límite desde el formulario
 */
