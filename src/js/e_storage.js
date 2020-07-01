const ls = localStorage

const setTasks = (task) => {
    ls.setItem(task.id, JSON.stringify(task))
    getTasks()
}

const getTasks = () => {
    removeElems()
    if (ls.length !== 0) {
        for (const key in ls) {
            if (ls.hasOwnProperty(key)) {
                createTaskElem(JSON.parse(ls.getItem(key)))
            }
        }
    } else {
        noTasks(tasksList)
    }
}

const removeTask = (dataId) => {
    for (const task in ls) {
        if (ls.hasOwnProperty(task)) {
            if (task === dataId) {
                ls.removeItem(task)
            }
        }
    }
    getTasks()
}