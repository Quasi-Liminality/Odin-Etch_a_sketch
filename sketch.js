let grid = document.querySelector('.grid');
let initialGridDimensions = 16;
let randomNum = () => Math.floor(Math.random() * 256);

function createGrid(dimensions) {
    newGrid = [];
    for (let i = 0; i < dimensions ** 2; i++) {
        let div = document.createElement('div');
        newGrid.push(div);
    }
    grid.style.setProperty('--grid-children', dimensions);
    grid.replaceChildren(...newGrid);
}

createGrid(initialGridDimensions);

function resizeGrid() {
    let newDimensions = (() => {
        let dimensions;
        do {
            dimensions = prompt('How many rows/columns should the grid have (1-100)?');
            if (dimensions === null) return false; // User cancelled the prompt
        } while (!parseInt(dimensions) || dimensions < 1 || dimensions > 100);
        return dimensions;
    })();
    if (!newDimensions) return;
    createGrid(newDimensions);
}

document.querySelector('#resizeBtn').addEventListener('click', resizeGrid);

grid.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    e.target.style.opacity = +e.target.style.opacity + 0.1;
});