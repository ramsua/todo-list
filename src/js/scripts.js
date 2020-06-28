const formTask = document.getElementById('formTask');
const msg = document.getElementById('msg');

const colors = {
    red: formTask.red,
    yellow: formTask.yellow,
    green: formTask.green
}

formTask.addEventListener('submit', (e) => {

    e.preventDefault()

    const task = formTask.inputTask.value.trim()

    const date = formTask.inputDate

    if (validateColor()) {
        console.log('Hay un color seleccionado');
    } else {
        console.log('Elige un color');
    }

})
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

const assignBgColor = () => {

}

// Utilidades

button.addEventListener('mousedown', () => {
    button.classList.add('scale-down')
    button.addEventListener('mouseup', () => {
        button.classList.remove('scale-down')
    })
})