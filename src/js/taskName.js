const validateTaskName = (taskName) => {
    if (taskName !== '') {
        return console.log(taskName)
    } else {
        return console.log('La tarea debe tener un nombre');
    }
}