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
const showCurrentTime = () => {
    let time = getCurrentTime();
    return `Agregada: ${time.date}/${time.month}/${time.year} a las ${time.hours}:${time.minutes}`
}

/**
 * Se pasa a tiempo legible 
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
        const time = getRemainTime(date);
        if (time.remainTime <= 1) {
            clearInterval(timeUpdate)
        }
        elem.textContent = `Quedan: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`
    }, 1000)
}

const updateDate = (date, elem) => {
    const el = document.getElementById(elem)
    if (el) {
        const time = getRemainTime(date);
        el.textContent = `Quedan: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`
        countDown(date, el)
    }
}