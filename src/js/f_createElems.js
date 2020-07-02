
const createElem = (appendParent, elem, classes, content, dataId) => {

    const el = document.createElement(elem.toUpperCase())

    classes.forEach(addClass => {
        el.classList.add(addClass)
    });

    el.textContent = content

    if (el.nodeName === 'BUTTON' && dataId !== undefined) {
        el.dataset.id = dataId
    }

    if (el.nodeName === 'P' && dataId !== undefined) {
        el.setAttribute('id', dataId)
    }


    appendParent.appendChild(el)
}


/**
 * 
 * @param {Object} tasks - Crea la estructura con los datos necesarios
 */
const createTaskElem = (tasks) => {

    const li = document.createElement('LI')
    li.classList.add('tasks__task', `${tasks.bgColor}`)

    createElem(li, 'p', ['child-one'], `${tasks.name}`)

    createElem(li, 'button', ['child-two', 'button', 'delete'], 'Borrar', `${tasks.id}`)

    createElem(li, 'p', ['child-tree'], `${showCurrentTime()}`)

    createElem(li, 'p', ['child-four'], '', `${tasks.bgColor}${tasks.id}`)

    fragment.appendChild(li)

    tasksList.appendChild(fragment)

    updateDate(tasks.date, `${tasks.bgColor}${tasks.id}`)

}

const removeElems = () => {
    const childs = Array.from(tasksList.children)
    childs.forEach(child => {
        if (child) {
            child.remove()
        }
    });
}