const formTask = document.getElementById('formTask');
const msg = document.getElementById('msg');

formTask.addEventListener('submit', (e) => {

    e.preventDefault()

    const task = formTask.inputTask.value.trim()

    const date = formTask.inputDate.value

    if (validateColor()) {
        assignBgColor(msg, value.id)
    } else {
        console.log('Elige un color');
    }

})

const colors = {
    red: formTask.red,
    yellow: formTask.yellow,
    green: formTask.green
}

// Funciones
const validateColor = () => {
    for (const color in colors) {
        if (colors.hasOwnProperty(color)) {
            const value = colors[color];
            if (value.checked) {
                return true
            }
        }
    }
    return false
}
const assignBgColor = (elem, color) => {
    if (elem) {
        elem.classList.remove('red', 'yellow', 'green')
        elem.classList.add(color)
    }
}
// Utilidades

button.addEventListener('mousedown', () => {
    button.classList.add('scale-down')
    button.addEventListener('mouseup', () => {
        button.classList.remove('scale-down')
    })
})