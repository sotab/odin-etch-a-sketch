const container = document.querySelector('#container')
const body = document.querySelector('body')
const genGridBtn = document.createElement('button')
genGridBtn.textContent = 'Generate'
body.appendChild(genGridBtn)

const getRandomColor = () => {
    const colors = ['blue', 'pink', 'purple', 'yellow', 'blue', 'green', 'brown', 'red']
    const random = Math.floor(Math.random() * 8)
    return colors[random]
}

const getGridSize = () => {
    const gridSize = window.prompt('Enter a number in the range of 1 - 100')
    return parseInt(gridSize, 10)
}

const clearGridContainer = () => {
    const container = document.getElementById('container')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

function generateSketchBox(nr = 16) {
    for (let i = 0; i < nr; i++) {
        const gridColumn = document.createElement('div')
        gridColumn.id = 'grid-column'
        for (let i = 0; i < nr; i++) {
            const height = 500 / nr
            const box = document.createElement('div')
            box.className = 'sketch-box'
            box.setAttribute('style', `height: ${height}px;`)
            gridColumn.appendChild(box)

            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = getRandomColor()
            })
        }
        container.appendChild(gridColumn)
    }
}

genGridBtn.addEventListener('click', () => {
    let gridSize = getGridSize()
    if (gridSize > 0 && gridSize < 101 ) {
        clearGridContainer()
        generateSketchBox(gridSize)
    } else {
        window.alert('Cannot generate grid! Please click generate again and enter a number in the range of 1 - 100')
    }

})

generateSketchBox(16)