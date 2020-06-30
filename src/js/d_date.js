/**
 * Validar que la fecha sea posterior 
 * a la del momento del guardar la tarea
 */
const validateDate = (date) => {
    const now = new Date()
    const deadline = new Date(date)
    if (deadline - now >= 0) {
        return true
    }
    return false
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
 * Obtener fecha y hora del momento de guardar la tarea
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
 * Se pasa tiempo legible 
 * lo que devuelve el Objeto Date()
 */
const getRemainTime = (date) => {
    let time = new Date(),
        remainTime = (new Date(date) - time + 1000) / 1000,
        seconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        minutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
        hours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
        days = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime, seconds, minutes, hours, days
    }
}
/**
 * Cuenta regresiva que se ejecuta cada segundo
 */
const countDown = (date, elem) => {
    const timeUpdate = setInterval(() => {
        let time = getRemainTime(date)
        elem.textContent = `Quedan: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`
        if (time.remainTime <= 1) {
            clearInterval(timeUpdate)
        }
    }, 1000)
}