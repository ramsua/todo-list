const colors = {
    red: formTask.red,
    yellow: formTask.yellow,
    green: formTask.green
}
/**
 * Recorre el objeto de colores
 * Si uno está checkeado, devuelve true y el color checkeado
 * Sino, devuelve false
 */
const isColorChecked = () => {
    for (const color in colors) {
        if (colors.hasOwnProperty(color)) {
            const value = colors[color];
            if (value.checked) {
                return {
                    bool: true,
                    color: value.id
                }
            }
        }
    }
    return false
}
/**
 * Asigna la clase CSS del color correspondiente ó
 * Imprime el msj correspondiente en pantalla
 */
const assignBgColor = () => {
    const params = isColorChecked()
    if (params.bool) {
        console.log(params.color)
    } else {
        console.log('Se debe asignar un color de fondo');
    }
}