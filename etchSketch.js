const container = document.querySelector('.container')

const getRandomColor = () => {
    const colors = ['blue', 'pink', 'purple', 'yellow', 'blue', 'green', 'brown', 'red']
    const random = Math.floor(Math.random() * 8)
    return colors[random]
}

function generateSketchBox(nr = 16) {
    for (let i = 0; i < nr; i++) {
        const boxColumn = document.createElement('div')
        boxColumn.className = 'box-column'
        for (let i = 0; i < nr; i++) {
            const height = 500 / nr
            const box = document.createElement('div')
            box.className = 'sketch-box'
            box.setAttribute('style', `height: ${height}px;`)
            boxColumn.appendChild(box)

            box.addEventListener('mouseover', () => {
                box.style.backgroundColor = getRandomColor()
            })
        }
        container.appendChild(boxColumn)
    }
}

// console.log(getRandomColor())
generateSketchBox(100)