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
                return value.id
            }
        }
    }
    return false
}