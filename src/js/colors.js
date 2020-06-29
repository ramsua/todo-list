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
 * Retorna el color si hay un input en checked
 */
const assignBgColor = () => {
    const params = isColorChecked()
    if (params.bool) {
        return console.log(params.color)
    } else {
        return console.log('Se debe asignar un color de fondo');
    }
}