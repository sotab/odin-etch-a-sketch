// UI elements
const body = document.querySelector('body')
const gridContainer = document.createElement('div')
const mainContainer = document.createElement('div')
const genGridBtn = document.createElement('button')
const header = document.createElement('h1')

genGridBtn.textContent = 'Generate'
header.textContent = 'Etch-a-sketch!'
gridContainer.id = 'grid-container'
mainContainer.id = 'main-container'

body.appendChild(header)
mainContainer.appendChild(genGridBtn)
mainContainer.appendChild(gridContainer)
body.appendChild(mainContainer)

// Logic
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
    const gridContainer = document.getElementById('grid-container')
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
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
        gridContainer.appendChild(gridColumn)
    }
}

genGridBtn.addEventListener('click', () => {
    let gridSize = getGridSize()
    if (gridSize > 0 && gridSize < 101 ) {
        clearGridContainer()
        generateSketchBox(gridSize)
    } else if (gridSize == 'Cancel') {

    }
    else {
        window.alert('Cannot generate grid! Please click generate again and enter a number in the range of 1 - 100')
    }

})

generateSketchBox(16)