const ls = localStorage

const setTasks = (task) => {
    if (ls.getItem('tasks') === null) {
        let tasks = []
        tasks.push(task)
        ls.setItem('tasks', JSON.stringify(tasks))
    } else {
        let tasks = JSON.parse(ls.getItem('tasks'))
        tasks.push(task)
        ls.setItem('tasks', JSON.stringify(tasks))
    }
    showTasks()
}

const showTasks = () => {
    let tasks = JSON.parse(ls.getItem('tasks'))

    // Elimina los hijos existentes
    while (tasksList.firstChild) {
        tasksList.removeChild(tasksList.firstChild);
    }

    // Crea los nuevos
    if (ls.getItem('tasks') !== null) {
        tasks.forEach(elem => {

            const li = document.createElement('LI')
            li.classList.add('tasks__task', `${elem.bgColor}`)

            const taskName = document.createElement('P')
            taskName.classList.add('child-one')
            taskName.textContent = `${elem.name}`

            const deleteTask = document.createElement('BUTTON')
            deleteTask.classList.add('child-two', 'button', 'delete')
            deleteTask.textContent = 'Borrar'

            const addedTasks = document.createElement('P')
            addedTasks.classList.add('child-tree')
            addedTasks.textContent = `${showCurrentTime()}`

            const remainTimeTask = document.createElement('P')
            remainTimeTask.classList.add('child-four')
            countDown(elem.date, remainTimeTask)

            li.appendChild(taskName)
            li.appendChild(deleteTask)
            li.appendChild(addedTasks)
            li.appendChild(remainTimeTask)
            fragment.appendChild(li)

            tasksList.appendChild(fragment)
        });
    }
}

const removeTask = (taskName) => {
    let tasks = JSON.parse(ls.getItem('tasks'))
    for (const i of tasks) {
        if (i.name === taskName) {
            tasks.splice(i, 1)
        }
    }
    ls.setItem('tasks', JSON.stringify(tasks))
    showTasks()
}