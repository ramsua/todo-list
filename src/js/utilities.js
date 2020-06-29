/**
 * Usa clases CSS para modificar
 * la escala del elemento
 */
button.addEventListener('mousedown', () => {
    button.classList.add('scale-down')
    button.addEventListener('mouseup', () => {
        button.classList.remove('scale-down')
    })
})