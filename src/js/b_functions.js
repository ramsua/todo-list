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